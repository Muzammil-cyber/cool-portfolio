import { AggregateType, PageInfoType, PostType } from "@/lib/types";
import Card from "../Card";

import PaginationComponent from "../Pagination";
import { Separator } from "../ui/separator";

interface PostsProps {
  posts: PostType[];
  pageInfo: PageInfoType;
  aggregate: AggregateType;
  page: number;
}

export default function Posts({
  posts,
  pageInfo,
  aggregate,
  page,
}: PostsProps) {
  return (
    <>
      {posts.map((card, idx) => {
        const isLast: boolean = idx === posts.length - 1;
        const dateCreated = () => {
          // How long since created?
          const msPerMinute = 60 * 1000;
          const msPerHour = msPerMinute * 60;
          const msPerDay = msPerHour * 24;
          const msPerMonth = msPerDay * 30;
          const msPerYear = msPerDay * 365;
          const current = new Date();
          const created = new Date(card.createdAt);
          const elapsed = current.getTime() - created.getTime();
          if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + " seconds ago";
          } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + " minutes ago";
          } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + " hours ago";
          } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + " days ago";
          } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + " months ago";
          } else {
            return Math.round(elapsed / msPerYear) + " years ago";
          }
        };
        return (
          <div key={card.id}>
            <Card
              link={`/articles/${card.id}`}
              title={card.title}
              desc={dateCreated()}
              tech={[card.topic]}
              image={card.coverImage?.url}
            />
            {!isLast && <Separator className="mt-2 h-[2px] max-w-3xl" />}
          </div>
        );
      })}
      <div className="mt-4 flex justify-center">
        <PaginationComponent
          pageInfo={pageInfo}
          aggregate={aggregate}
          link="articles"
          page={page}
        />
      </div>
    </>
  );
}
