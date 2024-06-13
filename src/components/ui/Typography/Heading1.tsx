import { cn } from "@/lib/utils";
import { HeadingProps } from "./type";

export function Heading1(props: HeadingProps) {
  const { children, className, ...rest } = props;
  return (
    <h1
      {...rest}
      className={cn([
        "scroll-m-20 text-5xl font-extrabold  lg:text-6xl",
        className,
      ])}
    >
      {children}
    </h1>
  );
}
