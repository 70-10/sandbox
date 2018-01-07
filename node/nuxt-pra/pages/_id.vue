<template lang="pug">
div
  .hero.is-primary
    .hero-body
      .container
        h1.title {{ item.album.name }}
  section.section
    .container
      h2.subtile {{ item.artist.name }}
</template>

<script>
export default {
  async asyncData({ app, params }) {
    let data = await app.$axios.$get(`/listened/${params.id}`);
    return { item: data };
  }
};
</script>

<style lang="sass">
</style>
