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
        <h1>Some of my past work</h1>
        <p>
          Over the years, I have had the pleasure of building a variety of
          projects for my clients. These range from custom e-commerce platforms
          and content management systems to complex data analysis tools and APIs
          that integrate with third-party services. Each project has been unique
          and challenging, and I am proud of the solutions that I have
          delivered.
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
