import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface CurrentRosterCardProps {
  name: string;
  ign?: string;
  role: string;
  icon?: string;
}

export default function CurrentRosterCard({
  name,
  ign,
  role,
  icon,
}: CurrentRosterCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="p-2 h-full flex flex-col border-mcgill/20">
      <CardHeader className="flex flex-col items-center space-y-2 pb-2">
        {icon ? (
          <Image
            src={icon}
            alt={name}
            width={100}
            height={100}
            className="rounded-full object-cover"
            style={{
              minHeight: "100px",
              minWidth: "100px",
              maxHeight: "100px",
              maxWidth: "100px",
            }}
          />
        ) : (
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-mcgill/30 bg-mcgill-pastel/30 text-2xl font-bold text-mcgill-vibrant">
            {initials}
          </div>
        )}
        <CardTitle className="text-base text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {ign ? (
          <p className="text-sm text-center font-medium">IGN: {ign}</p>
        ) : null}
        <p className="text-sm text-center text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}
