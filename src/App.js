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
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useAuthState } from "../src/hooks";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

import { FaHeart } from "react-icons/fa";
import UploadImages from "./components/UploadImages/UploadImages";

//TODO:
// 1. Clean upload-images code
// 5. Add Nav from other branch
// 2. Clean styles
// 4. Add auth
// 3. Try edge cases

const Home = () => {
  const navigate = useNavigate();
  return (
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
      <Fab
        mainButtonStyles={{ background: "#035959" }}
        icon={<FaHeart />}
        onClick={() => navigate("/sube-tus-fotos")}
      ></Fab>
    </>
  );
};
function App() {
  const [user] = useAuthState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("user", user);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [user]);

  return (
    <BrowserRouter>
      <div className="sb-site">
        {/* PRELOADER */}
        {isLoading && <Preloader />}
        <header></header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sube-tus-fotos" element={<UploadImages />} />
          <Route path="/" element={<ComingSoonSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
