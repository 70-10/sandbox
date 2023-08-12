<script lang="ts">
import {getPokeAPIUrl, fetcher} from "constants"

const fetchPokemon = fetcher(getPokeAPIUrl(1000))
</script>

<main>
  <h1>Hello, Svelte</h1>

  {#await fetchPokemon}
	  <p>loading...</p>
  {:then data}
    <h2>{data.name}</h2>
	  <img src={data.sprites.front_default} alt={data.name} />
  {:catch error}
	  <p>filed to load</p>
  {/await}
</main>

<style>
</style>
