import {
  Users,
  Award,
  Target,
  Globe,
  Calendar,
  TrendingUp,
} from "lucide-react";
import type { Stat, ValueItem, TeamMember } from "../types/about";

export const stats: Stat[] = [
  { number: "500+", label: "Projekte të realizuara", icon: Target },
  { number: "15+", label: "Vite përvojë", icon: Calendar },
  { number: "50+", label: "Klientë të kënaqur", icon: Users },
  { number: "99%", label: "Precizitet", icon: TrendingUp },
];

export const values: ValueItem[] = [
  {
    title: "Preciziteti",
    description:
      "Përdorim teknologjinë më të avancuar për të garantuar matje me precizitet maksimal.",
    icon: Target,
  },
  {
    title: "Besueshmëria",
    description:
      "Ndërtojmë marrëdhënie afatgjata me klientët bazuar në besim dhe transparencë.",
    icon: Award,
  },
  {
    title: "Inovacioni",
    description:
      "Investojmë në teknologji moderne dhe trajnime për të qëndruar në krye të industrisë.",
    icon: Globe,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Blerim Halilaj",
    role: "CEO",
    image: "../components/about/assets/gjeodeti-team-img.jpg",
  },
  {
    name: "Muhamet Gerguri",
    role: "Specialist GIS & Kartografi",
    image: "/team/fitore-berisha.jpg",
  },
  {
    name: "Shkelqim Fazliu",
    role: "Inxhinier",
    image: "/team/driton-mustafa.jpg",
  },
  {
    name: "Berat Murati",
    role: "Teknik i gjeodezis",
    image: "/team/majlinda-rexha.jpg",
  },
  {
    name: "Rion Reqica",
    role: "Teknik i gjeodezis",
    image: "/team/majlinda-rexha.jpg",
  },
];

export const certifications = [
  "ISO 9001:2015 - Menaxhimi i cilësisë",
  "Licencë nga AGK - Agjencia për kadastër",
  "Certifikim për matje geodetike",
  "Certifikim për Përdorim të GPS/GNSS",
  "Anëtarësim në dhomën e inxhinierëve",
];
