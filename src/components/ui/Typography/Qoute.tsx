import { cn } from "@/lib/utils";
import { HeadingProps, QouteProps } from "./type";

export function Qoute(props: QouteProps) {
  const { children, className, ...rest } = props;
  return (
    <blockquote
      {...rest}
      className={cn(["mt-6 border-l-2 pl-6 italic", className])}
    >
      {children}
    </blockquote>
  );
}
