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
    title: 'Rrjeti i kanalizimit fekal"',
    category: "infrastructure",
    location: "Prishtinë",
    year: "2024",
    client: "NTP Ndërtimi",
    description:
      "Hartëzim, piketim dhe mbikëqyrje për rrjetin e kanalizimit fekal në Komunën e Skenderajt – Z.K. Baks, me gjatësi rreth 60 km.",
    services: ["Matje Toke", "Topografi", "Piketim"],
    area: "25,000 m²",
    duration: "6 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1680089606451-fa249c95eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9kZXRpYyUyMHN1cnZleWluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNTc3MDU2NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Terren i thyer dhe akses i kufizuar",
      "Koordinim me autoritetet lokale dhe banorët",
      "Kushtet atmosferike gjatë matjeve",
    ],
  },
  {
    id: 2,
    title: 'PCC Prishtina City Center"',
    category: "residential",
    location: "Prizren",
    year: "2023",
    client: "Alba Group",
    description:
      "Mbikëqyrje dhe matje ndërtimi për kompleksin “PCC Prishtina City Center” me 32 kate dhe 125 m lartësi; projekti është në proces punimesh.",
    services: ["Matje Inxhinierike", "Piketim", "Monitorim"],
    area: "40,000 m²",
    duration: "8 muaj",
    status: "Përfunduar",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Punime në lartësi të mëdha dhe standarde të rrepta sigurie",
      "Saktësi milimetrike për boshtet dhe nivelet",
      "Koordinim me shumë kontraktorë",
    ],
  },
  {
    id: 3,
    title: "QENDRESA HOME",
    category: "residential",
    location: "Prishtinë",
    year: "2024",
    client: "Bau Holding",
    description:
      "Matje dhe mbikëqyrje për lagjen rezidenciale QENDRESA HOME me 235 shtëpi; rrugë qendrore 1480 m dhe shteg biçikletash.",
    services: ["Topografi", "Matje Rrugore", "Piketim"],
    area: "12 km",
    duration: "4 muaj",
    status: "Në Progres",
    image:
      "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenges: [
      "Faza të shumta pune në të njëjtën kohë",
      "Menaxhim trafiku dhe akses ndërtimi",
      "Koordinim me infrastrukturat nën/tokësore",
    ],
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
      "Gjeodeti ka qenë partneri ynë i besueshëm në shumë projekte. Profesionalizmi dhe preciziteti i tyre janë të shkëlqyer.",
    project: 'Kompleksi "Green Valley"',
  },
  {
    name: "Majlinda Krasniqi",
    role: "Menaxhere Projektesh, Komuna e Prishtinës",
    quote:
      "Bashkëpunimi me Gjeodeti në rehabilitimin e rrugës Dardania ka qenë i suksesshëm. Rekomandojmë me siguri.",
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
