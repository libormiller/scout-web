<script>
  let card = [
    {
      text: 'SCOUT',
      subtitle: 'PCB trackovacího zařízení SCOUT',
      image:
        'https://backend.project-scout.cz/api/files/tw1vp2tfqbm1elp/jbdjduv4w0x1x5n/pcb_2023_dec_05_08_23_12_pm_000_customized_view53824454882_TUgwpaqteC.png',
      customCSS: 'small',
    },
    {
      text: 'NB-IoT',
      subtitle: 'Zařízení využívá low power síť NB-IoT',
      image:
        'https://backend.project-scout.cz/api/files/tw1vp2tfqbm1elp/i20v7ah8ybujl4s/nbiot_AQD7Rp7osM.png',
      customCSS: 'normal',
    },
    {
      text: 'GNSS',
      subtitle: 'Schopnost určit polohu s přesností až na 1.7 m',
      image:
        'https://backend.project-scout.cz/api/files/tw1vp2tfqbm1elp/phoircsl64idseq/gps_eqW6sA7Cjc.png',
      customCSS: 'normal',
    },
    {
      text: 'Senzorika',
      image:
        'https://backend.project-scout.cz/api/files/tw1vp2tfqbm1elp/60ck34dmxpdatj7/senzory_UjhcP2YmN1.png',
      customCSS: 'medium',
    },
  ]
</script>

<div class="mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
  <div class="card shadow-lg bg-base-200 small">
    <img class="image2 " src={card[0].image} alt="/" />
    <div class="overlay">
      <p class="font-bold text-2xl">{card[0].text}</p>
      <p class="font-bold" >{card[0].subtitle}</p>
    </div>
  </div>

  <div class="card shadow-lg bg-base-200 normal">
    <img class="image" src={card[1].image} alt="/" />
    <div class="overlay">
      <p class="font-bold text-2xl">{card[1].text}</p>
      <p class="font-bold">{card[1].subtitle}</p>
    </div>
  </div>

  <div class="card shadow-lg bg-base-200 normal">
    <img class="image" src={card[2].image} alt="/" />
    <div class="overlay">
      <p class="font-bold text-2xl">{card[2].text}</p>
      <p class="font-bold">{card[2].subtitle}</p>
    </div>
  </div>

  <div class="card shadow-lg bg-base-200 medium">
    <img class="image" src={card[3].image} alt="/" />
    <div class="overlay">
      <p class="font-bold text-2xl">{card[3].text}</p>
    </div>
  </div>
</div>

<style>
  .card {
    position: relative;

    overflow: hidden;
  }

  .image {
    max-height: 200px;
    width: 100%;
    padding: 20px;
    object-fit: contain;
  }

  .image2 {
    max-height: 500px;
    width: 100%;
    padding: 10px;
    object-fit: contain;
  }

  .overlay {
    padding: 1rem;
    text-align: center;
  }

  .small {
    grid-column: span 1;
    grid-row: span 2;
  }

  .medium {
    grid-column: span 2;
  }
</style>
