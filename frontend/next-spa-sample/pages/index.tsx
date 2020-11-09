import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Post[]>("http://localhost:3001/posts");
      setPosts(data);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        ></link>
      </Head>
      <h1>Top Page</h1>

      <Link href="/about">
        <a>About</a>
      </Link>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
