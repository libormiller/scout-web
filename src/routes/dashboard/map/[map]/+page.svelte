<script lang="ts">
  import '@maptiler/sdk/dist/maptiler-sdk.css'
  import * as maptilersdk from '@maptiler/sdk'
  import { onDestroy, onMount } from 'svelte'

  export let data

  let latestPosition: maptilersdk.LngLatLike = [
    Number(data.records[0].longitude),
    Number(data.records[0].latitude),
  ]
  console.log(latestPosition)

  type geojson = {
    name: 'Track'
    type: 'FeatureCollection'
    features: [
      {
        type: 'Feature'
        geometry: {
          type: 'LineString'
          coordinates: number[][]
        }
        properties: null
      }
    ]
  }

  let mygeojson: geojson = {
    name: 'Track',
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
        properties: null,
      },
    ],
  }

  data.records?.forEach(function (value) {
    const latitude: number = Number(value.latitude)
    const longitude: number = Number(value.longitude)
    mygeojson.features[0].geometry.coordinates.push([longitude, latitude])
  })

  //console.log(mygeojson)
  onMount(() => {
    maptilersdk.config.apiKey = '1u8lfP83zI2kKFvJZOvA'
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element in which SDK will render the map
      style: maptilersdk.MapStyle.OUTDOOR,
      center: latestPosition, // starting position [lng, lat]
      zoom: 14, // starting zoom
    })

    map.on('load', async function() {
      const geojson = await mygeojson;
      map.addSource('gps_tracks', {
        'type': 'geojson',
        'data': geojson
      });
      map.addLayer({
        'id': 'grand_teton',
        'type': 'line',
        'source': 'gps_tracks',
        'layout': {},
        'paint': {
          'line-color': '#e11',
          'line-width': 4
        }
      });
    });
  })
</script>

<div class="rounded-box p-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500">
  <div class="absolute rounded-box" style="height: 85vh;" id="map" />
</div>
