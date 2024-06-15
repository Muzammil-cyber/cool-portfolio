import { Heading2, Qoute } from "../ui/Typography";

export default function QouteSection() {
  const QOUTES: { qoute: string; cite: string }[] = [
    {
      qoute: "The only way to do great work is to love what you do.",
      cite: "Steve Jobs",
    },
    {
      qoute: "Always be a learner.",
      cite: "Albert Einstein",
    },
    {
      qoute: "If you can imagine it, you can code it.",
      cite: "Amit Ray",
    },
  ];

  return (
    <section>
      <Heading2>Inspiration for Innovation</Heading2>
      <div className="flex flex-col gap-4">
        {QOUTES.map((qoute, index) => (
          <Qoute key={qoute.qoute + qoute.cite} cite={qoute.cite}>
            {qoute.qoute}
          </Qoute>
        ))}
      </div>
    </section>
  );
}
// “Always be a learner.” - Albert Einstein
// “If you can imagine it, you can code it.” - Amit Ray
