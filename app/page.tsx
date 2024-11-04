import Hero from './components/Hero';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Incentives from './components/Incentives';
import CTA from './components/CTA';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import PromoPopup from './components/PromoPopup';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Featured />
      <Incentives />
      <CTA />
      <Partners />
      <FAQ />
      <Testimonials />
      <PromoPopup />
    </main>
  );
}