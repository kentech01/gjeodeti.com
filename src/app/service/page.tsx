import HeroServices from "../../../components/services/HeroServices";
import ServicesGrid from "../../../components/services/ServicesGrid";
import ProcessSteps from "../../../components/services/ProcessSteps";
import Equipment from "../../../components/services/Equipment";
import CTA from "../../../components/services/CTA";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <HeroServices />
      <ServicesGrid />
      <Equipment />
      <ProcessSteps />
      <CTA />
    </div>
  );
}
