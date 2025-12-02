import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import PageHero from '@/components/common/PageHero'
import Services from '@/components/Services/Services'

export default function ServicePage() {
  return (
    <>
        <Header/>
        <PageHero title='Services' breadcrumb='Home / Services'/>
        <Services/>
        <Footer/>
    </>
  )
}
