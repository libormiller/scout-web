import { p as pb } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';
import './index3-dcd0824c.js';

const load = async ({ params }) => {
  let mapParamID;
  mapParamID = params.map.toString();
  console.log(mapParamID);
  try {
    const records = await pb.collection("devicesData").getFullList(void 0, {
      filter: "device.deviceID =".concat(mapParamID),
      sort: "-created"
    });
    console.log(records);
    return {
      records
    };
  } catch (error) {
    console.log(error);
  }
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-ae16f9ee.js')).default;
const file = '_app/immutable/entry/dashboard-map-_map_-page.svelte.be6ba474.js';
const universal_id = "src/routes/dashboard/map/[map]/+page.ts";
const imports = ["_app/immutable/entry/dashboard-map-_map_-page.svelte.be6ba474.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/entry/dashboard-map-_map_-page.ts.8c2c0da7.js","_app/immutable/chunks/pocketbase.b37ce63f.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/chunks/_page.126d5f8b.js"];
const stylesheets = ["_app/immutable/assets/_page.cee03c15.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-31edd8ad.js.map
