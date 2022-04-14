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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entrar, setEntrar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div className="sb-site">
      {/* PRELOADER */}
      {isLoading && <Preloader />}
      <header></header>

      {!entrar ? (
        <ComingSoonSection handleClick={() => setEntrar(true)}/>
      ) : (
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
      )}
    </div>
  );
}

export default App;
