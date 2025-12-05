import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import Blogs from "@/components/Blogs/Blogs";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <PageHero title="Blogs" breadcrumb="Home / Blogs" />
      <Blogs />
      <Footer />
    </>
  );
}
