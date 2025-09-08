import { Target, Users, Calendar, CheckCircle, MapPin } from "lucide-react";
import type { Category, Project, Stat, Testimonial } from "../types/work";

export const categories: Category[] = [
  { id: "all", name: "Të Gjitha" },
  { id: "residential", name: "Rezidenciale" },
  { id: "commercial", name: "Komerciale" },
  { id: "infrastructure", name: "Infrastrukturë" },
  { id: "industrial", name: "Industriale" },
];

export const stats: Stat[] = [
  { number: "500+", label: "Projekte të Realizuara", icon: Target },
  { number: "50+", label: "Klientë të Kënaqur", icon: Users },
  { number: "15+", label: "Vite Përvojë", icon: Calendar },
  { number: "99%", label: "Sukses", icon: CheckCircle },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kompleksi Rezidencial "Green Valley"',
    category: "residential",
    location: "Prishtinë",
    year: "2024",
    client: "Kompania Ndërtimore Alba",
    description:
      "Matje të plota për kompleksin rezidencial me 150 apartamente, përfshirë matje toke, topografi dhe mbështetje gjatë ndërtimit.",
    services: ["Matje Toke", "Topografi", "Matje Ndërtimi"],
    area: "25,000 m²",
    duration: "6 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1680089606451-fa249c95eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9kZXRpYyUyMHN1cnZleWluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNTc3MDU2NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Terreni i pjerrët",
      "Koordinim me autoritetet",
      "Kushte atmosferike",
    ],
  },
  {
    id: 2,
    title: 'Qendra Tregtare "City Mall"',
    category: "commercial",
    location: "Prizren",
    year: "2023",
    client: "Retail Development Kosovo",
    description:
      "Shërbime të plota geodetike për ndërtimin e qendrës tregtare më të madhe në Prizren.",
    services: ["Matje Inxhinierike", "GIS", "Monitorim"],
    area: "40,000 m²",
    duration: "8 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Koordinim me infrastrukturën ekzistuese",
      "Matje në zona të banuara",
    ],
  },
  {
    id: 3,
    title: 'Rruga "Dardania" - Rehabilitim',
    category: "infrastructure",
    location: "Prishtinë",
    year: "2024",
    client: "Komuna e Prishtinës",
    description:
      "Matje topografike dhe mbështetje teknike për rehabilitimin e rrugës kryesore Dardania.",
    services: ["Topografi", "Matje Rrugore", "As-Built"],
    area: "12 km",
    duration: "4 muaj",
    status: "Në Progres",
    image:
      "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: ["Koordinim me trafikun", "Matje nën kushte të vështira"],
  },
  {
    id: 4,
    title: "Zona Industriale Kaçanik",
    category: "industrial",
    location: "Kaçanik",
    year: "2023",
    client: "Ministria e Zhvillimit Ekonomik",
    description:
      "Hartëzim i plotë i zonës industriale dhe krijim i sistemit GIS për menaxhimin e tokës.",
    services: ["GIS", "Fotogrametria", "Kartografia"],
    area: "200 hektarë",
    duration: "10 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1680089606451-fa249c95eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9kZXRpYyUyMHN1cnZleWluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNTc3MDU2NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Zona e madhe",
      "Integrim me sistemet ekzistuese",
      "Koordinim me shumë palë",
    ],
  },
  {
    id: 5,
    title: 'Lagja e Re "Sunny Hills"',
    category: "residential",
    location: "Gjilan",
    year: "2024",
    client: "Urban Development LLC",
    description:
      "Planifikim dhe matje për lagjën e re me 200 shtëpi private dhe infrastrukturë të plotë.",
    services: ["Matje Toke", "Planifikim Urban", "Infrastrukturë"],
    area: "50 hektarë",
    duration: "12 muaj",
    status: "Në Progres",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: ["Koordinim me planifikimin urban", "Matje të mëdha"],
  },
  {
    id: 6,
    title: 'Hotel "Heritage" - Pejë',
    category: "commercial",
    location: "Pejë",
    year: "2023",
    client: "Tourism Development Kosovo",
    description:
      "Matje të specializuara për ndërtimin e hotelit boutique në qendër të Pejës.",
    services: ["Matje Ndërtimi", "Kontrolli Cilësisë", "As-Built"],
    area: "3,000 m²",
    duration: "3 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: ["Ndërtim në qendër historike", "Kufizime të hapësirës"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Arben Demiri",
    role: "Drejtor, Kompania Ndërtimore Alba",
    quote:
      "GeoSurvey Kosovo ka qenë partneri ynë i besueshëm në shumë projekte. Profesionalizmi dhe preciziteti i tyre janë të shkëlqyer.",
    project: 'Kompleksi "Green Valley"',
  },
  {
    name: "Majlinda Krasniqi",
    role: "Menaxhere Projektesh, Komuna e Prishtinës",
    quote:
      "Bashkëpunimi me GeoSurvey Kosovo në rehabilitimin e rrugës Dardania ka qenë i suksesshëm. Rekomandojmë me siguri.",
    project: "Rruga Dardania",
  },
  {
    name: "Driton Rexhepi",
    role: "CEO, Urban Development LLC",
    quote:
      "Ekspertiza e tyre në planifikim urban dhe GIS na ka ndihmuar të realizojmë projektin brenda afateve të paravendosura.",
    project: 'Lagja "Sunny Hills"',
  },
];
