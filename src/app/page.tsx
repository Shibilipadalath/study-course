import Header from "../app/components/common/Header";
import Footer from "../app/components/common/Footer";
import Hero from "../app/components/hero/Hero";
import AboutSection from "../app/components/AboutSection";
import ServicesSection from "../app/components/services/ServicesSection";
import CoursesSection from "./components/courses/CoursesSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <CoursesSection/>
      <WhyUsSection/>
      <TestimonialSection/>
      <FAQSection/>
      <Footer/>
    </>
  );
}
