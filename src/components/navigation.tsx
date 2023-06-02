import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-between px-8 pt-8">
      <Image
        alt="hunter heston's profile pic."
        src="/hunter.jpeg"
        className="h-12 w-12 rounded-full"
        width={75}
        height={75}
      ></Image>
      <div className="flex items-center justify-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/services">Service</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/portfolio">Portfolio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/articles">Articles</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/contact">Hire Me</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div>☀️</div>
      </div>
    </div>
  );
}
