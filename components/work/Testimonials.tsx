"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { testimonials } from "../../constants/work";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Çka Thonë Klientët
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dëgjimi i klientëve tanë dhe kënaqësia e tyre është prioriteti ynë
            kryesor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-2xl text-green-600 mb-2"></div>
                    <p className="text-gray-700 italic">{t.quote}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-medium text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {t.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
