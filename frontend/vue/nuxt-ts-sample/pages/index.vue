<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  message: string = "Hello world !";
}
</script>
