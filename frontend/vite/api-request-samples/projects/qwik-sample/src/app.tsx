import { component$, useResource$, Resource } from "@builder.io/qwik";
import { getPokeAPIUrl } from "constants";
import { Pokemon } from "models";

export const App = component$(() => {
  const reposResource = useResource$(({ track, cleanup }) => {
    track(() => getPokeAPIUrl(1000));

    const controller = new AbortController();
    cleanup(() => controller.abort());

    return getPokemon(controller);
  });

  return (
    <>
      <h1>Hello, Qwik</h1>
      <Resource
        value={reposResource}
        onPending={() => <>Loading...</>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(data) => (
          <>
            <div>{data.name}</div>
            <img src={data.sprites.front_default} alt={data.name} />
          </>
        )}
      />
    </>
  );
});

async function getPokemon(controller?: AbortController): Promise<Pokemon> {
  return await fetch(getPokeAPIUrl(1000), {
    signal: controller?.signal,
  }).then((res) => res.json());
}
