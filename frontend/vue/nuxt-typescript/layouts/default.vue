<template>
  <div>
    <Nav/>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Nav: () => import("~/components/Nav.vue")
  }
})
export default class DefaultLayout extends Vue {}
</script>
