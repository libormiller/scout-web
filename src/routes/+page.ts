import type { PageLoad } from './$types';
import { pb } from '$lib/pocketbase'

export const load = (async () => {
    const records = await pb.collection('pictures').getFullList();
    return {records};
}) satisfies PageLoad;