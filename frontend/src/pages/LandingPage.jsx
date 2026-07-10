import AiHighlights from "../components/landingPage/AiHighlights";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import FinalCta from "../components/landingPage/FinalCta";
import Footer from "../components/landingPage/Footer";
import Header from "../components/landingPage/Header";
import HeroSection from "../components/landingPage/HeroSection";
import HowItWork from "../components/landingPage/HowItWork";
import ScreenPreview from "../components/landingPage/ScreenPreview";
import StatStrip from "../components/landingPage/StatStrip";
import Testimonial from "../components/landingPage/Testimonial";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <StatStrip />
      <FeaturesSection />
      <HowItWork />
      <AiHighlights />
      <ScreenPreview />
      <Testimonial />
      <FinalCta/>
      <Footer/>
    </>
  );
};

export default LandingPage;
