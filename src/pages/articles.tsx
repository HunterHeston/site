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
          My blog is a place where I share my thoughts and experiences about a
          variety of topics, including technology, people, coffee, climbing, and
          anything else that piques my interest. I enjoy exploring how
          technology intersects with our daily lives and how we can use it to
          improve our world. I also love to write about my personal experiences
          and share tips and insights that I&apos;ve gained along the way. So
          whether you&apos;re looking for a new perspective on the tech industry
          or just want to hear about my latest adventures, my blog has something
          for everyone.
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
