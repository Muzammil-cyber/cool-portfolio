import { cn } from "@/lib/utils";
import { HTMLAttribute, PreProps } from "./type";

export function CodeBlock(props: PreProps) {
  const { children, className, role, ...rest } = props;
  return (
    <pre
      {...rest}
      role={role ? role : "code"}
      className={cn([
        "w-full max-w-screen-sm overflow-x-auto rounded bg-muted px-8 py-2 font-mono leading-6",
        className,
      ])}
    >
      {children}
    </pre>
  );
}
