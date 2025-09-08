"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-gray-900 mb-6">
              Misioni dhe Vizioni Ynë
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-green-600 mb-3">Misioni</h3>
                <p className="text-gray-600">
                  Të ofrojmë shërbime geodetike të cilësisë së lartë që
                  mundësojnë zhvillim të qëndrueshëm të infrastrukturës dhe të
                  kontribuojmë në modernizimin e Kosovës përmes teknologjisë së
                  avancuar dhe ekspertizës profesionale.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-blue-600 mb-3">Vizioni</h3>
                <p className="text-gray-600">
                  Të jemi kompania lider në rajon për shërbime geodetike, të
                  njohur për inovacionin, precizitetin dhe kontributin në
                  zhvillimin e infrastrukturës moderne të Kosovës.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Precision Engineering Technology"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
