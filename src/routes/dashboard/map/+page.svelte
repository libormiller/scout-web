
<div class="rounded-box p-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500">
<div class="absolute rounded-box" style="height: 85vh;" id='map'></div>
</div>

<script lang="ts">
    import '@maptiler/sdk/dist/maptiler-sdk.css';
    import * as maptilersdk from '@maptiler/sdk';
    import { onDestroy, onMount } from 'svelte'
onMount(() => {
    maptilersdk.config.apiKey = '1u8lfP83zI2kKFvJZOvA';
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which SDK will render the map
    style: maptilersdk.MapStyle.STREETS,
    center: [16.62662018, 49.2125578], // starting position [lng, lat]
    zoom: 14 // starting zoom
});
})


</script>