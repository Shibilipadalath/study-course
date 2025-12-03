import PageHero from "@/components/common/PageHero";
import AboutIntroSection from "@/components/About/AboutIntroSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import OurBenefitsSection from "@/components/About/OurBenefitsSection";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" breadcrumb="Home / About us" />
      <AboutIntroSection/>
      <MissionVisionSection/>
      <OurBenefitsSection/>
    </>
  );
}
