import { c as create_ssr_component } from './index3-dcd0824c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-004beb35.js.map
