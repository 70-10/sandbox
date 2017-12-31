<template lang="pug">
div
  .hero.is-primary
    .hero-body
      .container
        h1.title Next Practice
  section.section
    .container
      ul
        li(v-for="item in list") {{ item.date }} {{ item.album.name }} - {{ item.artist.name }}
</template>

<script>
export default {
  async asyncData({ app }) {
    let data = await app.$axios.$get("/listened");
    return { list: data };
  }
};
</script>

<style lang="sass">
</style>
