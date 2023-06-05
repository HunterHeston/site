import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

// ServiceCardProps
type ServiceCardProps = {
  title: string;
  description: string;
  badges?: string[];
};

export default function ServiceCard({
  title,
  description,
  badges,
}: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle></CheckCircle> {title}
        </CardTitle>
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
  );
}
