<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 id="title" class="title has-text-centered">{{ count }}</h1>
        <progress class="progress is-success" :value="timer" :max="max">{{count}}</progress>
        <div>
          <button @click="add(1 * 60 * 60)">+ 1 hour</button>
          <button @click="add(1 * 60)">+ 1 minute</button>
          <button @click="add(1)">+ 1 second</button>
        </div>
        <button @click="start">start</button>
        <button @click="stop">stop</button>
        <button @click="reset">reset</button>
      </div>
    </div>
  </section>
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
  max: number = 0;
  timer: number = 0;
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
    this.max += num;
  }

  reset(): void {
    clearInterval(this.interval);
    this.timer = 0;
    this.max = 0;
  }
}
</script>

<style lang="scss" scoped>
#title {
  font-size: 10rem;
}
progress {
  height: 3rem;
}
</style>
