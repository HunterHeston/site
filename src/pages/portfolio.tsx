import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ProjectCard from "~/components/custom/projectCard";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>
          I&apos;m constantly building new things. Here are a few recent
          creations.
        </H1>
        <p className="mb-10 text-zinc-500">
          I&apos;m a full stack developer and I&apos;ve built tons of little
          projects over the years. Here are a few of my favorites. If something
          sparks your interest, feel free to{" "}
          <Link href="/contact">reach out to me</Link> about it!
        </p>
        <ProjectCard
          title="Hawken Pet Sitting"
          description="A pet sitters website geared at landing referrals and easing the
          process of booking new clients."
          imgPath="work/hawken-pet-care.png"
          fallback="HPS"
          badges={["React", "Next.js", "TailwindCSS", "TypeScript"]}
        />
        <ProjectCard
          title="Shrink.dev"
          description="A url shortening service with fun animations. Similar to bit.ly but
          more exciting."
          imgPath="work/shrink.png"
          fallback="SD"
          badges={["React", "Next.js", "TailwindCSS", "TypeScript"]}
        />
        <ProjectCard
          title="Personalized Dog Bandanas"
          description="An e-commerce website for selling bandanas with pet names
          embroidered on them."
          imgPath="work/pdb.png"
          fallback="PDB"
          badges={["SquareSpace", "E-Commerce", "JavaScript"]}
        />
      </Main>
    </>
  );
};

export default Home;
