import { c as create_ssr_component } from './index3-dcd0824c.js';
import '@maptiler/sdk';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let latestPosition;
  latestPosition = [Number(data.records[0].longitude), Number(data.records[0].latitude)];
  console.log(latestPosition);
  data.records?.forEach(function(value) {
    Number(value.latitude);
    Number(value.longitude);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"rounded-box p-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500"}"><div class="${"absolute rounded-box"}" style="${"height: 82vh;"}" id="${"map"}"></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ae16f9ee.js.map
