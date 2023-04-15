import PocketBase from 'pocketbase';
import { w as writable } from './index2-4ce6c877.js';

const pb = new PocketBase("https://backend.project-scout.cz");
const currentUser = writable(pb.authStore.model);

export { currentUser as c, pb as p };
//# sourceMappingURL=pocketbase-e7258724.js.map
