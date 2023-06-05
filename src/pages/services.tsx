import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ServiceCard from "~/components/custom/serviceCard";
import H1 from "~/components/styled-tags/h1";
import Main from "~/components/styled-tags/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Freelance services Hunter Heston provides."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Services I offer</H1>
        <p>
          Check out my services! Whether you&apos;re looking to improve your
          website&apos;s design, add performance monitoring, or get help with
          content writing, I have a solution for you.{" "}
          <Link href="/contact">Contact me today</Link> to learn more about how
          I can help take your online presence to the next level.
        </p>
        <ServiceCard
          title="Free website analysis package"
          description="I will analyze your website and suggest real actionable improvements and find any issues."
          badges={["Free"]}
        ></ServiceCard>
        <ServiceCard
          title="Website design and development"
          description="I will design and develop a new website or update your existing website."
          badges={["design", "development"]}
        ></ServiceCard>
        <ServiceCard
          title="Website maintenance"
          description="I will maintain your website for you."
          badges={["maintenance", "hosting"]}
        ></ServiceCard>

        <ServiceCard
          title="Visitor analytics"
          description="I will setup analytics for your website so you can know what your users are doing and measure desired outcomes. "
          badges={["monitoring", "analytics"]}
        ></ServiceCard>
        <ServiceCard
          title="Search engine optimization"
          description="I will optimize your website for search engines. Generating more natural traffic and leads for your business."
          badges={["improvement", "optimization"]}
        ></ServiceCard>
        <ServiceCard
          title="Ad performance and conversion monitoring"
          description="I will setup Google Ad Words configure conversion tracking and monitor performance."
          badges={["advertising", "monitoring", "analytics"]}
        ></ServiceCard>
        <ServiceCard
          title="Content management setup"
          description="If you need to publish content regularly I will setup a content management system for you."
          badges={["content"]}
        ></ServiceCard>
      </Main>
    </>
  );
};

export default Home;
