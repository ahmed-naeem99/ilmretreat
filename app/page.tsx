import { Suspense } from "react";
import Hero from "@/components/Hero";
import PurposeSection from "@/components/PurposeSection";
import InfoSection from "@/components/InfoSection";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import SuccessOverlay from "@/components/SuccessOverlay";

export default function Home() {
  return (
    <main className="relative">
      <Suspense>
        <SuccessOverlay />
      </Suspense>
      <Hero />
      <PurposeSection />
      <InfoSection />
      <Speakers />
      <Sponsors />
      <Registration />
      <Footer />
    </main>
  );
}
