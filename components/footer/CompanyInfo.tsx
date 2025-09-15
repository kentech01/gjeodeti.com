"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  tagline: string;
  description: string;
};

export default function CompanyInfo({ description }: Props) {
  return (
    <div className="col-span-1 md:col-span-2">
      <motion.div className="flex items-center space-x-2 cursor-pointer">
        <Image
          src="/gjeodeti-logo.png"
          alt="Gjeodeti"
          width={100}
          height={24}
          className="h-14 w-auto"
          priority
        />
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
