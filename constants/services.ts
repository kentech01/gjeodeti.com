import { MapPin, Compass, Target, Building2 } from "lucide-react";
import type { Service, ProcessStep } from "../types/services";

export const services: Service[] = [
  {
    id: "matje-toke",
    icon: MapPin,
    title: "Kadastër & Patundshmëri",
    description:
      "Kadastre e patundshmërive përfshin regjistrimin dhe administrimin e të drejtave të pronësisë, ndarjen dhe bashkimin e parcelave, si dhe regjistrimin e ndërtesave dhe njësive të tyre. Shërbimet tona ofrojnë saktësi të lartë dhe dokumentim të vlefshëm për çdo pronar.",
    features: [
      "Ndarje & bashkim parcelash",
      "Përcaktim & ri-rregullim kufijsh",
      "Identifikim & regjistrim parcelash",
      "Regjistrim ndërtesash dhe njësive të tyre",
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
    title: "Legalizim ndërtimesh",
    description:
      "Legalizimi i ndërtimeve është proces i domosdoshëm për të pajisur pronarët me dokumentacion zyrtar dhe të drejtën ligjore mbi objektet e tyre. Ky proces përfshin legalizimin e ndërtimeve të përfunduara apo të papërfunduara, ndërhyrjet pa leje në objekte ekzistuese, si dhe regjistrimin në Kadastër dhe RDPP. Përmes këtyre shërbimeve sigurohet mbrojtje ligjore, rritje e vlerës së pronës dhe qasje më e lehtë në shfrytëzimin e saj.",
    features: [
      "Legalizim shtëpish, ndërtesash bujqësore & afariste",
      "Procedura për ndërtime të përfunduara & të papërfunduara",
      "Ndërhyrje pa leje në ndërtime ekzistuese",
      "Regjistrim në Kadastër & RDPP",
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
    title: "Patundshmëri & Ekspertiza",
    description:
      "Shërbime profesionale për vlerësimin e pronave dhe ofrimin e ekspertizave teknike e ligjore. Raporte të detajuara dhe të certifikuara që ndihmojnë në vendimmarrje të sigurt për shitblerje, hipotekim apo procese gjyqësore.",
    features: [
      "Vlerësim i tregut të pronave (tokë, banesa, ndërtesa afariste)",
      "Ekspertiza teknike dhe ligjore për çështje pronësie",
      "Raporte zyrtare për gjykata, banka dhe institucione",
      "Konsulencë për shitblerje apo investime në pasuri të paluajtshme",
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
    title: "Gjeodezi inxhinierike",
    description:
      "Gjeodezia është e para që jep kontributin e saj në projektimin, zbatimin dhe kontrollin pas ndërtimit të çdo objekti mbi apo nën tokë.Ajo përcakton pozicionet e objekteve dhe ndodhive në kohë dhe është mjet i shkëlqyer për evidentimin e fenomeneve në tokën ku jetojmë.",
    features: [
      "Piketimin e rrugëve me të gjitha elementet e saj",
      "Piketimin e objekteve ndërtimore të të gjitha llojeve",
      "Piketimin e rrjetit të ujësjellësit",
      "Piketimin e rrjetit fekal",
    ],
    equipment: ["Total Station GT", "GPS GRX3", "Laser Scanner"],
    duration: "2-10 ditë",
    price: "Nga €500",
    image:
      "https://images.unsplash.com/photo-1526593740665-f57a5d42dd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBHUFMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA1NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultimi fillestar",
    description:
      "Analizojmë nevojat tuaja dhe përcaktojmë metodën më të përshtatshme të matjes.",
  },
  {
    step: "02",
    title: "Planifikimi teknik",
    description:
      "Përgatisim planin e punës, përcaktojmë ekipin dhe pajisjet e nevojshme.",
  },
  {
    step: "03",
    title: "Punët në terren",
    description:
      "Realizojmë matjet me teknologji moderne dhe precizitet maksimal.",
  },
  {
    step: "04",
    title: "Përpunimi i të dhënave",
    description:
      "Përpunojmë të dhënat dhe krijojmë raporte teknike të detajuara.",
  },
  {
    step: "05",
    title: "Dorëzimi final",
    description:
      "Dorëzojmë raportet finale, hartat dhe certifikatat e nevojshme.",
  },
];
