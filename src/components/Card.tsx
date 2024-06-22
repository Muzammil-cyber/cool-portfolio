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
      className="flex w-full flex-col gap-4 rounded-md p-2 hover:bg-input sm:h-36 sm:max-w-screen-md sm:flex-row sm:items-center"
    >
      {!image ? (
        <Image
          src={"/DefualtImage.jpg"}
          alt={title}
          width={200}
          height={200}
          className="aspect-video w-full rounded object-cover sm:aspect-square sm:h-32 sm:w-32"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="aspect-video w-full rounded object-cover sm:aspect-square sm:h-32 sm:w-32"
        />
      )}
      <div className="flex h-full flex-col">
        <Heading3>{title}</Heading3>
        {desc ? (
          <Para muted className="overflow-hidden text-ellipsis">
            {desc}
          </Para>
        ) : null}
        <div className="mt-2 sm:mt-auto flex flex-wrap gap-2">
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
