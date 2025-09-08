"use client";

import { motion } from "framer-motion";

export default function HeroServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Shërbimet Tona
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrojmë një gamë të plotë shërbimesh geodetike me teknologji moderne
            dhe ekspertizë profesionale për të mbështetur projektet tuaja.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
