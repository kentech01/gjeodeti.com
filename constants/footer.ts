import type { Contact, WorkingHours } from "../types/footer";

export const company = {
  name: "Gjeodeti",
  tagline: "Matje Precize",
  year: 2024,
};

export const contact: Contact = {
  phone: "+383 49 298 111",
  email: "info@gjeodeti.com",
  addressLines: ["Rr. Bill Klinton 32", "10000 Prishtinë, Kosovë"],
};

export const workingHours: WorkingHours = {
  days: [
    { label: "Hënë - Premte", hours: "08:00 - 16:00" },
    { label: "Shtunë", hours: "09:00 - 14:00" },
  ],
};
