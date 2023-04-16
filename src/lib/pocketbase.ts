import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'
import eventsource from '@types/eventsource';

global.EventSource = eventsource;


export const pb = new PocketBase(import.meta.env.VITE_PB_URL)




export const currentUser = writable(pb.authStore.model)
