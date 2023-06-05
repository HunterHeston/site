import { cn } from "~/lib/utils";

// props passes through children and class names
type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main className={cn("flex flex-col gap-5 px-8 pt-20", className)}>
      {children}
    </main>
  );
}
