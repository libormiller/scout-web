import type { RequestHandler } from '@sveltejs/kit';
import { pb } from "$lib/pocketbase"
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWD } from '$env/static/private';

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
    utc:number,
    dataStatus: string,
    modeInd: string
}
//definice pro http metodu POST
export const POST = async ({ request }) => {
    pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWD)
    let payloadFromDevice = {} as payloadData;
    let deviceData: jsonBodyFromGateway = await request.json()
    let arrayOfBytesBIN: number[] = [];
    let arrayOfGNGLL: string[] = [];

    //odstraní případné mezery v binárním kódu 
    deviceData.payload = deviceData.payload.replace(/\s/g, "")

    const arrayOfBytesString = deviceData.payload.match(/.{1,8}/g)

    arrayOfBytesString?.forEach(function (value: string) {
        arrayOfBytesBIN.push(Number("0b".concat(value)))
    })

    payloadFromDevice.ID = arrayOfBytesBIN[0];
    payloadFromDevice.battery = arrayOfBytesBIN[50];
    payloadFromDevice.temperature = arrayOfBytesBIN[51];

    arrayOfBytesBIN.splice(51, 1);
    arrayOfBytesBIN.splice(50, 1);
    arrayOfBytesBIN.splice(0, 1);


    arrayOfBytesBIN.forEach(function (value: number) {
        arrayOfGNGLL.push(String.fromCharCode(value))
    })

    const GNGLLmessageparsedByComma = arrayOfGNGLL.join("").split(",");

    const record = await pb.collection('devices').getFullList(1, {filter: 'deviceID = '.concat(payloadFromDevice.ID.toString())});


    payloadFromDevice.GNGLL = {
        header: GNGLLmessageparsedByComma[0],
        lat: Number(GNGLLmessageparsedByComma[1].replace(".",""))/1000000,
        latDir: GNGLLmessageparsedByComma[2],
        lon: Number(GNGLLmessageparsedByComma[3].replace(".",""))/1000000,
        lonDir: GNGLLmessageparsedByComma[4],
        utc: Number (GNGLLmessageparsedByComma[5]),
        dataStatus: GNGLLmessageparsedByComma[6],
        modeInd: GNGLLmessageparsedByComma[7]
    }

    console.log(record)

    const data = {
        "device":"rur3h8hp0wy5dl1"/*  payloadFromDevice.ID */,
        "latitude": payloadFromDevice.GNGLL.lat,
        "longitude": payloadFromDevice.GNGLL.lon,
        "bat": payloadFromDevice.battery,
        "time": deviceData.rcvTime,
        "temp": payloadFromDevice.temperature,
    };


    try {
            const record = await pb.collection('devicesData').create(data); 
            return new Response(undefined, { status: 200 })        
    } catch (error) {
        return new Response(JSON.stringify(error), {status: 400});
    }



}
