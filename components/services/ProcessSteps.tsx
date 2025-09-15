"use client";

import { motion } from "framer-motion";
import { processSteps } from "../../constants/services";

export default function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Procesi i punës
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ndjekim një proces të strukturuar për të garantuar cilësi dhe
            transparencë në çdo projekt
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="relative mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-lg mb-4 z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
