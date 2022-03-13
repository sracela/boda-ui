import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import MainSlider from "./components/MainSlider/MainSlider";
import CoupleSection from "./components/CoupleSection/CoupleSection";
import CountingDownSection from "./components/CountingDownSection/CountingDownSection";
import WeddingSection from "./components/WeddingSection/WeddingSection";
import RSVPSection from "./components/RSVPSection/RSVPSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])
  return (
    <div className="sb-site">
      {/* PRELOADER */}
      {isLoading && <Preloader />}
      <header></header>
      {/* MAIN SLIDER */}
      <MainSlider />
      {/* CONTENT SECTION */}
      <section id="content">
        <CoupleSection />
        <CountingDownSection />
        <WeddingSection />
        <RSVPSection />
      </section>
      <FooterSection />
    </div>
  );
}

export default App;
