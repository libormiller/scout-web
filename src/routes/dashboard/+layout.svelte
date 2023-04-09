<script lang="ts">
    import { each } from "svelte/internal"


export let data;
</script>

<div class="flex space-x-4 items-start max-h-full">
<div>
<ul class="menu bg-base-200 w-56 p-2 rounded-box shadow-xl">
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a href="/dashboard/add-device" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      Přidat zařízení
      </a>
    </li>
    {#each data.devices as device}
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a data-sveltekit-reload href="/dashboard/map/{device.deviceID}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
         Zařísení s ID: {device.deviceID}
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