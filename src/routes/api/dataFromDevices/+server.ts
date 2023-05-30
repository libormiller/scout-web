import type { RequestHandler } from '@sveltejs/kit';
import { pb } from "$lib/pocketbase"
import { POCKETBASE_API_ID, POCKETBASE_API_PASSWD } from '$env/static/private';

//definice formátu pro data přicházející z gatewaye


type messageFromDevice = {
    rcvTime: number;
    imsi: number;
    payload: payloadData;
};

type payloadData = {
    ID: number;
    long: number;
    lat: number;
    battery: number;
    temperature: number;
}


//definice pro http metodu POST
export const POST = async ({ request }) => {

    const authData = await pb.collection('users').authWithPassword(POCKETBASE_API_ID, POCKETBASE_API_PASSWD);
    let rawDeviceData = await request.json()
    let arrOfDecodedData = Buffer.from(rawDeviceData.payload, 'base64').toString('utf8').split(',')

    let deviceData: messageFromDevice = {
        rcvTime: rawDeviceData.rcvTime,
        imsi: rawDeviceData.srcImsi,
        payload: {
            ID: Number(arrOfDecodedData[0]),
            long: Number(arrOfDecodedData[2]),
            lat: Number(arrOfDecodedData[1]),
            battery: Number(arrOfDecodedData[3]),
            temperature: Number(arrOfDecodedData[4])

        }
    }

    console.log(deviceData)

    const record = await pb.collection('devices').getFullList( 1, { filter: 'deviceID = '.concat(deviceData.payload.ID.toString()) } );



    //Data ve formátu ve kterém se uloží do databáze

    const data = {
        "device": record[0].id,
        "latitude": deviceData.payload.lat,
        "longitude": deviceData.payload.long,
        "bat": deviceData.payload.battery,
        "time": deviceData.rcvTime,
        "temp": deviceData.payload.temperature,
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


}
