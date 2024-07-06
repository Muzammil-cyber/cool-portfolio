import { OrbitingCirclesDemo } from "@/components/IconOrbitDemo";
import Wave from "@/components/animate-icons/wave";
import { Heading1, Heading2, Para } from "@/components/ui/Typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicFlipWords = dynamic(
  () => import("@/components/magicui/flip-words"),
  {
    loading: () => <span>Software Engineer</span>,
  },
);

export default function Home() {
  return (
    <main className="container flex h-full w-full flex-col p-2 sm:flex-row">
      <section className="h-1/2 sm:flex sm:h-full sm:w-1/2 sm:flex-col sm:justify-center sm:p-4">
        <Heading1>
          Hi! I&apos;m Muzammil Loya.
          <Wave />
        </Heading1>
        <Heading2>
          <span className="max-lg:hidden">I&apos;m a </span>
          <DynamicFlipWords
            words={[
              "Software Engineer",
              "Web Developer",
              "Mobile Developer",
              "Backend Engineer",
              "Frontend Engineer",
            ]}
          />
        </Heading2>
        <Para>
          Skilled Software Engineer & Web Dev Leader @ GDSC. Freelancer | IoBM
          &apos;26.
        </Para>
        <div className="flex gap-4 py-4">
          <Button size={"lg"} asChild>
            <Link
              rel="nocrawal, nofollow"
              href={"/MuzammilLoya.pdf"}
              target="_blank"
              type="application/pdf"
            >
              View Resume
            </Link>
          </Button>

          <Link
            href={"/about"}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            About me
          </Link>
        </div>
      </section>
      <section className="grid h-1/2 place-items-center sm:h-full sm:w-1/2">
        <OrbitingCirclesDemo />
      </section>
    </main>
  );
}
