"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FileText, Phone } from "lucide-react";

export default function CTA() {
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
            Gati për të filluar projektin tuaj?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Kontaktoni me ne sot për një konsultim falas dhe ofertë të
            personalizuar për projektin tuaj.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              asChild
            >
              <a href="tel:+38349298111">
                <Phone className="w-4 h-4" />
                +383 49 298 111
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
