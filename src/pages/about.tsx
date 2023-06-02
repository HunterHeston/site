import { type NextPage } from "next";

import Head from "next/head";
import Main from "~/components/styled-tags/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Hunter Heston." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>About</h1>
        <p>
          I’m a professional software engineer. That just means that I’ve
          written and read a lot of code over the years. I have a pretty good
          idea of how computers work and am generally enthusiastic about
          learning new things and build things with code. I have a deep interest
          in the web and love building websites and applications which have a
          tangible impact on real people. Seeing someone use something you’ve
          built is a wonderful feeling.
        </p>
        <h2>A brief history of me:</h2>
        <ul>
          <li>April 1994: Beginning of existence.</li>
          <li>
            April 1994 - May 2012: Standard human progression from child to high
            school graduate.
          </li>
          <li>August 2012: College begins.</li>
          <li>
            January 2015: Start working as a math tutor in the college library.
          </li>
          <li>
            January 2017: First internship at Kennedy Space Center writing HTML
            and CSS websites.
          </li>
          <li>
            August 2017: Graduate college with degree in Computer Science. Hired
            full-time at Kennedy Space Center at the end of my internship.
          </li>
          <li>
            January 2018: Hired by Lockheed Martin as an Embedded Software
            Engineer.
          </li>
          <li>September 2020: First promotion.</li>
          <li>March 2021: Hired as a Software Engineer L4 at Google.</li>
          <li>August 2021: Moved to San Francisco.</li>
          <li>March 2023: Left full-time employment.</li>
          <li>Present day: Working on my own small software business.</li>
        </ul>
      </Main>
    </>
  );
};

export default Home;
