"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

type Props = {
  name: string;
  tagline: string;
  description: string;
};

export default function CompanyInfo({ name, tagline, description }: Props) {
  return (
    <div className="col-span-1 md:col-span-2">
      <motion.div
        className="flex items-center space-x-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-400">{tagline}</div>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-300 mb-4 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  );
}
