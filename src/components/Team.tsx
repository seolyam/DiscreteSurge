import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lhiam Andrei Lingco",
    role: "Main Developer",
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mark Lois Pablico",
    role: "Co-Developer / Project Manager",
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "John Mark Bahandi",
    role: "Designer",
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
];

export function Team() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Our Team
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-4 hover:shadow-lg transition-shadow"
            >
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {member.role}
              </p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
