"use client";

import { Phone } from "lucide-react";
import { CONTACT } from "../../constants/nav";

export default function ContactInline() {
  return (
    <div className="hidden lg:flex items-center space-x-2 text-sm text-white">
      <Phone className="w-4 h-4" />
      <a href={`tel:${CONTACT.phoneHref}`} className="hover:underline">
        {CONTACT.phoneDisplay}
      </a>
    </div>
  );
}
