import React from "react";
import { Card, CardContent } from "../ui/card";
import type { FAQ } from "../../types/footer";

export default function FAQGrid({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {faqs.map((faq, i) => (
        <Card key={i} className="border-slate-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-slate-800 mb-3">
              {faq.question}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
