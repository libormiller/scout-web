<script lang="ts">
    import { currentUser, pb } from "$lib/pocketbase"


let deviceID: number;
    async function newDevice() {
        const data = {
            "deviceID": deviceID,
            "user": $currentUser?.id,
        };
        try {
            const writeNewDevice = await pb.collection('devices').create(data);
        } catch (error) {
            console.log(error);
        }
        

    }
</script>

<div class="container max-w-md mx-auto">
  <h1>Přidat zařízení</h1>
    <form on:submit|preventDefault={newDevice}>
        <div class="form-control gap-2 mb-4">
      <input type="number" class="input input-bordered" placeholder="ID zařízení 0-255" bind:value={deviceID}/>
      <button type="submit" class="btn btn-primary max-w-fit">Přidat</button>
    </div>
    </form>
  </div>
