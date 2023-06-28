import type { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  H1,
  H2,
  H3,
  H4,
  Blockquote,
  InlineCode,
  Large,
  Lead,
  Ul,
  Li,
  Ol,
  Muted,
  P,
  Small,
  THead,
  TBody,
  Table,
  Th,
  Td,
  Tr,
} from "@/components/ui/typography";
import {
  type BlogArticle,
  getBlogArticles,
  lookupBlogArticle,
} from "~/lib/notion";

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
      <main className="flex justify-center">
        <div className="prose px-5 pt-16 text-primary">
          <h1 className="text-inherit">{article.title}</h1>
          <p className="border-l-2 border-l-zinc-600 pl-2 align-middle text-zinc-600 dark:text-primary">
            {dateStringToDayMonthYear(article.created)}
          </p>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <H1 {...props} />,
              h2: ({ node, ...props }) => <H2 {...props} />,
              h3: ({ node, ...props }) => <H3 {...props} />,
              h4: ({ node, ...props }) => <H4 {...props} />,
              h5: ({ node, ...props }) => <h5 className="mb-2" {...props} />,
              h6: ({ node, ...props }) => <h6 className="mb-2" {...props} />,
              p: ({ node, ...props }) => (
                <P className="my-5 leading-loose" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-primary transition-all hover:text-zinc-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => <Blockquote {...props} />,
              br: ({ node, ...props }) => <br {...props} />,
              em: ({ node, ...props }) => <em {...props} />,
              hr: ({ node, ...props }) => <hr className="my-4" {...props} />,
              img: ({ node, ...props }) => (
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img {...props} />
              ),
              pre: ({ node, ...props }) => <pre className="" {...props} />,
              strong: ({ node, ...props }) => <strong {...props} />,
              ol: ({ node, ...props }) => <Ol {...props} />,
              ul: ({ node, ...props }) => <Ul {...props} />,
              li: ({ node, ...props }) => <Li {...props} />,
              code: ({ node, inline, className, children, ...props }) =>
                inline ? (
                  <InlineCode {...props}>{children}</InlineCode>
                ) : (
                  <code className={className} {...props}>
                    {String(children)}
                  </code>
                ),
              table: ({ node, ...props }) => <Table {...props} />,
              thead: ({ node, ...props }) => <THead {...props} />,
              tbody: ({ node, ...props }) => <tbody {...props} />,
              tr: ({ node, ...props }) => (
                <tr
                  className="even:dark:text-darkAccent even:text-accent"
                  {...props}
                />
              ),
              th: ({ node, ...props }) => <Th {...props} />,
              td: ({ node, ...props }) => <Td {...props} />,
            }}
          >
            {article.markdown}
          </ReactMarkdown>
        </div>
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
