import { ArrowRight } from "lucide-react";
import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";
import { BlogArticle, getBlogArticles } from "~/lib/notion";

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
        <ArticleList articles={articles} />
      </Main>
    </>
  );
}

function ArticleList({ articles }: { articles: BlogArticle[] }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
      ))}
    </ul>
  );
}

function ArticleListItem({ article }: { article: BlogArticle }) {
  return (
    <li className="mb-10 rounded-md transition-all hover:bg-zinc-50">
      <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
      <p className="mb-1 text-sm text-zinc-500">
        {dateStringToDayMonthYear(article.created)} *{" "}
        <span className="italic">
          {minutesToReadContent(article.markdown)} min read
        </span>
      </p>
      <Link className="underline" href={"/articles/" + article.slug}>
        Read full article <ArrowRight className="inline h-4 w-4" />
      </Link>
    </li>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getBlogArticles();
  return {
    props: {
      articles: Array.from(articles.values()),
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
