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
      text: 'Autoři: Libor Miller a Ondřej Gaman',
      subtitle: 'Kontakt: LinkedIn, nebo e-mail: libor.miller@gmail.com',
      image:
        '',
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
  <a href="https://www.linkedin.com/in/libor-miller-43b60930a">
  <div class="card shadow-lg bg-base-200 normal">
    <svg xmlns="http://www.w3.org/2000/svg" class="image" viewBox="0 0 24 24" fill="#000"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/></svg>
    <div class="overlay">
      <p class="font-bold text-2xl">{card[1].text}</p>
      <p class="font-bold">{card[1].subtitle}</p>
    </div>
  </div>
  </a>

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
