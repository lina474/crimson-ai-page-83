
import HeroSection from "@/components/HeroSection";
import PainPointsWidget from "@/components/PainPointsWidget";
import BenefitsWidget from "@/components/BenefitsWidget";
import CourseTimeline from "@/components/CourseTimeline";
import AdditionalPerks from "@/components/AdditionalPerks";
import CertificateSection from "@/components/CertificateSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import UrgencySection from "@/components/UrgencySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsWidget />
      <BenefitsWidget />
      <CourseTimeline />
      <AdditionalPerks />
      <CertificateSection />
      <InstructorSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <UrgencySection />
    </div>
  );
};

export default Index;
