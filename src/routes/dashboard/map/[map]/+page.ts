import type { PageLoad } from './$types';
import { currentUser, pb } from "$lib/pocketbase"

export const load = (async ({ params }) => {
  let mapParamID: string;
  mapParamID = params.map.toString()
  console.log(mapParamID)
  try {
    const records = await pb.collection('devicesData').getFullList(undefined,{
      filter: "device.deviceID =".concat(mapParamID),
      sort: "-created"
  });

  console.log(records)
  return {
    records
  };
  } catch (error) {
    console.log(error)
  }



}) satisfies PageLoad;