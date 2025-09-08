import HeroAbout from "../../../components/about/HeroAbout";
import MissionVision from "../../../components/about/MissionVision";
import ValuesGrid from "../../../components/about/ValuesGrid";
import TeamGrid from "../../../components/about/TeamGrid";
import Certifications from "../../../components/about/Certifications";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <HeroAbout />
      <MissionVision />
      <ValuesGrid />
      <TeamGrid />
      <Certifications />
    </div>
  );
}
