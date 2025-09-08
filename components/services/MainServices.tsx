import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { MainService } from "../../types/services";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function MainServices({
  items,
  onQuote,
}: {
  items: MainService[];
  onQuote: () => void;
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gradient mb-6">Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our main service offerings designed to support your project from
            conception to completion
          </p>
        </div>

        <div className="space-y-24">
          {items.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-primary/5 rounded-2xl">
                      <s.icon className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="space-y-4">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center text-foreground">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                        <span className="text-lg">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={onQuote}
                    className="btn-modern bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 mt-6"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div
                className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <div className="relative">
                  <div className="bg-primary/5 rounded-2xl p-8">
                    <ImageWithFallback
                      src={s.image}
                      alt={s.title}
                      className="rounded-xl shadow-2xl card-hover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
