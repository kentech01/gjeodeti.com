"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Phone } from "lucide-react";
import type { NavItem } from "../../types/header";
import { CONTACT } from "../../constants/nav";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <div className="mt-8 space-y-4">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center space-x-2 text-sm text-gray-600 px-4"
              onClick={() => setOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
