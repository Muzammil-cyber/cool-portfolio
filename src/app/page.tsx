import { OrbitingCirclesDemo } from "@/components/IconOrbitDemo";
import Wave from "@/components/animate-icons/wave";
import FlipWords from "@/components/magicui/flip-words";
import { Heading1, Heading2, Para } from "@/components/ui/Typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col p-2 sm:flex-row">
      <section className="h-1/2 sm:flex sm:h-full sm:w-1/2 sm:flex-col sm:justify-center">
        <Heading1>
          Hi! I&apos;m Muzammil Loya.
          <Wave />
        </Heading1>
        <Heading2>
          <span className="max-md:hidden">I&apos;m a </span>
          <FlipWords
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
          <Button size={"lg"}>Read Resume</Button>

          <Link
            href={"/about"}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            About me
          </Link>
        </div>
      </section>
      <section className="h-1/2 sm:h-full sm:w-1/2">
        <OrbitingCirclesDemo />
      </section>
    </main>
  );
}
