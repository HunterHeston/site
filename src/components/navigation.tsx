import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navigation({ children }: Props) {
  return (
    <div className="flex justify-between px-8 pt-8">
      <Link href="/">
        <Image
          alt="hunter heston's profile pic."
          src="/hunter.jpeg"
          className="h-12 w-12 rounded-full"
          width={75}
          height={75}
        ></Image>
      </Link>
      <div className="flex items-center justify-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
            <p>Menu</p>
            <ChevronDown className="h-4 w-4"></ChevronDown>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <Link href="/services">
              <DropdownMenuItem>Service</DropdownMenuItem>
            </Link> */}
            <Link href="/portfolio">
              <DropdownMenuItem>Portfolio</DropdownMenuItem>
            </Link>
            <Link href="/about">
              <DropdownMenuItem>About</DropdownMenuItem>
            </Link>
            <Link href="/articles">
              <DropdownMenuItem>Articles</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/contact">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        {children}
      </div>
    </div>
  );
}
