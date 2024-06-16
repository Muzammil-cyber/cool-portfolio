import Image from "next/image";
import Link from "next/link";
import { Heading3, Para } from "./ui/Typography";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  link: string;
  tags: string[];
};

export default function Card({
  title,
  description,
  image,
  link,
  tags,
}: CardProps) {
  return (
    <Link
      href={link}
      className="flex w-full max-w-3xl flex-col gap-4 rounded-md p-2 hover:bg-input sm:flex-row sm:items-center"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={128}
          height={128}
          className="aspect-video w-full rounded object-cover sm:aspect-square sm:h-32 sm:w-32"
        />
      )}
      <div className="flex h-full flex-col gap-1">
        <Heading3>{title}</Heading3>
        <Para muted>{description}</Para>
        <div className="mt-auto flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              //   Color according to tech color
              className="rounded-full bg-logo px-4 py-1 text-xs uppercase text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
