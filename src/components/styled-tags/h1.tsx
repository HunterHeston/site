import { cn } from "~/lib/utils";

// props passes through children and class names
type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: MainProps) {
  return <h1 className={cn("text-3xl md:w-2/3", className)}>{children}</h1>;
}
