import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
      <div>
        <h1>About Page</h1>
        <Link href="/">Go back</Link>
      </div>
    </>
  );
}
