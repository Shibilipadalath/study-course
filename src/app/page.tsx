import Header from "../app/components/common/Header";
import Footer from "../app/components/common/Footer";
import Hero from "../app/components/hero/Hero";
import AboutSection from "../app/components/AboutSection";
import ServicesSection from "../app/components/services/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <Footer/>
    </>
  );
}
