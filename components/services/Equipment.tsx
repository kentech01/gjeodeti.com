"use client";

import { motion } from "framer-motion";
import { Satellite, Target, Camera } from "lucide-react";

export default function Equipment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Teknologjia Moderne
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Përdorim teknologjinë më të avancuar për të garantuar precizitet
            maksimal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Satellite,
              title: "GPS GRX3",
              desc: "Sistem GPS me precizitet centimetrik për matje të sakta të pozicioneve.",
            },
            {
              icon: Target,
              title: "Total Station GT",
              desc: "Stacion total robotik për matje të shpejta dhe të sakta në terren.",
            },
            {
              icon: Camera,
              title: "Dronë Profesionale",
              desc: "Fotogrametria ajrore për matje të zonave të mëdha dhe të vështira.",
            },
          ].map((it, i) => (
            <motion.div
              key={it.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <it.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{it.title}</h3>
              <p className="text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
