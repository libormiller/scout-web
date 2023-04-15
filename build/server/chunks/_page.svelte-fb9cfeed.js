import { c as create_ssr_component, b as subscribe, f as add_attribute } from './index3-dcd0824c.js';
import { c as currentUser } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let deviceID;
  $$unsubscribe_currentUser();
  return `<div class="${"py-4"}"><div class="${"container max-w-md mx-auto"}"><h1>Přidat zařízení</h1>
    <form><div class="${"form-control gap-2 mb-4"}"><input type="${"number"}" class="${"input input-bordered"}" placeholder="${"ID zařízení 0-255"}"${add_attribute("value", deviceID, 0)}>
      <button type="${"submit"}" class="${"btn btn-primary max-w-fit"}">Přidat</button></div></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fb9cfeed.js.map
