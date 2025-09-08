import React from "react";
import { Button } from "../ui/button";
import type { JobOpening } from "../../types/team";

export default function CareersBlock({ openings }: { openings: JobOpening[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented professionals. If you're
            passionate about geodesy and surveying, we'd love to hear from you.
          </p>

          <div className="bg-slate-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Open Positions
            </h3>

            <div className="space-y-3 text-left">
              {openings.map((o) => (
                <div
                  key={o.title}
                  className="flex justify-between items-center py-2 border-b border-slate-200"
                >
                  <span className="text-slate-700">{o.title}</span>
                  <span className="text-sm text-slate-500">{o.type}</span>
                </div>
              ))}
            </div>

            <Button className="mt-6 bg-slate-600 hover:bg-slate-700">
              View All Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
