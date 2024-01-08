<script>
  let cards = [
    { title: "Tvoje máma", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", size: 'small' },
    { title: "Product 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", size: 'medium' },
    { title: "Product 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", size: 'medium' },
    { title: "Product 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", size: 'medium' },
    // Add more cards with different sizes as needed
  ];
</script>

<div class="text-2xl font-mono font-extrabold">
    Představení projektu:
</div>
<div class="grid gird-cols-2 gap-4 ">
    <main>
      {#each cards as { title, description, size }}
      <div class={`card ${size} shadow-lg`}>
        <h2 class="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    {/each}
      </main>

</div>


<style>
  main {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .card {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
  }

  .small {
    grid-column: span 1;
    grid-row:span 5;
  }

  .medium {
    grid-column: span 2;
  }

  /* Add more size classes and adjust the grid-column property as needed */
</style>