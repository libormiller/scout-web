import { r as redirect } from './index-0d73d488.js';

const actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
      await locals.pb.collection("users").create(data);
      await locals.pb.collection("users").authWithPassword(data.email, data.password);
    } catch (e) {
      console.error(e);
      throw e;
    }
    throw redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 9;
const component = async () => (await import('./_page.svelte-c546dc4a.js')).default;
const file = '_app/immutable/entry/register-page.svelte.fe1ac852.js';
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/entry/register-page.svelte.fe1ac852.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/chunks/forms.9938c00b.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.2571394c.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/pocketbase.b37ce63f.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-55158f4b.js.map
