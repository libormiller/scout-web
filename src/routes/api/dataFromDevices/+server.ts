import type { RequestHandler } from '@sveltejs/kit';
import { pb } from "$lib/pocketbase"
import { POCKETBASE_API_ID, POCKETBASE_API_PASSWD } from '$env/static/private';

//definice formátu pro data přicházející z gatewaye
type jsonBodyFromGateway = {
    rcvTime: number;
    srcIP: string;
    srcPort: number;
    Bytes: number;
    payload: string;
};

type payloadData = {
    ID: number;
    GNGLL: GNGLLmessage;
    battery: number;
    temperature: number;
}

type GNGLLmessage = {
    header: string,
    lat: number,
    latDir: string,
    lon: number,
    lonDir: string,
    utc: number,
    dataStatus: string,
    modeInd: string
}

function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

function base64ToHex(str) {
    const raw = atob(str);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16);
      result += (hex.length === 2 ? hex : '0' + hex);
    }
    return result.toUpperCase();
  }


//definice pro http metodu POST
export const POST = async ({ request }) => {
    const authData = await pb.collection('users').authWithPassword(POCKETBASE_API_ID, POCKETBASE_API_PASSWD );
    let payloadFromDevice = {} as payloadData;

    let deviceData: jsonBodyFromGateway = await request.json()
    let arrayOfBytesBIN: number[] = [];
    let arrayOfGNGLL: string[] = [];
    let helperHexToBin: string = "";

    //base64 na hex
    deviceData.payload = base64ToHex(deviceData.payload)
    console.log(deviceData.payload)

    //hex na bin
    deviceData.payload = hex2bin(deviceData.payload)
    console.log(deviceData.payload)

    /* roztřízení dat po bytech do pole */
    const arrayOfBytesString = deviceData.payload.match(/.{1,8}/g)

    /*    převod dat v poli z formátu string na číslo  */
    arrayOfBytesString?.forEach(function (value: string) {
        arrayOfBytesBIN.push(Number("0b".concat(value)))
    })

    //vložení dat z pole do proměnných
    payloadFromDevice.ID = arrayOfBytesBIN[0];
    payloadFromDevice.battery = arrayOfBytesBIN[50];
    payloadFromDevice.temperature = arrayOfBytesBIN[51];

    //odstranění uložených dat z původního pole
    arrayOfBytesBIN.splice(51, 1);
    arrayOfBytesBIN.splice(50, 1);
    arrayOfBytesBIN.splice(0, 1);

    //rozkódování čísel na znaky ASCII
    arrayOfBytesBIN.forEach(function (value: number) {
        arrayOfGNGLL.push(String.fromCharCode(value))
    })

    //rozdělení GNGLL zprávy do pole
    const GNGLLmessageparsedByComma = arrayOfGNGLL.join("").split(",");

    const record = await pb.collection('devices').getFullList( 1, { filter: 'deviceID = '.concat(payloadFromDevice.ID.toString()) } );
    console.log(GNGLLmessageparsedByComma)

    //vložení GNGLL zprávy do náležitých proměnných
    payloadFromDevice.GNGLL = {
        header: GNGLLmessageparsedByComma[0],
        lat: Number(GNGLLmessageparsedByComma[1].replace(".", "")) / 1000000,
        latDir: GNGLLmessageparsedByComma[2],
        lon: Number(GNGLLmessageparsedByComma[3].replace(".", "")) / 1000000,
        lonDir: GNGLLmessageparsedByComma[4],
        utc: Number(GNGLLmessageparsedByComma[5]),
        dataStatus: GNGLLmessageparsedByComma[6],
        modeInd: GNGLLmessageparsedByComma[7]
    }

    
    //Data ve formátu ve kterém se uloží do databáze
    const data = {
        "device": record[0].id,
        "latitude": payloadFromDevice.GNGLL.lat,
        "longitude": payloadFromDevice.GNGLL.lon,
        "bat": payloadFromDevice.battery,
        "time": deviceData.rcvTime,
        "temp": payloadFromDevice.temperature,
    };


    try {
        //ukládání do databáze
        const record = await pb.collection('devicesData').create(data);
        pb.authStore.clear();
        //pokud se data uloží vratí se status 200 OK    
        return new Response(undefined, { status: 200 })
    } catch (error) {
        //pokud se data neuloží vrátí status 400 ERROR
        return new Response(JSON.stringify(error), { status: 400 });
    }


    return new Response(undefined, { status: 200 })
}
