"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function CTAWork() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Projekti juaj i ardhshëm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Le të diskutojmë se si mund të ju ndihmojmë të realizoni projektin
            tuaj me sukses.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
          >
            Kontaktoni Sot
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
