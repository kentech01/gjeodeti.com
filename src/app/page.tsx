import Hero from "../../components/landing/Hero";
import ServiceGrid from "../../components/landing/ServiceGrid";
import Partners from "../../components/landing/Partners";
import TeamPreview from "../../components/landing/TeamPreview";
//import ContactForm from "../../components/landing/ContactForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServiceGrid />
      <Partners />
      <TeamPreview />
      {/* <ContactForm /> */}
    </div>
  );
}
