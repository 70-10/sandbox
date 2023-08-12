import { getPokeAPIUrl, fetcher } from "constants";
import useSWR from "swr";

function App() {
  const { data, error, isLoading } = useSWR(getPokeAPIUrl(1000), fetcher);

  return (
    <>
      <h1>Hello, React</h1>
      <div>
        {error && <div>failed to load</div>}
        {isLoading && <div>loading...</div>}
        {data && (
          <>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
