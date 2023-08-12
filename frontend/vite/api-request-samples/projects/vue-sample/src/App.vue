<script setup lang="ts">
import useSWRV from "swrv";
import { getPokeAPIUrl, fetcher } from "constants";

const { data, error } = useSWRV(getPokeAPIUrl(1000), fetcher);
</script>

<template>
  <div>
    <h1>Hello, Vue</h1>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>
      <h2>{{ data.name }}</h2>
      <img :src="data.sprites.front_default" :alt="data.name" />
    </div>
  </div>
</template>

<style scoped></style>
