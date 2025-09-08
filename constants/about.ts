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
  { number: "500+", label: "Projekte të Realizuara", icon: Target },
  { number: "15+", label: "Vite Përvojë", icon: Calendar },
  { number: "50+", label: "Klientë të Kënaqur", icon: Users },
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
    name: "Arben Krasniqi",
    role: "Drejtues Ekzekutiv & Inxhinier Gjeodeti",
    education: "Inxhinier Gjeodeti, Universiteti i Prishtinës",
    experience: "15 vjet përvojë në matje geodetike dhe menaxhim projektesh",
    specialties: ["GPS/GNSS", "Topografi", "GIS", "Menaxhim Projektesh"],
  },
  {
    name: "Fitore Berisha",
    role: "Specialist GIS & Kartografi",
    education: "MSc. në Sistemet e Informacionit Gjeografik",
    experience: "12 vjet përvojë në GIS dhe modelim të të dhënave hapësinore",
    specialties: ["ArcGIS", "QGIS", "Modelim 3D", "Analizë Hapësinore"],
  },
  {
    name: "Driton Mustafa",
    role: "Teknician Kryesor Matjesh",
    education: "Teknician Geodeti, Shkolla e Mesme Teknike",
    experience: "8 vjet përvojë në përdorimin e pajisjeve të matjeve",
    specialties: ["Total Station", "GPS RTK", "Nivelman", "Kontrolli Cilësisë"],
  },
  {
    name: "Majlinda Rexha",
    role: "Menaxhere Projektesh & Marrëdhëniet me Klientët",
    education: "Menaxhment, Universiteti Evropian i Tiranës",
    experience: "10 vjet përvojë në menaxhimin e projekteve dhe shitjet",
    specialties: [
      "Menaxhim Projektesh",
      "Komunikim",
      "Planifikim",
      "Koordinim",
    ],
  },
];

export const certifications = [
  "ISO 9001:2015 - Menaxhimi i Cilësisë",
  "Licencë nga AGK - Agjencia për Kadastër",
  "Certifikim për Matje Geodetike",
  "Certifikim për Përdorim të GPS/GNSS",
  "Anëtarësim në Dhomën e Inxhinierëve",
];
