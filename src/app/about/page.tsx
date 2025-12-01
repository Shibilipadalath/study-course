import PageHero from "@/components/common/PageHero";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutIntroSection from "@/components/About/AboutIntroSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import OurBenefitsSection from "@/components/About/OurBenefitsSection";

export default function AboutPage() {
  return (
    <>
      <Header/>  
      <PageHero title="About us" breadcrumb="Home / About us" />
      <AboutIntroSection/>
      <MissionVisionSection/>
      <OurBenefitsSection/>
      <Footer/>  

    </>
  );
}
