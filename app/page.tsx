import Loader from '@/app/components/Loader';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import StatsBar from '@/app/components/StatsBar';
import Philosophy from '@/app/components/Philosophy';
import CeoSection from '@/app/components/CeoSection';
import Services from '@/app/components/Services';
import Alliance from '@/app/components/Alliance';
import GalleryStrip from '@/app/components/GalleryStrip';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <StatsBar />
      <Philosophy />
      <CeoSection />
      <Services />
      <Alliance />
      <GalleryStrip />
      <Contact />
      <Footer />
    </>
  );
}
