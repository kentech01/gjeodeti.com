import React from "react";
import { Card, CardContent } from "../ui/card";
import type { ContactInfoItem } from "../../types/footer";

export default function ContactInfoGrid({
  items,
}: {
  items: ContactInfoItem[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((info, i) => (
        <Card
          key={i}
          className="border-slate-200 hover:shadow-lg transition-shadow"
        >
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">{info.icon}</div>
            <h3 className="font-semibold text-slate-800 mb-3">{info.title}</h3>
            <p className="text-slate-700 font-medium mb-1">{info.primary}</p>
            {info.secondary && (
              <p className="text-slate-600 text-sm mb-3">{info.secondary}</p>
            )}
            {info.description && (
              <p className="text-slate-500 text-xs">{info.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
