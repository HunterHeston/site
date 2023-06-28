import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Cpu } from "lucide-react";
import LiftedAvatar from "~/components/custom/liftedAvatar";

export type Project = {
  title: string;
  description: string;
  startYear: string;
  endYear: string;
  imgPath: string;
  fallback: string;
};

// ServiceCardProps
type ServiceCardProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ServiceCardProps) {
  return (
    <Card className="md:w-fit">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Cpu></Cpu>
          <CardTitle>Past Work</CardTitle>
        </div>
        <CardDescription>
          Here are a few things I&apos;ve done in the past.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 text-xs">
        {projects.map((project, i) => (
          <div key={i} className="flex items-center gap-2">
            <LiftedAvatar
              imgPath={project.imgPath}
              fallback={project.fallback}
            />
            <div className="flex grow flex-col gap-1">
              <h2 className="text-sm">{project.title}</h2>
              <div className="flex justify-between gap-10 text-xs text-zinc-500">
                <p>{project.description}</p>
                <p>
                  {project.startYear} - {project.endYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
