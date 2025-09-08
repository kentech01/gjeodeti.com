"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-gray-900">GeoSurvey Kosovo</div>
          <div className="text-xs text-gray-500">Matje Precize</div>
        </div>
      </Link>
    </motion.div>
  );
}
