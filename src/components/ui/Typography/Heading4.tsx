import { cn } from "@/lib/utils";
import { HeadingProps } from "./type";

export function Heading4(props: HeadingProps) {
  const { children, className, ...rest } = props;
  return (
    <h4
      {...rest}
      className={cn([
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      ])}
    >
      {children}
    </h4>
  );
}
