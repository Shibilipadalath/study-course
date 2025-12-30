// import Header from "@/components/common/Header";
// import Footer from "@/components/common/Footer";
// import Hero from "../components/Home/Hero";
// import AboutSection from "../components/Home/AboutSection";
// import ServicesSection from "../components/Home/ServicesSection";
// import CoursesSection from "../components/Home/CoursesSection";
// import WhyUsSection from "../components/Home/WhyUsSection";
// import TestimonialSection from "../components/Home/TestimonialSection";
// import FAQSection from "../components/Home/FAQSection";
// import LookingForSection from "../components/Home/LookingForSection";
// import PartnerSection from "../components/Home/PartnerSection";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <AboutSection />
//       <ServicesSection />
//       <CoursesSection />
//       <WhyUsSection />
//       <TestimonialSection />
//       <FAQSection />
//       <LookingForSection />
//       <PartnerSection />
//       <Footer />
//     </>
//   );
// }
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import CoursesSection from "../components/Home/CoursesSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import FAQSection from "../components/Home/FAQSection";
import LookingForSection from "../components/Home/LookingForSection";
import PartnerSection from "../components/Home/PartnerSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* MAIN FLOW */}
      <WhyUsSection />        {/* Why Momentor */}
      <ServicesSection />     {/* Education Journalism */}
      <LookingForSection />   {/* Futuristic */}

      {/* SUPPORTING CONTENT */}
      <CoursesSection />
      <AboutSection />
      <PartnerSection />

      {/* OPTIONAL / LOWER PRIORITY */}
      <TestimonialSection />
      <FAQSection />

      <Footer />
    </>
  );
}
