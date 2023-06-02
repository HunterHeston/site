import { type NextPage } from "next";
import Head from "next/head";
import Main from "~/components/styled-tags/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Writing about tech and other things.</h1>
        <p>
          This is where I share my personal opinions on tech, programming,
          business, coffee, climbing and whatever else is relevant to my life. I
          enjoy exploring how technology intersects with our daily lives and how
          we can use it to improve our world.
        </p>
        <h2>Recent Posts</h2>
        <ul>
          <li>Writing a custom hash function in JavaScript</li>
        </ul>
      </Main>
    </>
  );
};

export default Home;
