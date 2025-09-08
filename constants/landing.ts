import { MapPin, Compass, Target, Building2 } from "lucide-react";
import type { Service, TeamMember } from "../types/landing";

export const services: Service[] = [
  {
    icon: MapPin,
    title: "Matje Toke",
    description:
      "Matje precize të parcelave dhe kufijve të pronave me teknologji GPS GRX3.",
    features: ["GPS GRX3", "Hartë Digjitale", "Certifikata"],
  },
  {
    icon: Building2,
    title: "Matje Ndërtimi",
    description: "Mbështetje teknike për projekte ndërtimi dhe zhvillim urban.",
    features: ["Total Station GT", "Planimetri 3D", "Kontrolli Cilësisë"],
  },
  {
    icon: Compass,
    title: "Topografi",
    description:
      "Hartëzim topografik dhe krijim të modeleve terreni për projekte infrastrukturore.",
    features: ["Modelim 3D", "Kontur Linjat", "GIS Integrim"],
  },
  {
    icon: Target,
    title: "Matje Inxhinierike",
    description:
      "Shërbime të specializuara për projekte inxhinierike dhe infrastrukturë.",
    features: ["Precizitet i Lartë", "Monitorim", "Raporte Teknike"],
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
  { name: "Arben Krasniqi", role: "Inxhinier Gjeodeti", experience: "15 vjet" },
  { name: "Fitore Berisha", role: "Specialist GIS", experience: "12 vjet" },
  { name: "Driton Mustafa", role: "Teknician Matjesh", experience: "8 vjet" },
  {
    name: "Majlinda Rexha",
    role: "Menaxhere Projektesh",
    experience: "10 vjet",
  },
];
