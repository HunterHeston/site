import { Mail } from "lucide-react";
import { type NextPage } from "next";

import Head from "next/head";
import { ContactForm } from "~/components/forms/contact";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";
import { Card } from "~/components/ui/card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Want to hire me?</H1>
        <p>
          I'd love to hear from you! Send me an message at{" "}
          <a
            href="mailto:contact@hunterheston.com"
            className="font-bold hover:underline"
          >
            contact@hunterheston.com{" "}
            <Mail className="inline-block h-4 w-4 align-text-bottom" />
            <span className="sr-only">(opens email client)</span>
          </a>
        </p>
        <p>Or fill out this form and I'll get back to you!</p>
        <ContactForm></ContactForm>
      </Main>
    </>
  );
};

export default Home;
