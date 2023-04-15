import { c as create_ssr_component, b as subscribe, e as escape } from './index3-dcd0824c.js';
import './utils-ae3035df.js';
import { c as currentUser } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `<div class="${"min-h-screen"}"><div class="${"px-8 py-8 "}"><div class="${"navbar bg-base-200 rounded-lg shadow-xl max-w-full "}"><div class="${"flex-1"}"><a href="${"/"}" class="${"btn btn-ghost text-xl font-bold text-indigo-500"}">Project scout</a></div>
    <div class="${"flex-none"}"><ul class="${"menu menu-horizontal px-1"}">${$currentUser ? `<li><a href="${"/"}">${escape($currentUser.email)}</a></li>
          <li><form method="${"POST"}" action="${"/logout"}"><button>Odhlásit se</button></form></li>
          <li><a href="${"/dashboard"}">Dashboard</a></li>` : `<li><a href="${"/login"}">Přihlásit se</a></li>
          <li><a href="${"/register"}">Zaregistrovat</a></li>`}</ul></div></div></div>
<div class="${"max-w-full mx-auto px-8"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d3e1ff71.js.map
