import type { Contact, WorkingHours } from "../types/footer";

export const company = {
  name: "GeoSurvey Kosovo",
  tagline: "Matje Precize",
  year: 2024,
};

export const contact: Contact = {
  phone: "+383 44 123 456",
  email: "info@geosurvey-kosovo.com",
  addressLines: ["Rr. Bill Klinton 32", "10000 Prishtinë, Kosovë"],
};

export const workingHours: WorkingHours = {
  days: [
    { label: "Hënë - Premte", hours: "08:00 - 17:00" },
    { label: "Shtunë", hours: "09:00 - 14:00" },
  ],
};
