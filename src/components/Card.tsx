import Image from "next/image";
import Link from "next/link";
import { Heading3, Para } from "./ui/Typography";

type CardProps = {
  title: string;
  desc?: string;
  image?: string;
  link: string;
  tech: string[];
};

export default function Card({ title, desc, image, link, tech }: CardProps) {
  return (
    <Link
      href={link}
      className="flex w-full max-w-3xl flex-col gap-4 rounded-md p-2 hover:bg-input sm:flex-row sm:items-center"
    >
      {!image ? (
        <Image
          src={"/DefualtImage.jpg"}
          alt={title}
          width={128}
          height={128}
          className="aspect-video w-full rounded object-cover sm:aspect-square sm:h-32 sm:w-32"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={128}
          height={128}
          className="aspect-video w-full rounded object-cover sm:aspect-square sm:h-32 sm:w-32"
        />
      )}
      <div className="grid h-full gap-1">
        <Heading3>{title}</Heading3>
        {desc ? <Para muted>{desc}</Para> : null}
        <div className="mt-2 flex flex-wrap gap-2">
          {tech.map((tag) => (
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
