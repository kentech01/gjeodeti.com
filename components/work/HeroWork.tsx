"use client";

import { motion } from "framer-motion";
import StatsWork from "./StatsWork";

export default function HeroWork() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Punimet tona
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-20 mx-auto">
            Shikoni disa nga projektet më të suksesshme që kemi realizuar në të
            gjithë Kosovën, duke përdorur teknologjinë më të avancuar dhe
            ekspertizën tonë profesionale.
          </p>
        </motion.div>
      </div>
      <StatsWork />
    </section>
  );
}
