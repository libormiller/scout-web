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
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Item 1
      </a>
    </li>
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        Item 3
      </a>
    </li>
  </ul>
</div>
<div class="container max-w-full ">
<div class="bg-base-200 rounded-box shadow-xl p-2">
<slot />
</div>
</div>
</div>