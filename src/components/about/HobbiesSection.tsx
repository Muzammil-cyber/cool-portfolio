import { Car, Microscope } from "lucide-react";
import { Heading2, Heading4, Para } from "../ui/Typography";
import { Icons } from "@/lib/constant";

const HOBBIES: { title: string; icon: any; detail: string }[] = [
  {
    title: "Card Shark",
    icon: Icons.cards,
    detail:
      "Beyond the code, I enjoy the strategic challenge and social aspects of playing cards.",
  },
  {
    title: "Technophile",
    icon: Microscope,
    detail:
      "When I'm not coding, I love staying curious about the latest advancements in technology.",
  },
  {
    title: "Smasher",
    icon: Icons.tennis,
    detail:
      "On the court, I find focus and healthy competition through table tennis.",
  },
];

export default function HobbiesSection() {
  return (
    <section className="grid gap-2">
      <Heading2>My Hobbies 🎧</Heading2>
      <Para muted>
        When I&apos;m not crafting innovative software solutions, you&apos;ll
        find me exploring a world of diverse interests.
      </Para>
      <div className="flex gap-2 max-sm:flex-col">
        {HOBBIES.map((hobbie) => (
          <div
            key={hobbie.title}
            className="rounded-md border border-input p-2 shadow shadow-muted"
          >
            <hobbie.icon className="h-10 w-auto fill-primary" />
            <Heading4>{hobbie.title}</Heading4>
            <Para muted>{hobbie.detail}</Para>
          </div>
        ))}
      </div>
    </section>
  );
}
