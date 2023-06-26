import { GetServerSideProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getBlogArticles } from "~/lib/notion";

export default function Blogs({ articles }: { articles: string[] }) {
  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article, i) => (
        <ReactMarkdown className="prose" key={i}>
          {article}
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
