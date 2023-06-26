import { GetServerSideProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlogArticle, getBlogArticles } from "~/lib/notion";

export default function Blogs({ articles }: { articles: BlogArticle[] }) {
  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article, i) => (
        <ReactMarkdown className="prose" key={i}>
          {[`# ${article.title}`, article.markdown].join("\n\n")}
        </ReactMarkdown>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getBlogArticles();

  return {
    props: {
      articles: articles,
    },
  };
};
