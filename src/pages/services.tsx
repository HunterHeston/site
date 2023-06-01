import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Freelance services Hunter Heston provides."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose">
        <h1>Services I offer</h1>
        <p>
          Check out my services! Whether you&apos;re looking to improve your
          website&apos;s design, add performance monitoring, or get help with
          content writing, I have a solution for you. Contact me today to learn
          more about how I can help take your online presence to the next level.
        </p>
        <ul>
          <li>Free website improvement analysis package.</li>
          <li>Website design and development.</li>
          <li>Visitor analytics.</li>
          <li>Add performance and conversion monitoring.</li>
          <li>Content management setup service</li>
          <li>Content writing service. </li>
          <li>Google add words placement</li>
        </ul>
      </main>
    </>
  );
};

export default Home;
