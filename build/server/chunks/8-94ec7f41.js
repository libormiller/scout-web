import { r as redirect } from './index-0d73d488.js';

const actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;
    throw redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
const server_id = "src/routes/logout/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-94ec7f41.js.map
