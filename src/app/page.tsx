
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import CoursesSection from "../components/Home/CoursesSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import FAQSection from "../components/Home/FAQSection";
import LookingForSection from "../components/Home/LookingForSection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <CoursesSection/>
      <WhyUsSection/>
      <TestimonialSection/>
      <FAQSection/>
      <LookingForSection/>
    </>
  );
}
