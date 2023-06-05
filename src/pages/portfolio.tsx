import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import H1 from "~/components/styled-tags/h1";
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
        <H1>
          I&apos;m constantly building new things. Here are a few recent
          creations.
        </H1>
        <p>
          I&apos;m a full stack developer and I&apos;ve built tons of little
          projects over the years. Here are a few of my favorites. If something
          sparks your interest, feel free to{" "}
          <Link href="/contact">reach out to me</Link> about it!
        </p>
        <h2>Hawken Pet Sitting</h2>
        <p>
          A pet sitters website geared at landing referrals and easing the
          process of booking new clients.{" "}
        </p>
        <h2>Shrink.dev</h2>
        <p>
          A url shortening service with fun animations. Similar to bit.ly but
          more exciting.{" "}
        </p>
        <h2>Personalized Dog Bandanas</h2>
        <p>
          A e-commerce website geared at selling bandanas with pet names
          embroidered on them.{" "}
        </p>
      </Main>
    </>
  );
};

export default Home;
