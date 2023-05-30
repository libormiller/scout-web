import type { RequestHandler } from './$types';
import { pb } from "$lib/pocketbase"

type jsonBodyFromGateway = {
    rcvTime: number;
    srcIP: string;
    srcPort: number;
    Bytes: number;
    payload: string;
};


export const POST = async ({ request }) => {
    
    let deviceData: jsonBodyFromGateway = await request.json()
    
    const data = {
        "testData": JSON.stringify(deviceData)
    };

    console.log(data)

    try {
        //ukládání do databáze
        const record = await pb.collection('data_test').create(data);
        pb.authStore.clear();
        //pokud se data uloží vratí se status 200 OK    
        return new Response(undefined, { status: 200 })
    } catch (error) {
        //pokud se data neuloží vrátí status 400 ERROR
        return new Response(JSON.stringify(error), { status: 400 });
    }


    return new Response(undefined, { status: 200 })
}