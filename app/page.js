import AttestationVisaServices from "./components/Attestationicons";
import ProcedureSection from "./components/Procedure";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ServicesProvided from "./components/ServicesProvided";
import CountrySelector from "./components/CountriesSelector";
import AboutUs from "./components/AboutUS";
import Hero from "./components/MainHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full bg-white overflow-hidden">
        <Hero/>
        {/* Scrolling text bar */}
        <div className="w-full bg-[#56b4e9] py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee inline-block">
            <span className="text-white text-lg font-semibold mx-4">ISO_TEXT</span>
          </div>
        </div>
        <AboutUs/>
      </section>
      <WhyChooseUs />
      <ServicesProvided/>
      <AttestationVisaServices />
      <ProcedureSection/>
      <CountrySelector/>
      <Testimonials />

    </main>
  );
}
