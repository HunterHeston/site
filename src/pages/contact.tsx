import { type NextPage } from "next";
import Head from "next/head";
import { Mail } from "lucide-react";
import { ContactForm } from "~/components/forms/contact";
import Main from "~/components/styled-tags/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { H1 } from "~/components/ui/typography";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1 className="mb-10">Want to hire me?</H1>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="grow">
            <p className="mb-2 text-xl text-zinc-400">
              Fill out this form and I&apos;ll get back to you soon!
            </p>
            <ContactForm></ContactForm>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Separator className="shrink" />
            <p className="text-primary">OR</p>
            <Separator className="shrink" />
          </div>
          <ContactCard></ContactCard>
        </div>
      </Main>
    </>
  );
};

export function ContactCard() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Contact Info</CardTitle>
        <CardDescription>
          Send I&apos;ll get back to you as soon as I can!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <a
              href="mailto:contact@hunterheston.com"
              className="font-bold hover:underline"
            >
              <Mail className="mr-3 inline-block h-4 w-4 align-text-bottom" />
              contact@hunterheston.com{" "}
              <span className="sr-only">(opens email client)</span>
            </a>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

export default Home;
