import { cn } from "@/lib/utils";
import { ParaProps } from "./type";

export function Para(props: ParaProps) {
  const { children, className, bold, muted, ...rest } = props;
  return (
    <p
      {...rest}
      className={cn(
        "  font-normal leading-5 ",
        {
          "font-semibold": bold,
          "text-muted-foreground": muted,
        },
        className
      )}
    >
      {children}
    </p>
  );
}
// [&:not(:first-child)]:mt-6
