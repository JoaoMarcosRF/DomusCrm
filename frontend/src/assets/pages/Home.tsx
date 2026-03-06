import AboutSection from "../layouts/AboutSection";
import { Footer } from "../layouts/Footer";
import Header from "../layouts/Header";
import HeroSection from "../layouts/HeroSection";
import PropertiesSection from "../layouts/PropertiesSection";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PropertiesSection />
      <AboutSection />
      <Footer/>
    </>
  );
}
export default Home;
