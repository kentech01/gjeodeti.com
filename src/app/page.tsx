import Hero from "../../components/landing/Hero";
import ServicesGrid from "../../components/landing/ServiceGrid";
import Partners from "../../components/landing/Partners";
import TeamPreview from "../../components/landing/TeamPreview";
//import ContactForm from "../../components/landing/ContactForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServicesGrid />
      <Partners />
      <TeamPreview />
      {/* <ContactForm /> */}
    </div>
  );
}
