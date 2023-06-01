import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose">
        <h1>Software, Hardware and other tech I use</h1>

        <h2>Hardware</h2>
        <ul>
          <li>MacBook Pro 14” M1 32GB</li>
          <li>IPhone 14 Pro Max</li>
          <li>Apple Watch 6 Cellular</li>
          <li>
            <a href="https://www.caldigit.com/ts3-plus/">CalDigit TS3 Plus</a>
          </li>
          <li>
            <a href="https://www.dell.com/il/en/p/dell-s2721dgf-monitor/pd">
              Dell 27” S2721DGF
            </a>
          </li>
          <li>Apple Magic Keyboard</li>
          <li>Logitech MX Master 2</li>
          <li>Herman Miller Celle</li>
        </ul>

        <h2>Coding Tech</h2>
        <ul>
          <li>
            <a href="https://code.visualstudio.com/">VSCode</a> with the{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2">
              Cobalt2 theme
            </a>
          </li>
          <li>
            <a href="https://nextjs.org">NextJS</a> for building websites
          </li>
          <li>
            <a href="https://vercel.com/">Vercel</a> for hosting website
          </li>
          <li>
            <a href="https://plausible.io/">Plausible</a> for website analytics
          </li>
          <li>
            <a href="https://sizzy.co/">Sizzy</a>
            for developing website on multiple screen types
          </li>
        </ul>

        <h2>Other Software</h2>
        <ul>
          <li>Notion for all personal notes and records.</li>
          <li>Todoist for all task management.</li>
          <li>Copilot for budgeting and general money management.</li>
          <li>Cron calendar</li>
          <li>Hey email client</li>
        </ul>
      </main>
    </>
  );
};

export default Home;
