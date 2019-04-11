<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  message: string = "Hello World";
}
</script>
