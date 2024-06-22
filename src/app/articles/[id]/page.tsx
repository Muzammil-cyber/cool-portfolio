import { getPostById } from "@/app/api";
import { Heading1, Para } from "@/components/ui/Typography";

import RawToHtml from "@/lib/rawToHtml";
import { PageType } from "@/lib/types";
import Image from "next/image";

const getData = async (id: string) => {
  const post = await getPostById(id);
  return post;
};

export default async function ProjectPage({ params }: PageType) {
  const { id } = params;
  const post = await getData(id.toLowerCase());
  const date = new Date(post.createdAt);
  return (
    <main className="container grid max-w-screen-sm gap-4 py-4">
      <Heading1>{post.title}</Heading1>
      <Para muted>
        <span className="font-bold uppercase text-logo">{post.topic}</span> •{" "}
        {date.toLocaleDateString("en-UK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Para>
      {post.coverImage && (
        <Image
          src={post.coverImage?.url}
          height={post.coverImage?.height}
          width={post.coverImage?.width}
          alt={post.title}
          className="rounded"
        />
      )}
      <div className="grid gap-2">
        <RawToHtml raw={post.desc.raw} />
      </div>
    </main>
  );
}
