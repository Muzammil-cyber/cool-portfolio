import { cn } from "@/lib/utils";
import { HTMLAttribute, PreProps } from "./type";

export function CodeBlock(props: PreProps) {
  const { children, className, role, ...rest } = props;
  return (
    <pre
      {...rest}
      role={role ? role : "code"}
      className={cn([
        "rounded bg-muted py-2 pl-12 pr-8  font-mono  w-fit overflow-x-auto leading-6",
        className,
      ])}
    >
      {children}
    </pre>
  );
}
