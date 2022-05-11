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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Home = () => (
  <>
    <MainSlider />
    <section id="content">
      <InfoSection />
      <CoupleSection />
      <WeddingSection />
      <MoreInfoSection />
      <RSVPSection />
    </section>
    <FooterSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="sb-site">
        {isLoading && <Preloader />}
        {!isMobile && (
          <header className="main-slide-header">
            <nav className="nav-header">
              <ul>
                <li>
                  <Link to="/">INICIO</Link>
                </li>
                <li>
                  <Link to="/la-boda">LA BODA</Link>
                </li>
                <li>
                  <Link to="/la-musica">PIDE TU MÚSICA</Link>
                </li>

                <li>
                  <Link to="/sube-tus-fotos">SUBE TUS FOTOS</Link>
                </li>
              </ul>
            </nav>
          </header>
        )}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ComingSoonSection />} />
        </Routes>

        {isMobile && (
          <header className="main-slide-header-mobile">
            <nav className="nav-header">
              <ul>
                <li style={{
  color: '#035959 !important'}}>
                  <Link to="/">INICIO</Link>
                </li>
                <li>
                  <Link to="/la-boda">LA BODA</Link>
                </li>
                <li>
                  <Link to="/la-musica">PIDE TU MÚSICA</Link>
                </li>

                <li>
                  <Link to="/sube-tus-fotos">SUBE TUS FOTOS</Link>
                </li>
              </ul>
            </nav>
          </header>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
