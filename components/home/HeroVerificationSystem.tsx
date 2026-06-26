import MachineReadScan from '@/components/home/MachineReadScan';
import EntityGraphCommandCenter from '@/components/home/EntityGraphCommandCenter';
import VerificationSourceCards from '@/components/home/VerificationSourceCards';
import RecommendationConfidenceCard from '@/components/home/RecommendationConfidenceCard';

// Layered AI verification cockpit. On desktop the panels overlap a large
// central entity graph over a glow+grid backdrop; on mobile it collapses to a
// clean stack (scan → graph → confidence). All text is server-rendered.
export default function HeroVerificationSystem() {
  return (
    <div className="relative w-full">
      {/* Depth background */}
      <div className="pointer-events-none absolute -inset-8 cockpit-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 cockpit-grid rounded-3xl" aria-hidden />

      {/* Content */}
      <div className="relative flex flex-col gap-5 lg:block lg:h-[600px]">

        {/* Entity graph — base layer */}
        <div className="order-2 mx-auto w-full max-w-[330px] sm:max-w-[400px] lg:max-w-none lg:mx-0 lg:absolute lg:inset-0 lg:z-0 lg:flex lg:items-center lg:justify-center">
          <div className="w-full lg:max-w-[470px] lg:translate-x-[6%]">
            <EntityGraphCommandCenter />
          </div>
        </div>

        {/* Machine Read scan — top-left */}
        <div className="order-1 lg:absolute lg:top-0 lg:left-0 lg:w-[288px] lg:z-20">
          <MachineReadScan />
        </div>

        {/* Verification sources — bottom-left (desktop only) */}
        <div className="hidden lg:block lg:absolute lg:bottom-5 lg:left-0 lg:w-[216px] lg:z-20">
          <VerificationSourceCards />
        </div>

        {/* Decision output — bottom-right, the system's verdict */}
        <div className="order-3 lg:absolute lg:bottom-0 lg:right-0 lg:w-[332px] lg:z-30">
          <RecommendationConfidenceCard />
        </div>

      </div>
    </div>
  );
}
