import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import MainSlider from "./components/MainSlider/MainSlider";
import CoupleSection from "./components/CoupleSection/CoupleSection";
import WeddingSection from "./components/WeddingSection/WeddingSection";
import RSVPSection from "./components/RSVPSection/RSVPSection";
import FooterSection from "./components/FooterSection/FooterSection";
import ComingSoonSection from "./components/ComingSoonSection/ComingSoonSection";
import InfoSection from "./components/InfoSection/InfoSection";
import MoreInfoSection from "./components/MoreInfoSection/MoreInfoSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPhotosSection from "./components/AddPhotosSection/AddPhotosSection";

const Home = () => (
  <>
    {" "}
    {/* MAIN SLIDER */}
    <MainSlider />
    {/* CONTENT SECTION */}
    <section id="content">
      <InfoSection />
      <CoupleSection />
      {/* <CountingDownSection /> */}
      <WeddingSection />
      <MoreInfoSection />
      <RSVPSection />
    </section>
    <FooterSection />
  </>
);
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="sb-site">
        {/* PRELOADER */}
        {isLoading && <Preloader />}
        <header></header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-photos" element={<AddPhotosSection />} />
          <Route
            path="/"
            element={<ComingSoonSection />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
