import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

// ServiceCardProps
type ServiceCardProps = {
  title: string;
  description: string;
  imgPath: string;
  fallback: string;
  badges?: string[];
  URL: string;
};

export default function ProjectCard({
  title,
  description,
  imgPath,
  fallback,
  badges,
  URL,
}: ServiceCardProps) {
  return (
    <Link href={URL} target="_blank" rel="noopener noreferrer">
      <Card className="transition-all hover:-translate-y-1 hover:bg-zinc-50 dark:hover:bg-zinc-800">
        <CardHeader>
          <div className="flex gap-2">
            <Avatar className="h-8 w-8 shadow-md shadow-neutral-400 dark:shadow-zinc-800">
              <AvatarImage src={imgPath} alt="logo"></AvatarImage>
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <CardTitle className="flex items-center gap-2">{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {badges && (
          <CardContent className="flex gap-2">
            {badges?.map((badge, i) => (
              <Badge key={i}>{badge}</Badge>
            ))}
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
