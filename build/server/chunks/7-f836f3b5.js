import { r as redirect } from './index-0d73d488.js';

const actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
      await locals.pb.collection("users").authWithPassword(data.email, data.password);
    } catch (error) {
      console.error(error);
      throw error;
    }
    throw redirect(303, "/dashboard/add-device");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 7;
const component = async () => (await import('./_page.svelte-67582a7b.js')).default;
const file = '_app/immutable/entry/login-page.svelte.44a411c4.js';
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/entry/login-page.svelte.44a411c4.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/chunks/forms.9938c00b.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.2571394c.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/pocketbase.b37ce63f.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-f836f3b5.js.map
