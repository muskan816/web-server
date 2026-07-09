import AiHighlights from "../components/landingPage/AiHighlights";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import Header from "../components/landingPage/Header";
import HeroSection from "../components/landingPage/HeroSection";
import HowItWork from "../components/landingPage/HowItWork";
import StatStrip from "../components/landingPage/StatStrip";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection/>
      <StatStrip/>
      <FeaturesSection/>
      <HowItWork/>
      <AiHighlights/>
    </>
  );
};

export default LandingPage;
