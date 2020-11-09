import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
};

export default function Post() {
  const [post, setPost] = useState<Post>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Post>(
        `http://localhost:3001/posts/${router.query.slug}`
      );
      setPost(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
      <div>
        <h1>Post Page</h1>
        <p>{JSON.stringify(post)}</p>

        <Link href="/">Go back</Link>
      </div>
    </>
  );
}
