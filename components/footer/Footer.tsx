"use client";

import { motion } from "framer-motion";
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import WorkingHoursBlock from "./WorkingHours";
import { company, contact, workingHours } from "../../constants/footer";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo
            name={company.name}
            tagline={company.tagline}
            description="Kompania kryesore e matjeve geodetike në Kosovë, me pajisje moderne dhe ekip profesional. Ofrojmë shërbime precize për zhvillim urban dhe infrastrukturë."
          />
          <ContactInfo {...contact} />
          <WorkingHoursBlock {...workingHours} />
        </div>

        <motion.div
          className="flex flex-col justify-between items-center border-t border-primary-light mt-8 pt-8 text-center text-gray-400 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-white mb-4 md:mb-0">
            built with care —{" "}
            <a href="https://www.thrio.co/" className="text-primary">
              thrio.co
            </a>
          </p>
          <p>
            &copy; {company.year} {company.name}. Të gjitha të drejtat e
            rezervuara.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
