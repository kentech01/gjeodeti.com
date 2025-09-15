import HeroWork from "../../../components/work/HeroWork";

import ProjectsSection from "../../../components/work/ProjectsSection";
import Testimonials from "../../../components/work/Testimonials";
import CTAWork from "../../../components/work/CTAWork";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white ">
      <HeroWork />
      <ProjectsSection />
      <Testimonials />
      <CTAWork />
    </div>
  );
}
