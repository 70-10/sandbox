<template>
  <div id="app">
    {{ count }}
    <div>
      <button @click="add(1 * 60 * 60)">+ 1 hour</button>
      <button @click="add(1 * 60)">+ 1 minute</button>
      <button @click="add(1)">+ 1 second</button>
    </div>
    <button @click="start">start</button>
    <button @click="stop">stop</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import numeral from "numeral";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  timer: number = 100;
  interval: number = 0;

  get count() {
    return numeral(this.timer).format("00:00:00");
  }

  start(): void {
    if (this.timer <= 0) {
      return;
    }
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(this.interval);
        return;
      }
    }, 1000);
  }

  stop(): void {
    clearInterval(this.interval);
  }

  add(num: number): void {
    this.timer += num;
  }

  reset(): void {
    clearInterval(this.interval);
    this.timer = 0;
  }
}
</script>

<style lang="scss" scoped></style>
