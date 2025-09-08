import React from "react";
import type { Leader } from "../../types/team";
import LeaderCard from "./LeaderCard";

export default function LeadershipGrid({ leaders }: { leaders: Leader[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meet the visionary leaders driving our company's success and
            innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((l) => (
            <LeaderCard key={l.email} leader={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
