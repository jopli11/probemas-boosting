import { DiscordSection } from "@/components/DiscordSection";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PaymentMethods } from "@/components/PaymentMethods";
import { PromoBanner } from "@/components/PromoBanner";
import { ServicesTabs } from "@/components/ServicesTabs";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="bg-probemas-bg text-probemas-text">
      <Navbar />
      <PromoBanner />
      <main className="space-y-6">
        <Hero />
        <Features />
        <ServicesTabs />
        <Steps />
        <Testimonials />
        <DiscordSection />
        <VideoSection />
        <FAQ />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
}
