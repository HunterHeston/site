import { type NextPage } from "next";

import Head from "next/head";
import Timeline, { type TimelineItem } from "~/components/custom/timeline";
import H1 from "~/components/styled-tags/h1";
import H2 from "~/components/styled-tags/h2";
import Main from "~/components/styled-tags/main";
import { Badge } from "~/components/ui/badge";

const timelineItems: TimelineItem[] = [
  {
    eventType: "Life",
    date: "April 1994",
    description: "Beginning of existence.",
  },

  {
    eventType: "Life",
    date: "April 1994 - May 2012:",
    description:
      "Standard human progression from child to high school graduate.",
  },
  {
    eventType: "School",
    date: "August 2012",
    description: " College begins.",
  },
  {
    eventType: "Work",
    date: "January 2015",
    description: "Start working as a math tutor in the college library.",
  },
  {
    eventType: "Work",
    date: "January 2017",
    description:
      "First internship at Kennedy Space Center writing HTML and CSS websites.",
  },
  {
    eventType: "School",
    date: "August 2017",
    description:
      "Graduate college with degree in Computer Science. Hired full-time at Kennedy Space Center at the end of my internship.",
  },
  {
    eventType: "Work",
    date: "January 2018",
    description: "Hired by Lockheed Martin as an Embedded Software Engineer.",
  },
  {
    eventType: "Work",
    date: "September 2020",
    description: "First promotion.",
  },
  {
    eventType: "Work",
    date: "March 2021",
    description: "Hired as a Software Engineer L4 at Google.",
  },
  {
    eventType: "Life",
    date: "August 2021",
    description: "Moved to San Francisco.",
  },
  {
    eventType: "Life and Work",
    date: "March 2023",
    description: "Left full-time employment.",
  },
  {
    eventType: "Work",
    date: "Present day",
    description: "Working on my own small software business.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Hunter Heston." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main className="text-base leading-7">
        <H1>
          I&apos;m Hunter Heston. I live in San Francisco where I build
          software.
        </H1>
        <div id="badge-container" className="flex flex-wrap gap-2">
          <Badge>Software Engineer</Badge>
          <Badge>Web Developer</Badge>
          <Badge>Entrepreneur</Badge>
          <Badge>Designer</Badge>
          <Badge>Builder</Badge>
        </div>
        <p>
          With 6+ years of experience as a professional software engineer,
          I&apos;ve immersed myself in the world of coding, constantly expanding
          my knowledge and skills. My deep interest in the web has fueled my
          enthusiasm for creating web applications that make a tangible impact
          on real people
        </p>
        <p>
          Driven by a relentless curiosity, I thrive on learning and embracing
          new technologies. My expertise lies in understanding how computers
          work and leveraging that knowledge to build innovative solutions. I am
          dedicated to crafting web experiences that empower businesses to
          thrive in the digital realm.
        </p>
        <p>
          From revamping website designs to optimizing performance and
          developing robust e-commerce platforms, I bring creativity and
          technical proficiency to every project. By collaborating closely with
          clients and tailoring solutions to their unique needs, I ensure
          exceptional quality and exceed expectations.
        </p>
        <p>
          Join me in leveraging the full potential of the web to transform your
          online presence. Let&apos;s create something remarkable together.
        </p>
      </Main>
    </>
  );
};

export default Home;
