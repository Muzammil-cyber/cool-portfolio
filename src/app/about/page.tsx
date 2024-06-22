import HistorySection from "@/components/about/HistorySection";
import HobbiesSection from "@/components/about/HobbiesSection";
import ImageSection from "@/components/about/ImageSection";
import IntroSection from "@/components/about/IntroSection";
import QouteSection from "@/components/about/QouteSection";
import { Heading1, Para } from "@/components/ui/Typography";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container flex flex-col gap-4 py-4">
      <div className="flex w-full flex-col gap-2">
        <Image
          src={"/icons/about.svg"}
          width={40}
          height={40}
          alt="About me Icon"
          className="hidden h-auto sm:block"
        />
        <Heading1>About Me</Heading1>
        <Para muted>
          Unraveling the mystery of Muzammil Loya. <br />
          Coffee, code, and creating cool stuff.
        </Para>
      </div>
      <ImageSection />
      <IntroSection />
      <QouteSection />
      <HistorySection />
      <HobbiesSection />
    </main>
  );
}
