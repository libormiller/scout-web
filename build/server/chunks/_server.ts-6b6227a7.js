import { p as pb } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';
import './index3-dcd0824c.js';

const POCKETBASE_API_ID = "1u8lfP83zI2kKFvJZOvA";
const POCKETBASE_API_PASSWD = "pkrH7zKX55tVh6Pq";
const POST = async ({ request }) => {
  await pb.collection("users").authWithPassword(POCKETBASE_API_ID, POCKETBASE_API_PASSWD);
  let payloadFromDevice = {};
  let deviceData = await request.json();
  let arrayOfBytesBIN = [];
  let arrayOfGNGLL = [];
  deviceData.payload = deviceData.payload.replace(/\s/g, "");
  const arrayOfBytesString = deviceData.payload.match(/.{1,8}/g);
  arrayOfBytesString?.forEach(function(value) {
    arrayOfBytesBIN.push(Number("0b".concat(value)));
  });
  payloadFromDevice.ID = arrayOfBytesBIN[0];
  payloadFromDevice.battery = arrayOfBytesBIN[50];
  payloadFromDevice.temperature = arrayOfBytesBIN[51];
  arrayOfBytesBIN.splice(51, 1);
  arrayOfBytesBIN.splice(50, 1);
  arrayOfBytesBIN.splice(0, 1);
  arrayOfBytesBIN.forEach(function(value) {
    arrayOfGNGLL.push(String.fromCharCode(value));
  });
  const GNGLLmessageparsedByComma = arrayOfGNGLL.join("").split(",");
  const record = await pb.collection("devices").getFullList(1, { filter: "deviceID = ".concat(payloadFromDevice.ID.toString()) });
  console.log();
  payloadFromDevice.GNGLL = {
    header: GNGLLmessageparsedByComma[0],
    lat: Number(GNGLLmessageparsedByComma[1].replace(".", "")) / 1e6,
    latDir: GNGLLmessageparsedByComma[2],
    lon: Number(GNGLLmessageparsedByComma[3].replace(".", "")) / 1e6,
    lonDir: GNGLLmessageparsedByComma[4],
    utc: Number(GNGLLmessageparsedByComma[5]),
    dataStatus: GNGLLmessageparsedByComma[6],
    modeInd: GNGLLmessageparsedByComma[7]
  };
  const data = {
    "device": record[0].id,
    "latitude": payloadFromDevice.GNGLL.lat,
    "longitude": payloadFromDevice.GNGLL.lon,
    "bat": payloadFromDevice.battery,
    "time": deviceData.rcvTime,
    "temp": payloadFromDevice.temperature
  };
  try {
    const record2 = await pb.collection("devicesData").create(data);
    pb.authStore.clear();
    return new Response(void 0, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
  return new Response(void 0, { status: 200 });
};

export { POST };
//# sourceMappingURL=_server.ts-6b6227a7.js.map
