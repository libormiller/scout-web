import { currentUser, pb } from "$lib/pocketbase"


export const load = (async({}) => {
    
    const records = await pb.collection('devices').getFullList()

    return {
        devices: records
    }
})