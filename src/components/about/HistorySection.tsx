import { Calendar, CalendarCheck } from "lucide-react";
import { Heading2, Heading4, Para } from "../ui/Typography";
import { Separator } from "../ui/separator";

const WORK_HISTORY: {
  company: string;
  position: string;
  duration: string;
  details: string;
}[] = [
  {
    company: "Google Student Developer Club",
    position: "Executive Director of Web Development",
    duration: "02/2023 - Present",
    details:
      "Organised seminars to disseminate knowledge about web development.",
  },
  {
    company: "Freelancer",
    position: "Full - Stack Developer",
    duration: "03/2023 - 02/2024",
    details:
      "Crafting Stunning websites that captivate and engage clients with special needs.",
  },
];

export default function HistorySection() {
  return (
    <div className="grid gap-2">
      <Heading2>Work History 💼</Heading2>
      <Para muted>
        Explore my professional journey and the diverse experiences that have
        shaped my career.
      </Para>
      <div className="grid gap-2">
        {WORK_HISTORY.map((work) => (
          <div key={work.company} className="flex items-center gap-2">
            <div className="grid place-items-center gap-2 px-1 py-2">
              <div className="rounded-full bg-muted p-2">
                {work.duration.includes("Present") ? (
                  <CalendarCheck className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <Separator className="h-14" orientation="vertical" />
            </div>
            <div>
              <Heading4>{work.company}</Heading4>
              <Para bold>{work.position}</Para>
              <Para muted>{work.duration}</Para>
              <Para>{work.details}</Para>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
