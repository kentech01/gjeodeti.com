"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { NavItem } from "../../types/header";

export default function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-8 ">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <motion.div
            key={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              className={`px-3 py-2 rounded-md transition-colors ${
                active ? "text-primary" : "text-white hover:text-primary "
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
