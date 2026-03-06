import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './components/Home';

import React, { Suspense, lazy } from 'react';

// Lazy loading route imports for performance
const HouseLeveling = lazy(() => import('./pages/services/HouseLeveling'));
const FoundationRepair = lazy(() => import('./pages/services/FoundationRepair'));
const ConcreteLeveling = lazy(() => import('./pages/services/ConcreteLeveling'));
const FreeInspection = lazy(() => import('./pages/FreeInspection'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Location Pages
const Kirksville = lazy(() => import('./pages/locations/Kirksville'));
const Quincy = lazy(() => import('./pages/locations/Quincy'));
const Hannibal = lazy(() => import('./pages/locations/Hannibal'));
const Macon = lazy(() => import('./pages/locations/Macon'));
const Macomb = lazy(() => import('./pages/locations/Macomb'));
const Keokuk = lazy(() => import('./pages/locations/Keokuk'));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Services />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <About />
            </Suspense>
          } />
          <Route path="/locations/kirksville" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Kirksville />
            </Suspense>
          } />
          <Route path="/locations/quincy" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Quincy />
            </Suspense>
          } />
          <Route path="/locations/hannibal" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Hannibal />
            </Suspense>
          } />
          <Route path="/locations/macon" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Macon />
            </Suspense>
          } />
          <Route path="/locations/macomb" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Macomb />
            </Suspense>
          } />
          <Route path="/locations/keokuk" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Keokuk />
            </Suspense>
          } />
          <Route path="/gallery" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <Gallery />
            </Suspense>
          } />
          <Route path="/free-inspection" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <FreeInspection />
            </Suspense>
          } />
          {/* Service detail pages */}
          <Route path="/services/house-leveling" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <HouseLeveling />
            </Suspense>
          } />
          <Route path="/services/foundation-repair" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <FoundationRepair />
            </Suspense>
          } />
          <Route path="/services/concrete-leveling" element={
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
              <ConcreteLeveling />
            </Suspense>
          } />
        </Routes>
      </RootLayout>
    </Router>
  );
}
