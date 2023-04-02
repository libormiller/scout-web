
export const GET = ({request}) => {
    const autHeader = request.headers.get('Authorization')
    console.log(autHeader)
    return new Response(JSON.stringify({message: "hi"}), {status: 200});
}
