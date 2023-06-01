import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose">
        <h1>Software Developer, Freelancer, and Builder</h1>
        <p>
          I’m Hunter, I’m a software and website developer based in San
          Francisco. I’ve been developing software professionally for over 7
          year at Google and Lockheed Martin. Now I’m using all of the skills
          I’ve learned to improve my clients businesses on the web.{" "}
        </p>
      </main>
    </>
  );
};

export default Home;
