<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { currentUser, pb } from '$lib/pocketbase'
  import '../app.postcss'
</script>


<div class="px-8 py-8 ">
  <div class="navbar bg-base-200 rounded-lg shadow-xl max-w-full ">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl font-bold text-indigo-500">Project scout</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        {#if $currentUser}
          <li><a href="/">{$currentUser.email}</a></li>
          <li>
            <form
              method="POST"
              action="/logout"
              use:enhance={() => {
                return async ({ result }) => {
                  pb.authStore.clear()
                  await applyAction(result)
                }
              }}
            >
              <button>Odhlásit se</button>
            </form>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        {:else}
          <li><a href="/login">Přihlásit se</a></li>
          <li><a href="/register">Zaregistrovat</a></li>
        {/if}
      </ul>
    </div>
  </div>
</div>
<div class="max-w-full mx-auto px-8">
  <slot />
</div>
