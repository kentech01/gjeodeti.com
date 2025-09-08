"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { WorkingHours } from "../../types/footer";

export default function WorkingHoursBlock({ days }: WorkingHours) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-4">Orari i Punës</h3>
      <div className="space-y-2">
        {days.map((d) => (
          <div key={d.label} className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-blue-400" />
            <div className="text-sm">
              <div>{d.label}</div>
              <div className="text-gray-400">{d.hours}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
