import { Heading1, Heading2, Para } from "@/components/ui/Typography";

import Image from "next/image";
import { getPorjects } from "../api";
import { PageType } from "@/lib/types";
import Projects from "@/components/projects";
import Skills from "@/components/projects/skills";

export type CardType = {
  title: string;
  description: string;
  image?: string;
  link: string;
  tags: string[];
};

// const CARDS: CardType[] = [
//   {
//     title: "Some Title",
//     description: "Lot of description here",
//     image: "/images/image-1.jpg",
//     link: "/projects",
//     tags: ["css", "javascript"],
//   },
//   {
//     title: "Some Title",
//     description: "Lot of description here",
//     image: "/images/image-1.jpg",
//     link: "/projects",
//     tags: ["css", "javascript"],
//   },
// ];

const getData = async (offset: number) => {
  const { edges, pageInfo, aggregate } = await getPorjects({
    first: 5,
    after: offset,
  });
  const projects = edges.map(({ node }) => node);
  return { projects, pageInfo, aggregate };
};

export default async function ProjectsPage({ searchParams }: PageType) {
  const { page = "0" } = searchParams;
  const offset = parseInt(page as string) * 5;
  const data = await getData(offset);

  return (
    <main className="container grid w-fit gap-4 py-4">
      <div className="flex w-full flex-col gap-2">
        <Image
          src={"/icons/projects.svg"}
          width={60}
          height={60}
          alt="Projects Icon"
          className="hidden h-auto sm:block"
        />
        <Heading1>Project Playground</Heading1>
        <Para muted>
          Where ideas take flight and innovation comes to life. <br />I explore
          possibilities, experiment with solutions, and build projects that make
          a difference.
        </Para>
      </div>
      <section className="grid gap-1">
        <Heading2>Technologies</Heading2>
        <Para muted>All the technologies I have worked with ⚙️</Para>
        <div className="my-2 flex flex-wrap">
          <Skills />
        </div>
      </section>
      <section className="grid gap-2">
        <Heading2>What I have been working on ⚡️</Heading2>
        <Projects page={parseInt(page as string)} {...data} />
      </section>
    </main>
  );
}
