<script lang="ts">
  import { each, onMount, onDestroy } from "svelte/internal"
  import { pb } from "$lib/pocketbase"
    import { dev } from "$app/environment"

  


export let data;
let devices = data.devices;
let unsubscribe: () => void;


onMount(async function () {
  unsubscribe = await pb.collection('devices').subscribe('*', function (e) {
    if (e.action === 'create') {
      devices = [...devices, e.record]
    }
    if (e.action === 'delete'){
     devices = devices.filter((m) => m.deviceID !== e.record.deviceID)
    }
  console.log(devices)
})
});




  onDestroy(() => {
    unsubscribe?.();
  })

</script>

<div class="flex space-x-4 items-start max-h-full">
<div>
<ul class="menu bg-base-200 w-56 p-2 rounded-box shadow-xl">
  <li>
    <!-- odkaz nakomponentu ve které uživatel přidá zařízení --> 
    <a href="/dashboard/add-device" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    Přidat zařízení
    </a>
  </li>
  <li>
    <!-- odkaz nakomponentu ve které uživatel přidá zařízení --> 
    <a href="/dashboard/delete-device" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    Odebrat zařízení
    </a>
  </li>
  <!-- list vygenerovaný ze zařízení konkrétního uživatele, které byly uloženy v databázi -->
  {#each devices as device}
  <li>
    <!-- Odkaz na dynamické stránky které se generují z dat pro každé načtené zařízení -->
    <a data-sveltekit-reload href="/dashboard/map/{device.deviceID}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
       Zařízení s ID: {device.deviceID}
    </a>
  </li>
  {/each}
</ul>
</div>
<div class="container max-w-full ">
<div class="bg-base-200 rounded-box shadow-xl relative">
<slot />
</div>
</div>
</div>