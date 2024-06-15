import { cn } from "@/lib/utils";
import { QouteProps } from "./type";

export function Qoute(props: QouteProps) {
  const { children, className, cite, ...rest } = props;
  return (
    <blockquote {...rest} className={cn(["mt-6 border-l-2 pl-6", className])}>
      &ldquo;{children}&rdquo;
      <footer>~ {cite && <cite>{cite}</cite>}</footer>
    </blockquote>
  );
}
