import Card from "@/components/Card";
import { Para, Heading1, Heading2 } from "@/components/ui/Typography";
import { Separator } from "@/components/ui/separator";
import { PageType } from "@/lib/types";

import Image from "next/image";
import { getPosts } from "../api";
import Posts from "@/components/articles";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/constant";

export async function generateMetadata(): Promise<Metadata> {
  const { edges } = await getPosts();
  const uniqueTopics = edges
    .map(({ node }) => node.topic)
    .filter((value, index, self) => self.indexOf(value) === index);

  const description =
    "Explore diverse topics, expand your mind. 🧠 with " +
    uniqueTopics.join(", ") +
    " and more.";

  return {
    title: "The Knowledge Hub: Dive Deep into Technology",
    category: "article",
    keywords: uniqueTopics,
    description,

    openGraph: {
      title: "The Knowledge Hub: Dive Deep into Technology",
      description,
      url: BASE_URL + "/articles",
      type: "profile",
      locale: "en_US",
      // @ts-expect-error
      images: edges.map(
        (edge) =>
          edge.node.coverImage && {
            url: edge.node.coverImage.url,
            width: edge.node.coverImage?.width,
            height: edge.node.coverImage?.height,
            alt: edge.node.title,
          },
      ),
      firstName: "Muzammil",
      lastName: "Loya",
      username: "Muzammil-cyber",
      gender: "male",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@MuzammilLoya",
      title: "The Knowledge Hub: Dive Deep into Technology",
      description,
      // @ts-expect-error
      images: edges.map(({ node }) => node.coverImage && node.coverImage.url),
    },
  };
}

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

const getData = async (offset: number) => {
  const { edges, pageInfo, aggregate } = await getPosts({
    first: 5,
    after: offset,
  });
  const posts = edges.map(({ node }) => node);
  return { posts, pageInfo, aggregate };
};

export default async function ArticlesPage({ searchParams }: PageType) {
  const { page = "0" } = await searchParams;
  const offset = parseInt(page as string) * 5;
  const data = await getData(offset);

  return (
    <main className="container grid w-fit gap-4 py-4">
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
        <Posts page={parseInt(page as string)} {...data} />
      </section>
    </main>
  );
}
