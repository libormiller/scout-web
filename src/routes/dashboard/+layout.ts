import { pb } from "$lib/pocketbase"

/* Asynchronní funkce která načítá data z databáze */
export const load = (async({}) => {
    
    /* sdk pošle dotaz na API naší běžící instance PocketBase */ 
    const records = await pb.collection('devices').getFullList()
    return {
        devices: records
    }
})