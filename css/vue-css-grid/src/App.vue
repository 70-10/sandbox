<template>
  <div class="container">
    <header class="header">Header</header>
    <div class="menu">Menu</div>
    <div class="main">Main</div>
  </div>
</template>

<script>
import "ress";

export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  color: white;
  display: grid;
  grid-template: 44px 1fr / 20% 80%;

  > .header {
    grid-area: 1 / 1 / span 1 / span 2;
  }

  > .menu {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  > .main {
    grid-area: 2 / 2 / span 1 / span 1;
  }
}

.header {
  background-color: #76b94b;
}

.menu {
  background-color: #fdc02d;
}

.main {
  background-color: #00a2ff;
  height: 300px;
}
</style>
