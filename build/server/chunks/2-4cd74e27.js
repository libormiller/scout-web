import { p as pb } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';
import './index3-dcd0824c.js';

const load = async ({}) => {
  const records = await pb.collection("devices").getFullList();
  return {
    devices: records
  };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-1a1dfb33.js')).default;
const file = '_app/immutable/entry/dashboard-layout.svelte.0874d205.js';
const universal_id = "src/routes/dashboard/+layout.ts";
const imports = ["_app/immutable/entry/dashboard-layout.svelte.0874d205.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/entry/dashboard-layout.ts.ab3f0a5b.js","_app/immutable/chunks/pocketbase.b37ce63f.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/chunks/_layout.ff79a909.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=2-4cd74e27.js.map
