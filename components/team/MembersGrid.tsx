import React from "react";
import type { TeamMember } from "../../types/team";
import MemberCard from "./MemberCard";

export default function MembersGrid({ members }: { members: TeamMember[] }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Our Professional Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Skilled professionals dedicated to delivering exceptional geodesy
            and surveying services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m) => (
            <MemberCard key={m.email} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
