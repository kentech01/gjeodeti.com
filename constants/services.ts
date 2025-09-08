import {
  MapPin,
  Compass,
  Target,
  Building2,
  Satellite,
  Camera,
} from "lucide-react";
import type { Service, ProcessStep } from "../types/services";

export const services: Service[] = [
  {
    id: "matje-toke",
    icon: MapPin,
    title: "Matje Toke dhe Pronash",
    description:
      "Matje precize të parcelave, kufijve të pronave dhe përcaktim të sipërfaqeve me teknologji GPS GRX3.",
    features: [
      "Matje me GPS RTK (Real-Time Kinematic)",
      "Hartëzim digjital i pronave",
      "Përcaktim i kufijve të saktë",
      "Certifikata zyrtare të matjeve",
      "Raporte teknike të detajuara",
    ],
    equipment: ["GPS GRX3", "Theodolite", "Software CAD"],
    duration: "2-5 ditë",
    price: "Nga €150",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "matje-ndertimi",
    icon: Building2,
    title: "Matje për Ndërtim",
    description:
      "Mbështetje teknike për projekte ndërtimi, vendosje të strukturave dhe kontrolli geometrik.",
    features: [
      "Vendosje e akseve të ndërtimit",
      "Kontrolli vertikal dhe horizontal",
      "Matje gjatë fazave të ndërtimit",
      "Verifikim i tolerancave",
      "As-built dokumentacion",
    ],
    equipment: ["Total Station GT", "Laser Level", "GPS RTK"],
    duration: "1-3 ditë",
    price: "Nga €200",
    image:
      "https://images.unsplash.com/photo-1680089606451-fa249c95eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9kZXRpYyUyMHN1cnZleWluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzU3MDU2NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "topografi",
    icon: Compass,
    title: "Matje Topografike",
    description:
      "Hartëzim topografik dhe krijim të modeleve terreni për projekte infrastrukturore dhe planifikim urban.",
    features: [
      "Hartëzim topografik i detajuar",
      "Krijim i modeleve digjitale të terrenit",
      "Kontur linjat dhe reliefi",
      "Integrim me sistemet GIS",
      "Planimetri dhe altimetri",
    ],
    equipment: ["Total Station GT", "GPS RTK", "Dronë"],
    duration: "3-7 ditë",
    price: "Nga €300",
    image:
      "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "matje-inxhinierike",
    icon: Target,
    title: "Matje Inxhinierike",
    description:
      "Shërbime të specializuara për projekte inxhinierike, rrugë, ura dhe infrastrukturë të rëndësishme.",
    features: [
      "Matje për projekte rrugore",
      "Mbështetje për ndërtim urash",
      "Monitorim deformacionesh",
      "Kontrolli cilësisë së ndërtimit",
      "Raporte teknike të specializuara",
    ],
    equipment: ["Total Station GT", "GPS GRX3", "Laser Scanner"],
    duration: "2-10 ditë",
    price: "Nga €500",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "gis-kartografi",
    icon: Satellite,
    title: "GIS dhe Kartografi",
    description:
      "Krijim i hartave digjitale, analizë hapësinore dhe zhvillim i sistemeve të informacionit gjeografik.",
    features: [
      "Krijim i bazave të të dhënave GIS",
      "Hartëzim digjital i saktë",
      "Analizë hapësinore",
      "Integrim me sistemet ekzistuese",
      "Trajnime për përdoruesit",
    ],
    equipment: ["ArcGIS", "QGIS", "GPS RTK", "Dronë"],
    duration: "5-15 ditë",
    price: "Nga €400",
    image:
      "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "fotogrametria",
    icon: Camera,
    title: "Fotogrametria me Dronë",
    description:
      "Matje nga ajri me dronë për projekte të mëdha dhe zona të vështira për t'u arritur.",
    features: [
      "Fotogrametria ajrore me dronë",
      "Modele 3D të terrenit",
      "Ortofoto me rezolucion të lartë",
      "Hartëzim i zonave të vështira",
      "Monitorim i progresit të punimeve",
    ],
    equipment: ["Dronë Profesionale", "Kamera 4K", "Software Fotogrametrik"],
    duration: "1-3 ditë",
    price: "Nga €250",
    image:
      "https://images.unsplash.com/photo-1680089606451-fa249c95eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9kZXRpYyUyMHN1cnZleWluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzU3MDU2NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultimi Fillestar",
    description:
      "Analizojmë nevojat tuaja dhe përcaktojmë metodën më të përshtatshme të matjes.",
  },
  {
    step: "02",
    title: "Planifikimi Teknik",
    description:
      "Përgatisim planin e punës, përcaktojmë ekipin dhe pajisjet e nevojshme.",
  },
  {
    step: "03",
    title: "Punët në Terren",
    description:
      "Realizojmë matjet me teknologji moderne dhe precizitet maksimal.",
  },
  {
    step: "04",
    title: "Përpunimi i të Dhënave",
    description:
      "Përpunojmë të dhënat dhe krijojmë raporte teknike të detajuara.",
  },
  {
    step: "05",
    title: "Dorëzimi Final",
    description:
      "Dorëzojmë raportet finale, hartat dhe certifikatat e nevojshme.",
  },
];
