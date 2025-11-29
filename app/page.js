import AttestationVisaServices from "./components/Attestationicons";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ServicesProvided from "./components/ServicesProvided";
import CountrySelector from "./components/CountriesSelector";
import HeroSection from "./components/HeroSection";
import ProcessTimeline from "./components/ProcessTimeline";
import CallbackForm from "./components/Callbackform";
import AboutSection from "./components/AboutUs1";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full bg-white overflow-hidden">
        <HeroSection/>
        
        {/* Scrolling text bar */}
        <div className="w-full bg-[#56b4e9] py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee inline-block">
            <span className="text-white text-lg font-semibold mx-4">ISO_TEXT</span>
          </div>
        </div>
        <AboutSection/>
      </section>
      <WhyChooseUs />
      <div id="#services"></div>
      <ServicesProvided/>
      <AttestationVisaServices />
      <ProcessTimeline/>
      <CountrySelector/>
      <CallbackForm/>
      <Testimonials />

    </main>
  );
}
