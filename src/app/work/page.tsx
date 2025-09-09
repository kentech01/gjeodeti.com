import HeroWork from "../../../components/work/HeroWork";

import ProjectsSection from "../../../components/work/ProjectsSection";
import Testimonials from "../../../components/work/Testimonials";
import CTAWork from "../../../components/work/CTAWork";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <ProjectsSection />
      <HeroWork />
      <Testimonials />
      <CTAWork />
    </div>
  );
}
