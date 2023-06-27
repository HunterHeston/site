import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { BlogArticle, getBlogArticles, lookupBlogArticle } from "~/lib/notion";

type ArticleProps = {
  article: BlogArticle;
};

export default function Article({ article }: ArticleProps) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="author" content="Hunter Heston" />
        {/* TODO: need a way to embed a description inside each notion article page */}
        {/* <meta name="description" content={article.description} /> */}
        <meta name="date" content={datestringToYearMonthDay(article.created)} />
      </Head>
      <main className="prose px-5 pt-16">
        <h1>{article.title}</h1>
        <p className="border-l-2 border-l-zinc-600 pl-2 align-middle text-zinc-600">
          {dateStringToDayMonthYear(article.created)}
        </p>
        <ReactMarkdown>{article.markdown}</ReactMarkdown>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const articles = await getBlogArticles();
  const paths = [];

  for (const [k] of articles) {
    paths.push({ params: { slug: k } });
  }

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const article = await lookupBlogArticle(params?.slug as string);
  if (!article) {
    throw new Error("Article not found");
  }

  return {
    props: {
      article,
    },
  };
};

// gets the human readable month, day and year from a date string
function dateStringToDayMonthYear(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function datestringToYearMonthDay(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
