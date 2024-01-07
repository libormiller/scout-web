<script lang="ts">
  import '@maptiler/sdk/dist/maptiler-sdk.css'
  import * as maptilersdk from '@maptiler/sdk'
  import { onDestroy, onMount } from 'svelte'
    import { PUBLIC_MAP_TILER_KEY } from '$env/static/public'

  export let data
  let latestPosition: maptilersdk.LngLatLike


    latestPosition = [
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
    maptilersdk.config.apiKey = PUBLIC_MAP_TILER_KEY
    const map = new maptilersdk.Map({
      container: 'map', 
      style: maptilersdk.MapStyle.OUTDOOR,
      center: latestPosition, 
      zoom: 14, 
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

<div class="rounded-box p-2 bg-gradient-to-r from-green-400 to-blue-500">
  <div class="absolute rounded-box" style="height: 82vh;" id="map" />
</div>
