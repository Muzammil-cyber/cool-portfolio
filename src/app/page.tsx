import { OrbitingCirclesDemo } from "@/components/IconOrbitDemo";
import FlipWords from "@/components/magicui/flip-words";
import { Heading1, Heading2 } from "@/components/ui/Typography";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col p-2 sm:flex-row">
      <section className="h-1/2 sm:flex sm:h-full sm:w-1/2 sm:flex-col sm:justify-center">
        <Heading1>
          Hi! I&apos;m <span className="">Muzammil Loya</span>
        </Heading1>
        <Heading2>
          <span className="max-sm:hidden">I&apos;m a </span>
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
      </section>
      <section className="h-1/2 sm:h-full sm:w-1/2">
        <OrbitingCirclesDemo />
      </section>
    </main>
  );
}
