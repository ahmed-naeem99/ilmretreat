import Hero from "@/components/Hero";
import PurposeSection from "@/components/PurposeSection";
import InfoSection from "@/components/InfoSection";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <PurposeSection />
      <InfoSection />
      <Speakers />
      {/* Sponsors hidden until confirmed */}
      <Registration />
      <Footer />
    </main>
  );
}
