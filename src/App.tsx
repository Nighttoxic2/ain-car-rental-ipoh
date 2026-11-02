import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FleetCatalog from './components/FleetCatalog';
import RatesComparisonTable from './components/RatesComparisonTable';
import RentalTerms from './components/RentalTerms';
import TestimonialsSection from './components/TestimonialsSection';
import IpohExploration from './components/IpohExploration';
import SocialContactSection from './components/SocialContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuickBookingModal from './components/QuickBookingModal';
import VehicleDetailModal from './components/VehicleDetailModal';
import { Vehicle } from './data/vehicles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#07080b';
  }, []);

  const handleOpenBookingModal = (vehicle?: Vehicle) => {
    setSelectedVehicle(vehicle || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenDetailModal = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative min-h-screen bg-[#07080b] text-white selection:bg-emerald-500 selection:text-black">
          {/* Subtle Ambient Background Gradients */}
          <div className="fixed inset-0 z-0 opacity-25 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/15 blur-[160px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/15 blur-[160px]" />
          </div>

          <div className="relative z-10">
            <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />
            <Hero
              onOpenBookingModal={handleOpenBookingModal}
              onOpenDetailModal={handleOpenDetailModal}
            />
            <WhyChooseUs />
            <FleetCatalog
              onOpenBookingModal={handleOpenBookingModal}
              onOpenDetailModal={handleOpenDetailModal}
            />
            <RatesComparisonTable
              onOpenBookingModal={handleOpenBookingModal}
            />
            <RentalTerms />
            <TestimonialsSection />
            <IpohExploration />
            <SocialContactSection />
            <FAQSection />
            <Footer />
          </div>

          {/* Sticky floating WhatsApp button with live pulse */}
          <FloatingWhatsApp />

          {/* Quick Booking & Price Estimation Modal */}
          <QuickBookingModal
            isOpen={isBookingModalOpen}
            onClose={handleCloseBookingModal}
            initialVehicle={selectedVehicle}
          />

          {/* Detailed Vehicle Specs Modal */}
          <VehicleDetailModal
            isOpen={isDetailModalOpen}
            onClose={handleCloseDetailModal}
            vehicle={selectedVehicle}
            onOpenBookingModal={handleOpenBookingModal}
          />
        </main>
      )}
    </>
  );
}
