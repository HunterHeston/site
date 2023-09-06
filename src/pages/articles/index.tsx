import type { GetStaticProps } from "next";
import Head from "next/head";
import ArticleList from "~/components/articleList";
import Main from "~/components/styled-tags/main";
import { H1 } from "~/components/ui/typography";
import { type BlogArticle, getBlogArticles } from "~/lib/notion";

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
        <p className="mb-10 text-zinc-500 md:w-2/3">
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

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getBlogArticles();

  const articleList = Array.from(articles.values());
  articleList.sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return {
    props: {
      articles: articleList,
    },
  };
};
