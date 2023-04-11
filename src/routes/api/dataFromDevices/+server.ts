import type { RequestHandler } from '@sveltejs/kit';

type jsonBodyFromGateway = {
    rcvTime: number;
    
};




export const POST = async ({request}) => {
    const body = await request.json()
    console.log(body)



    return new Response(undefined,{status: 200})
}
