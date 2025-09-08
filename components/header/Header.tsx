"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ContactInline from "./ContactInline";
import { NAV_ITEMS } from "../../constants/nav";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopNav items={NAV_ITEMS} />
          <div className="flex items-center space-x-4">
            <ContactInline />
            <MobileNav items={NAV_ITEMS} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
