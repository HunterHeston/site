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
        <h1>Want to hire me?</h1>
        <p>
          Fill out the form bellow or drop me an email at:
          contact@hunterheston.com
        </p>

        <form action="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <button type="submit">Send 🚀</button>
        </form>
      </Main>
    </>
  );
};

export default Home;
