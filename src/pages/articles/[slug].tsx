import { GetStaticProps, GetStaticPropsContext } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlogArticle, getBlogArticles, lookupBlogArticle } from "~/lib/notion";

type ArticleProps = {
  article: BlogArticle;
};

export default function Article({ article }: ArticleProps) {
  return (
    <div className="prose">
      <h1>{article.title}</h1>
      <p>{dateStringToDayMonthYear(article.created)}</p>
      <ReactMarkdown>{article.markdown}</ReactMarkdown>
    </div>
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

function dateStringToDayMonthYear(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
}
