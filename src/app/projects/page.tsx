import Card from "@/components/Card";
import { Heading1, Heading2, Para } from "@/components/ui/Typography";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export type CardType = {
  title: string;
  description: string;
  image?: string;
  link: string;
  tags: string[];
};

const CARDS: CardType[] = [
  {
    title: "Some Title",
    description: "Lot of description here",
    image: "/images/image-1.jpg",
    link: "/projects",
    tags: ["css", "javascript"],
  },
  {
    title: "Some Title",
    description: "Lot of description here",
    image: "/images/image-1.jpg",
    link: "/projects",
    tags: ["css", "javascript"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="container grid gap-4 py-4">
      <div className="flex w-full flex-col gap-2">
        <Image
          src={"/icons/projects.svg"}
          width={60}
          height={60}
          alt="Projects Icon"
          className="hidden sm:block"
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
          <div className="h-12 w-12 rounded-lg bg-orange-500"></div>
        </div>
      </section>
      <section className="grid gap-2">
        <Heading2>What I have been working on ⚡️</Heading2>
        {CARDS.map((card, idx) => {
          const isLast: boolean = idx === CARDS.length - 1;
          return (
            <>
              <Card key={card.title} {...card} />
              {!isLast && (
                <Separator key={card.title + "sepatator"} className="h-[2px]" />
              )}
            </>
          );
        })}
      </section>
    </main>
  );
}
