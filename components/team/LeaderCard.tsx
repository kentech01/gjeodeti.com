import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import type { Leader } from "../../types/team";

export default function LeaderCard({ leader }: { leader: Leader }) {
  const mailto = `mailto:${leader.email}`;
  const tel = leader.phone
    ? `tel:${leader.phone.replace(/\s+/g, "")}`
    : undefined;

  return (
    <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <ImageWithFallback
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">
            {leader.name}
          </h3>
          <p className="text-slate-600 font-medium">{leader.position}</p>
        </div>

        <div className="space-y-3 text-sm text-slate-600 mb-6">
          <div>
            <span className="font-medium text-slate-700">Education: </span>
            {leader.education}
          </div>
          <div>
            <span className="font-medium text-slate-700">Experience: </span>
            {leader.experience}
          </div>
          <div>
            <span className="font-medium text-slate-700">Specialization: </span>
            {leader.specialization}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={mailto}
            aria-label={`Email ${leader.name}`}
            className="w-full"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" /> Email
            </Button>
          </a>

          {tel && (
            <a href={tel} aria-label={`Call ${leader.name}`} className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" /> Call
              </Button>
            </a>
          )}

          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center"
          >
            <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
