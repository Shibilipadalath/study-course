import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import PageHero from '@/components/common/PageHero'
import Gallery from '@/components/Gallery/Gallery'

export default function GalleryPage() {
  return (
    <>
        <Header/>
        <PageHero title='Gallery' breadcrumb='Home / Gallery'/>
        <Gallery/>
        <Footer/>
    </>
  )
}
