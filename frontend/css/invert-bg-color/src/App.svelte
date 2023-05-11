<main>
  <p class="invert">反転する文字</p>
  <div class="black" />
  <div class="white" />
  <div class="black" />
  <div class="white" />
  <div class="green" />
  <div class="red" />
  <div class="white" />
</main>

<style>
  main {
    padding-bottom: 200vh;
  }

  .invert {
    position: fixed;
    top: 2%;
    right: 2%;
    mix-blend-mode: exclusion;
    filter: invert(100%);
  }

  .black {
    background-color: black;
    height: 200px;
  }

  .white {
    background-color: white;
    height: 200px;
  }

  .red {
    background-color: red;
    height: 200px;
  }
  .green {
    background-color: green;
    height: 200px;
  }
</style>
