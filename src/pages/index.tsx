import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose flex flex-col gap-5 px-8 pt-20">
        <h1>Software Developer, Freelancer, Builder</h1>
        <p>
          I’m Hunter, I’m a software and website developer based in San
          Francisco. I’ve been developing software professionally for over 7
          year at Google and Lockheed Martin. Now I’m using all of the skills
          I’ve learned to improve my clients businesses on the web.{" "}
        </p>
        <div className="flex gap-10">
          <a href="https://github.com/hunterheston" target="_blank">
            <GithubIcon fill="currentColor"></GithubIcon>
          </a>
          <a href="https://twitter.com/hunterheston" target="_blank">
            <TwitterIcon fill="currentColor"></TwitterIcon>
          </a>
          <a href="https://www.linkedin.com/in/hunterheston" target="_blank">
            <LinkedinIcon fill="currentColor"></LinkedinIcon>
          </a>
        </div>
        <div className="flex gap-10">
          <button>Hire Me</button>
          <Link href="/services">Services</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
