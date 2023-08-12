import { Pokemon } from "models";

export const getPokeAPIUrl = (idOrName: number | string) =>
  new URL(`/api/v2/pokemon/${idOrName}`, "https://pokeapi.co").toString();

export const fetcher = (path: string) =>
  fetch(path).then((res) => res.json() as Promise<Pokemon>);
