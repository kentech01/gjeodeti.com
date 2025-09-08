import React from "react";
import { Card, CardContent } from "../ui/card";
import type { QuickStat } from "../../types/footer";

export default function StatsList({ stats }: { stats: QuickStat[] }) {
  return (
    <div className="space-y-4">
      {stats.map((s, i) => (
        <Card key={i} className="border-slate-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              {s.icon}
              <div>
                <h4 className="font-semibold text-slate-800">{s.title}</h4>
                <p className="text-slate-600 text-sm">{s.subtitle}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
