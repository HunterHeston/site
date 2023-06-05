import { cn } from "~/lib/utils";

// props passes through children and class names
type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className }: MainProps) {
  return <h2 className={cn("text-xl", className)}>{children}</h2>;
}
