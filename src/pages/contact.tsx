import { type NextPage } from "next";

import Head from "next/head";
import { ContactForm } from "~/components/forms/contact";
import Main from "~/components/styled-tags/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Want to hire me?</h1>
        <p>
          Fill out the form bellow or drop me an email at:
          contact@hunterheston.com
        </p>

        <ContactForm></ContactForm>
      </Main>
    </>
  );
};

export default Home;
