import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Loader } from './components/loader/Loader';
import { Expert } from './components/expert/expert';
import { MoreEx } from './components/expert/MoreEx';
import { MoreVis } from './components/vismis/MoreVis';
import TeamSection from './components/TeamSection';

// Lazy-loaded components
const Hero = lazy(() => import('./components/hero/Hero'));
const Partners = lazy(() => import('./components/part_accr/Partners'));
const Contact = lazy(() => import('./components/contact/Contact'));
const PartAcc = lazy(() => import('./components/part_accr/PartAcc'));
const VisMis = lazy(() => import('./components/vismis/VisMis'));
const MoreServ = lazy(() => import('./components/services/MoreServ'));
const News = lazy(() => import('./components/news/News'));
const Services = lazy(() => import('./components/services/Services'));
const Products = lazy(() => import('./components/products/Product'));
const MoreProd = lazy(() => import('./components/products/MoreProd'));
const NewsDetail = lazy(() => import('./components/news/NewsDetail'));
const Achievements = lazy(() => import('./components/Achievements'));
const WhyUs = lazy(() => import('./components/whyus/whyUs'));
const More = lazy(() => import('./components/whyus/More'));
const NotFound = lazy(() => import('./components/not-found/NotFound'));
function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            {/* Specific routes */}
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/services" element={<MoreServ />} />
            <Route path="/partnerships-and-accreditation" element={<PartAcc />} />
            <Route path="/products" element={<MoreProd />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/about-us" element={<More />} />
            <Route path="/area-of-expertise" element={<MoreEx />} />
            <Route path="/vision-mission-value" element={<MoreVis />} />
            


            {/* Home route */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <VisMis />
                  <WhyUs />
                  <Expert />
                  <Achievements />
                  <TeamSection />
                  <Services />
                  <Products />
                  <News />
                  <Partners />
                </>
              } 
            />

            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
