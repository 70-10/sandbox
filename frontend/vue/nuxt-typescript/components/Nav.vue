<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    {{"/"}}
    <nuxt-link to="/about">About</nuxt-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Nav extends Vue {}
</script>
