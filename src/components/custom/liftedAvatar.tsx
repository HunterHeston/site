import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

// LiftedAvatar props
type LiftedAvatarProps = {
  imgPath: string;
  fallback: string;
};

export default function LiftedAvatar({ imgPath, fallback }: LiftedAvatarProps) {
  return (
    <Avatar className="h-8 w-8 p-2 shadow-sm shadow-neutral-400">
      <AvatarImage src={imgPath} alt="logo"></AvatarImage>
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
