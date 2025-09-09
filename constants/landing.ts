import { MapPin, Compass, Target, Building2 } from "lucide-react";
import type { Service, TeamMember } from "../types/landing";

export const services: Service[] = [
  {
    icon: MapPin,
    title: "Kadastër & Matje Patundshmërish",
    description:
      "Shërbime për regjistrim, ndarje apo bashkim të parcelave dhe ndërtesave sipas sistemit kadastral.",
    features: [
      "Matje dhe përcaktim kufijsh",
      "Ndarje & bashkim parcelash",
      "Regjistrim ndërtesash",
    ],
  },
  {
    icon: Building2,
    title: "Patundshmëri & Ekspertiza",
    description: "Mbështetje teknike për projekte ndërtimi dhe zhvillim urban.",
    features: [
      "Vlerësim i tregut të pronës",
      "Ekspertiza teknike & ligjore",
      "Raporte të certifikuara",
    ],
  },
  {
    icon: Compass,
    title: "Legalizim ndërtimesh",
    description:
      "Shërbime për legalizimin e ndërtimeve të përfunduara ose në proces, sipas kategorive të përcaktuara nga ligji.",
    features: [
      "Legalizim shtëpish & ndërtesash",
      "Ndarje në Kategori I & II",
      "Regjistrim në Kadastër & RDPP",
    ],
  },
  {
    icon: Target,
    title: "Gjeodezi Inxhinierike",
    description:
      "Shërbime të specializuara për projektim, zbatim dhe kontroll në ndërtim.",
    features: [
      "Piketim rrugësh dhe objektesh",
      "Piketim rrjetesh ujësjellës & fekal",
      "Monitorim & kontroll cilësie",
    ],
  },
];

export const partners = [
  "Ministria e Infrastrukturës",
  "Komuna e Prishtinës",
  "AGK - Agjencia për Kadastër",
  "KEK Energji",
  "Telekom Kosovo",
];

export const teamMembers: TeamMember[] = [
  { name: "Blerim Halilaj", role: "CEO" },
  { name: "Muhamet Gerguri", role: "Inxhinier" },
  { name: "Shkelqim Fazliu", role: "Inxhinier" },
  { name: "Berat Murati", role: "Teknik i gjeodezis" },
  {
    name: "Rion Reqica",
    role: "Teknik i gjeodezis",
  },
];
