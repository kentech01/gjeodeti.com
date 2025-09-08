import React from "react";
import type { Stat } from "../../types/work";

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {s.number}
          </div>
          <div className="text-slate-600">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
