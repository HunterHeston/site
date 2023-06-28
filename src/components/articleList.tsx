import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogArticle } from "~/lib/notion";

type Props = {
  articles: BlogArticle[];
};

export default function ArticleList({ articles }: Props) {
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
    <li className="mb-5 rounded-md p-5 hover:-translate-y-1 hover:bg-zinc-50 dark:hover:bg-zinc-950">
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
