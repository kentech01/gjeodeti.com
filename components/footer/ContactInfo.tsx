"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Contact } from "../../types/footer";

export default function ContactInfo({ phone, email, addressLines }: Contact) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-4">Kontakti</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-green-400" />
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="text-sm hover:underline"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-green-400" />
          <a href={`mailto:${email}`} className="text-sm hover:underline">
            {email}
          </a>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
          <span className="text-sm">
            {addressLines.map((l, i) => (
              <span key={i}>
                {l}
                {i < addressLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
