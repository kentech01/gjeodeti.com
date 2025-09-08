import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import type { TeamMember } from "../../types/team";

export default function MemberCard({ member }: { member: TeamMember }) {
  const mailto = `mailto:${member.email}`;

  return (
    <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">{member.name}</h3>
          <p className="text-slate-600 text-sm font-medium">
            {member.position}
          </p>
        </div>

        <div className="space-y-2 text-xs text-slate-600 mb-4">
          <div>
            <span className="font-medium text-slate-700">Education: </span>
            {member.education}
          </div>
          <div>
            <span className="font-medium text-slate-700">Experience: </span>
            {member.experience}
          </div>
          <div>
            <span className="font-medium text-slate-700">Specialization: </span>
            {member.specialization}
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={mailto}
            aria-label={`Email ${member.name}`}
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Mail className="h-3 w-3 mr-1" />
              Contact
            </Button>
          </a>
          <Button variant="outline" size="sm" className="px-3">
            <Linkedin className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
