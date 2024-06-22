import { AggregateType, PageInfoType, ProjectType } from "@/lib/types";
import Card from "../Card";

import PaginationComponent from "../Pagination";
import { Separator } from "../ui/separator";

interface ProjectsProps {
  projects: ProjectType[];
  pageInfo: PageInfoType;
  aggregate: AggregateType;
  page: number;
}

export default function Projects({
  projects,
  pageInfo,
  aggregate,
  page,
}: ProjectsProps) {
  return (
    <>
      {projects.map((card, idx) => {
        const isLast: boolean = idx === projects.length - 1;
        return (
          <div key={card.title}>
            <Card link={`/projects/${card.id}`} {...card} />
            {!isLast && (
              <Separator
                key={card.title + "sepatator"}
                className="mt-2 h-[2px]"
              />
            )}
          </div>
        );
      })}
      <div className="mt-4 flex justify-center">
        <PaginationComponent
          pageInfo={pageInfo}
          aggregate={aggregate}
          link="projects"
          page={page}
        />
      </div>
    </>
  );
}
