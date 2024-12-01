import HistorySection from "@/components/about/HistorySection";
import HobbiesSection from "@/components/about/HobbiesSection";
import ImageSection from "@/components/about/ImageSection";
import IntroSection from "@/components/about/IntroSection";
import QouteSection from "@/components/about/QouteSection";
import { Heading1, Para } from "@/components/ui/Typography";
import { BASE_URL } from "@/lib/constant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Muzammil - About | Software Engineer, Web Developer, Blogger",
  description:
    "Hi, I'm Muzammil, a 20-year-old software Engineer skilled in HTML, CSS, JavaScript, React, Node.js, and more. Let's connect!",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Express.js",
    "Next.js",
    "Tailwind CSS",
    "Web3",
    "Motoko",
    "freelance",
    "web developer",
    "skills",
    "experience",
    "react native",
    "node.js",
    "full stack",
    "software engineer",
    "software developer",
    "mobile developer",
  ],
  openGraph: {
    title: "Muzammil - About | Software Engineer, Web Developer, Blogger",
    description:
      "Learn more about Muzammil, a software engineer, web developer, and blogger passionate about technology, programming, and sharing knowledge. Discover his background, skills, and interests.",
    url: BASE_URL,
    type: "profile",
    siteName: "Muzammil Loya's Portfolio",
    locale: "en_US",
    images: [
      {
        url: BASE_URL + "/meta_image.jpg",
        width: 800,
        height: 600,
        alt: "Muzammil Loya's Portfolio Profile",
      },
      {
        url: BASE_URL + "/image-1.jpg",
        width: 1040,
        height: 780,
        alt: "Muzammil Loya's Portfolio Image 1",
      },
      {
        url: BASE_URL + "/image-2.jpg",
        width: 4024,
        height: 6048,
        alt: "Muzammil Loya's Portfolio Image 2",
      },
      {
        url: BASE_URL + "/image-3.jpg",
        width: 1064,
        height: 1550,
        alt: "Muzammil Loya's Portfolio Image 3",
      },
    ],
    firstName: "Muzammil",
    lastName: "Loya",
    username: "Muzammil-cyber",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MuzammilLoya",
    title: "Muzammil - About | Software Engineer, Web Developer, Blogger",
    description:
      "Learn more about Muzammil, a software engineer, web developer, and blogger passionate about technology, programming, and sharing knowledge. Discover his background, skills, and interests.",
    images: [
      BASE_URL + "/meta_image.jpg",
      BASE_URL + "/image-1.jpg",
      BASE_URL + "/image-2.jpg",
      BASE_URL + "/image-3.jpg",
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="container flex max-w-screen-md flex-col gap-4 py-4">
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
