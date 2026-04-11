import Hero from "@/components/Hero";
import PurposeSection from "@/components/PurposeSection";
import InfoSection from "@/components/InfoSection";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <PurposeSection />
      <InfoSection />
      {/* Speakers hidden until confirmed */}
      {/* Sponsors hidden until confirmed */}
      <Registration />
      <Footer />
    </main>
  );
}
