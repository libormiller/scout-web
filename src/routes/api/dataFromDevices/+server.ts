import type { RequestHandler } from '@sveltejs/kit';


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
    GNGLL: string;
    battery: number;
    temperature: number;
}


//definice pro http metodu POST
export const POST = async ({request}) => {
    let payloadFromDevice = {} as payloadData;
    let deviceData: jsonBodyFromGateway = await request.json()
    let arrayOfBytesBIN:number []= [];
    let arrayOfGNLL: string [] = [];

    //odstraní případné mezery v binárním kódu 
    deviceData.payload = deviceData.payload.replace(/\s/g, "")

    const arrayOfBytesString = deviceData.payload.match(/.{1,8}/g)

    arrayOfBytesString?.forEach(function (value:string) {
        arrayOfBytesBIN.push(Number("0b".concat(value)))
    })

    payloadFromDevice.ID = arrayOfBytesBIN [0];
    payloadFromDevice.battery = arrayOfBytesBIN[50];
    payloadFromDevice.temperature = arrayOfBytesBIN[51];

    arrayOfBytesBIN.splice(51,1);
    arrayOfBytesBIN.splice(50,1);
    arrayOfBytesBIN.splice(0,1);


     arrayOfBytesBIN.forEach(function(value:number){
        arrayOfGNLL.push(String.fromCharCode(value))
    }) 
    payloadFromDevice.GNGLL = arrayOfGNLL.join("")

    console.log(payloadFromDevice);

    return new Response(undefined,{status: 200})
}
