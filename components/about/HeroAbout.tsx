"use client";

import { motion } from "framer-motion";
import StatsGrid from "./StatsGrid";

export default function HeroAbout() {
  return (
    <section className="py-20 bg-secondary-extra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Rreth nesh
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-20 mx-auto">
            Gjeodeti është kompania kryesore e matjeve geodetike në Kosovë, e
            themeluar me misionin për të ofruar shërbime precize dhe
            profesionale që mbështesin zhvillimin e infrastrukturës dhe
            urbanizmit në vendin tonë.
          </p>
        </motion.div>
      </div>
      <StatsGrid />
    </section>
  );
}
