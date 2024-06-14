import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import CalendlyEmbed from "../components/CalendlyEmbed";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Why from "../components/Why";
import PricingSection from "../components/PricingSection";
// import Rocket from "../components/Rocket";
import CustomerJourney from "../components/CustomerJourney";
import Cfunnel from "../components/Cfunnel";
import Leaking from "../components/Leaking";
import Help from "../components/Help";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 bg-grid-white/[0.05]">
      <Hero />
      <Why />
      <CallToAction
        header="Ready to Boost Your Conversion Rate?"
        description="Discover how our expertly crafted marketing funnels can elevate your business by increasing leads and distinguishing you from the competition."
        cta="Yes, Boost my Conversions"
        href="/contact"
      />
      <CustomerJourney />
      <Services />

      <Panel />
      <CallToAction
        header="Get Started Today, Make Your Landing Pages Work As A 24/7 Salesman."
        description=""
        cta="Get Started Now"
        onClick={gtag_report_conversion('https://relaydigital.agency/')} href="https://calendly.com/relaydigitalyyc/discovery"
      />
      <Cfunnel />
      <Leaking />
      <CallToAction
        header="Unlock more revenue with elite funnels & landing pages."
        description="Same ad spend, more revenue.
        Live within 20 days.
        Conversion-driven, beyond just aesthetics."
        cta="Get A Price"
        onClick={gtag_report_conversion('https://relaydigital.agency/')} href="https://calendly.com/relaydigitalyyc/discovery"
      />
      <Help />
      <PricingSection />
      {/* <Rocket className="z-20" /> */}
      <CalendlyEmbed />
      <Contact />
    </div>
  );
};

export default Home;
