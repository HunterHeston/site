import { ArrowRight } from "lucide-react";
import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";
import { BlogArticle, getBlogArticles } from "~/lib/notion";

type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
};

const posts: Post[] = [
  {
    title: "Writing a custom hash function in JavaScript",
    slug: "writing-a-custom-hash-function-in-javascript",
    date: "2021-04-11",
    excerpt: "Working with data structures",
    content: "This is the content",
  },
  {
    title: "The Mill - A new kind of CPU architecture",
    slug: "the-mill-a-new-kind-of-cpu-architecture",
    date: "2021-04-11",
    excerpt: "Do computers run on coffee?",
    content: "This is the content",
  },
];

export default function Articles({ articles }: { articles: BlogArticle[] }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Writing about tech and other things</H1>
        <p className="mb-10 text-zinc-500">
          This is where I share my personal opinions on tech, programming,
          business, coffee, climbing and whatever else is relevant to my life. I
          enjoy exploring how technology intersects with our daily lives and how
          we can use it to improve our world.
        </p>

        {articles.map((article, i) => {
          return (
            <div
              className="mb-10 rounded-md transition-all hover:bg-zinc-50"
              key={i}
            >
              <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
              <p className="mb-1 text-sm text-zinc-500">
                {dateStringToDayMonthYear(article.created)} *{" "}
                <span className="italic">
                  {minutesToReadContent(article.markdown)} min read
                </span>
              </p>
              <Link className="underline" href={article.slug}>
                Read full article <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getBlogArticles();

  return {
    props: {
      articles: articles,
    },
  };
};

// helpers
function minutesToReadContent(content: string): number {
  const words = content.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return minutes;
}

function dateStringToDayMonthYear(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
}
