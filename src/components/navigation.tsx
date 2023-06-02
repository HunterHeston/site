import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";

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
            <DropdownMenuItem>Service</DropdownMenuItem>
            <DropdownMenuItem>Portfolio</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Articles</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Hire Me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div>☀️</div>
      </div>
    </div>
  );
}
