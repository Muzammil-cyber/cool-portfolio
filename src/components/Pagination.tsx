import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AggregateType, PageInfoType } from "@/lib/types";

interface PaginationProps {
  pageInfo: PageInfoType;
  aggregate: AggregateType;
  link: string;
  page: number;
}

export default function PaginationComponent({
  pageInfo,
  aggregate,
  link,
  page,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {pageInfo.hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious href={`/${link}?page=${page - 1}`} />
          </PaginationItem>
        )}
        <PaginationItems link={link} page={page} aggregate={aggregate} />
        {pageInfo.hasNextPage && (
          <PaginationItem>
            <PaginationNext href={`/${link}?page=${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export const PaginationItems = ({
  link,
  page,
  aggregate,
}: Omit<PaginationProps, "pageInfo">) => {
  const pages = Math.ceil(aggregate.count / 5);
  return (
    <>
      {Array.from({ length: pages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <PaginationItem key={`${pageNumber} ${link} pagination`}>
            <PaginationLink
              href={`/${link}?page=${pageNumber - 1}`}
              isActive={pageNumber - 1 === page}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        );
      })}
    </>
  );
};
