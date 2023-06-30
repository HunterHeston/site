import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ArticleList from "~/components/articleList";
import ProjectList, { type Project } from "~/components/custom/projectList";
import Main from "~/components/styled-tags/main";
import { Button } from "~/components/ui/button";
import { H1 } from "~/components/ui/typography";
import { type BlogArticle, getBlogArticles } from "~/lib/notion";

const projects: Project[] = [
  {
    title: "Google",
    description: "Software Engineer L4",
    startYear: "Mar 2021",
    endYear: "Mar 2023",
    imgPath: "/google.png",
    fallback: "G",
  },
  {
    title: "Lockheed Martin",
    description: "Software Engineer",
    startYear: "San 2017",
    endYear: "Mar 2021",
    imgPath: "/lm.png",
    fallback: "LM",
  },
  {
    title: "Abacus Technology",
    description: "Software Engineer",
    startYear: "June 2017",
    endYear: "Jan 2018",
    imgPath: "/abacus.png",
    fallback: "AT",
  },
];

type HomeProps = {
  articles: BlogArticle[];
};

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Software Developer, Freelancer, Builder</H1>
        <p className="text-zinc-500 md:w-2/3">
          I’m Hunter, I’m a software and website developer based in San
          Francisco. I’ve been developing software professionally for 6+ years
          at Google and Lockheed Martin. Now I’m using all of the skills I’ve
          learned to improve my clients businesses on the web.{" "}
        </p>
        <div className="flex gap-10 pb-10">
          <a href="https://github.com/hunterheston" target="_blank">
            <GithubIcon
              className="h-5 w-5 text-zinc-500"
              fill="currentColor"
            ></GithubIcon>
          </a>
          <a href="https://twitter.com/hunterheston" target="_blank">
            <TwitterIcon
              className="h-5 w-5 text-zinc-500"
              fill="currentColor"
            ></TwitterIcon>
          </a>
          <a href="https://www.linkedin.com/in/hunterheston" target="_blank">
            <LinkedinIcon
              className="h-5 w-5 text-zinc-500"
              fill="currentColor"
            ></LinkedinIcon>
          </a>
        </div>
        <div className="flex gap-10 pb-20">
          <Button className="grow">Hire Me!</Button>
          <Link className="grow" href="/services">
            <Button className="w-full" variant="outline">
              Services
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="grow">
            <h2 className="mb-4 px-5 text-2xl">Recent Posts</h2>
            <ArticleList articles={articles}></ArticleList>
          </div>
          <ProjectList projects={projects}></ProjectList>
        </div>
      </Main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getBlogArticles();
  const list = Array.from(articles.values());
  return {
    props: {
      articles: list,
    },
  };
};

export default Home;
