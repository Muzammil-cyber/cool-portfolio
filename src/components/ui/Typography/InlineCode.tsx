import { cn } from "@/lib/utils";
import { HTMLAttribute } from "./type";

export function InlineCode(props: HTMLAttribute) {
  const { children, className, ...rest } = props;
  return (
    <code
      {...rest}
      className={cn([
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      ])}
    >
      {children}
    </code>
  );
}
