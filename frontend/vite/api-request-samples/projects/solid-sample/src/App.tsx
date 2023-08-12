import { createResource } from "solid-js";
import { getPokeAPIUrl, fetcher } from "constants";

function App() {
  const [data] = createResource(getPokeAPIUrl(1000), fetcher);

  return (
    <>
      <h1>Hello, Solid</h1>
      {data.error && <div>failed to load</div>}
      {data.loading && <div>loading...</div>}
      {data() && (
        <>
          <h2>{data()!.name}</h2>
          <img src={data()!.sprites.front_default} alt={data()!.name} />
        </>
      )}
    </>
  );
}

export default App;
