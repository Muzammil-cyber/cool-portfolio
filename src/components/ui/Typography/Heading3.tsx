import { cn } from "@/lib/utils";
import { HeadingProps } from "./type";

export function Heading3(props: HeadingProps) {
  const { children, className, ...rest } = props;
  return (
    <h3
      {...rest}
      className={cn([
        "scroll-m-20 text-3xl font-semibold tracking-tight",
        className,
      ])}
    >
      {children}
    </h3>
  );
}
