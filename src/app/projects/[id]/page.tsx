import { getProjectById } from "@/app/api";
import { SkillSet, findSkillByTitle } from "@/components/projects/skillData";
import { Heading1, Para } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RawToHtml from "@/lib/rawToHtml";
import { PageType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Code, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbLiveView } from "react-icons/tb";

const getData = async (id: string) => {
  const post = await getProjectById(id);
  return post;
};

export default async function ProjectPage({ params }: PageType) {
  const { id } = params;
  const project = await getData(id.toLowerCase());
  const date = new Date(project.createdAt);
  return (
    <main className="container grid max-w-screen-md gap-4 py-4">
      <Heading1>{project.title}</Heading1>
      <Para muted>
        {project.tech.map((str, idx) => {
          // ${findSkillByTitle(str)?.color}-${findSkillByTitle(str)?.opacity}
          const theme = findSkillByTitle(str) ?? "text-muted-foreground";

          return (
            <span key={idx + str} className={cn("font-bold uppercase", theme)}>
              {str}{" "}
            </span>
          );
        })}
        •{" "}
        {date.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric",
          formatMatcher: "basic",
        })}
      </Para>
      {project.image && (
        <Image
          src={project.image?.url}
          height={project.image?.height}
          width={project.image?.width}
          alt={project.title}
          className="rounded"
        />
      )}
      <div className="grid gap-2">
        <RawToHtml raw={project.description.raw} />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        {project.webUrl && (
          <Button asChild>
            <Link href={project.webUrl}>
              <Radio className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        <Button variant={"secondary"} asChild>
          <Link href={project.gitUrl}>
            <Code className="mr-2 h-4 w-4" />
            Source Code
          </Link>
        </Button>
      </div>
    </main>
  );
}
