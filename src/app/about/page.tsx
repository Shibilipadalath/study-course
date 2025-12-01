import PageHero from "@/components/common/PageHero";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function AboutPage() {
  return (
    <>
      <Header/>  
      <PageHero title="About us" breadcrumb="Home / About us" />

      <section className="container mx-auto px-6 py-10">
        {/* About page content goes here */}
        <p>About content...</p>
      </section>
      <Footer/>  

    </>
  );
}
