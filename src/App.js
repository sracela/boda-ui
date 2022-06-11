import "./App.modules.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import MainSlider from "./components/MainSlider/MainSlider";
import CoupleSection from "./components/CoupleSection/CoupleSection";
import WeddingSection from "./components/WeddingSection/WeddingSection";
import RSVPSection from "./components/RSVPSection/RSVPSection";
import FooterSection from "./components/FooterSection/FooterSection";
import InfoSection from "./components/InfoSection/InfoSection";
import MoreInfoSection from "./components/MoreInfoSection/MoreInfoSection";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/Nav/Nav";
import { IS_MOBILE_MAX_WIDTH } from "./utils/common";
import AddYourMusic from "./components/AddYourMusic/AddYourMusic";

const Home = () => (
  <>
    <MainSlider />
    <InfoSection />
    <CoupleSection />
    <RSVPSection />
    {/* <section id="content">
      <InfoSection />
      <CoupleSection />
      <WeddingSection />
      <MoreInfoSection />
      <RSVPSection />
    </section> */}
    <FooterSection />
  </>
);

const LaBoda = () => (
  <>
    <WeddingSection />
    <MoreInfoSection />
    <RSVPSection />
    <FooterSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div id="sb-site">
      {isLoading && <Preloader />}
      {!isMobile && <Nav />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/la-boda" element={<LaBoda />} />
        <Route path="/la-musica" element={<AddYourMusic />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {isMobile && <Nav />}
    </div>
  );
}

export default App;
