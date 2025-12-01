import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/Contact/ContactForm"

export default function ContactPage() {
  return (
    <>

        <Header/>
        <PageHero title="Contact" breadcrumb="Home / Contact"/>
        <ContactForm/>
        <Footer/>
    </>
  )
}
