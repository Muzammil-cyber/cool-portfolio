import { cn } from "@/lib/utils";
import { HeadingProps } from "./type";

export function Heading2(props: HeadingProps) {
  const { children, className, ...rest } = props;
  return (
    <h2
      {...rest}
      className={cn([
        "scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0",
        className,
      ])}
    >
      {children}
    </h2>
  );
}
