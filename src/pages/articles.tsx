import { ArrowRight } from "lucide-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";

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

const Home: NextPage = () => {
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

        {posts.map((post, i) => {
          return (
            <div
              className="mb-10 rounded-md transition-all hover:bg-zinc-50"
              key={i}
            >
              <h3 className="mb-3 text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-zinc-500">
                {post.date} *{" "}
                <span className="italic">
                  {minutesToReadContent(post.content)} min read
                </span>
              </p>
              <p className="mb-2 text-lg">{post.excerpt}</p>
              <Link className="underline" href={post.slug}>
                Read full article <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </Main>
    </>
  );
};

function minutesToReadContent(content: string): number {
  const words = content.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return minutes;
}

export default Home;
