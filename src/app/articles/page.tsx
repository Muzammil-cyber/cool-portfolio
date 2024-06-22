import Card from "@/components/Card";
import { Para, Heading1, Heading2 } from "@/components/ui/Typography";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export type CardType = {
  title: string;
  desc: string;
  image?: string;
  link: string;
  tech: string[];
};

const CARDS: CardType[] = [
  {
    title: "Some Title",
    desc: "Lot of desc here",
    image: "/images/image-1.jpg",
    link: "/projects",
    tech: ["css", "javascript"],
  },
  {
    title: "Some Title",
    desc: "Lot of description here",
    image: "/images/image-1.jpg",
    link: "/projects",
    tech: ["css", "javascript"],
  },
];
export default function ArticlesPage() {
  return (
    <main className="container grid gap-4 py-4">
      <div className="flex w-full flex-col gap-2">
        <Image
          src={"/icons/articles.svg"}
          width={40}
          height={40}
          alt="Articles Icon"
          className="hidden h-auto sm:block"
        />
        <Heading1>The Knowledge Hub</Heading1>
        <Para muted>
          Dive deep into the world of technology with insightful articles and
          thought-provoking discussions. <br />
          Explore the latest trends, gain valuable knowledge, and get inspired
          to create something amazing.
        </Para>
      </div>
      <section className="grid gap-2">
        {CARDS.map((card, idx) => {
          const isLast: boolean = idx === CARDS.length - 1;
          return (
            <div key={card.title}>
              <Card {...card} />
              {!isLast && (
                <Separator
                  key={card.title + "sepatator"}
                  className="mt-2 h-[2px]"
                />
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}
