<script lang="ts">
  import { currentUser, pb } from '$lib/pocketbase'

  let deviceID: number
  async function deleteDevice() {
    try{
        const record = await pb.collection('devices').getFirstListItem(`deviceID="${deviceID}"`, {});
        //console.log(record.id)
        await pb.collection('devices').delete(String(record.id));
    } catch{
        alert("failed to delete device")
    }

  }

</script>

<div class="py-4">
  <div class="container max-w-md mx-auto">
    <h1>Odebrat zařízení</h1>
    <form on:submit|preventDefault={deleteDevice}>
      <div class="form-control gap-2 mb-4">
        <input
          type="number"
          class="input input-bordered"
          placeholder="ID zařízení 0-255"
          bind:value={deviceID}
        />
        <button type="submit" class="btn btn-primary max-w-fit">Odebrat</button>
      </div>
    </form>
  </div>
</div>
