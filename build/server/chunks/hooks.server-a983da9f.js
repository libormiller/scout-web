import { p as pb } from './pocketbase-e7258724.js';
import 'pocketbase';
import './index2-4ce6c877.js';
import './index3-dcd0824c.js';

const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh();
    } catch (_) {
      pb.authStore.clear();
    }
  }
  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);
  const response = await resolve(event);
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ httpOnly: false })
  );
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-a983da9f.js.map
