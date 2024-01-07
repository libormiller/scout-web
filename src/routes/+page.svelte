<div class="text-2xl font-mono font-extrabold">
    Představení projektu:

</div>
<div class="grid gird-cols-2 gap-4">
    <main>
        <div class="card">
            <h2 class="text-xl font-bold mb-2">title</h2>
            <p>description</p>
          </div>
          <div class="card">
            <h2 class="text-xl font-bold mb-2">title</h2>
            <p>description</p>
          </div>
          <div class="card">
            <h2 class="text-xl font-bold mb-2">title</h2>
            <p>description</p>
          </div>
      </main>

</div>

<style>
    .card {
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    main {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  </style>