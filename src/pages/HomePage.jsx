import { Hero } from '../components/hero/Hero';
import { Features } from '../components/features/Features';
import { Solutions } from '../components/solution/Solutions';
import { BusinessOwners } from '../components/BusinessOwners';
import { Blog } from '../components/blog/Blog';
import { AllInsights } from '../components/AllInsights';
import { ManagaiUser } from "../components/users/ManagaiUser"
import { Testimonials } from '../components/testimonials/Testimonials';
import { FAQ } from '../components/FAQ/FAQ';
import { Pricing } from '../components/pricing/Pricing';
import { Contact } from '../components/Contact';
import './HomePage.css';

export function HomePage() {
  return (
   <main className="home-page">
      <Hero />
      <Features />
      <Solutions />
      <BusinessOwners />
      <Blog />
      <AllInsights />
      <ManagaiUser />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
    </main>
  );
}