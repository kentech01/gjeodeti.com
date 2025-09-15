"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/gjeodeti-logo.png"
          alt="Gjeodeti"
          width={120}
          height={32}
          className="h-16 md:h-18 w-auto"
          priority
        />
      </Link>
    </motion.div>
  );
}
