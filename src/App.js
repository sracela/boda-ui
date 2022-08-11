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
import UploadImages from "./components/UploadImages/UploadImages";
import MyUploader from "./components/MyUploader/MyUploader";
import Gallery from "./components/Gallery/Gallery";
import ImgView from "./components/ImgView/ImgView";

const Home = () => {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  return (
    <>
      {!isMobile && <Nav />}
      <MainSlider />
      <InfoSection />
      <CoupleSection />
      <RSVPSection />
      <FooterSection />
      {isMobile && <Nav />}
    </>
  );
};

const LaBoda = () => {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  return (
    <>
      {!isMobile && <Nav isDefault />}
      <WeddingSection />
      <MoreInfoSection />
      <RSVPSection />
      <FooterSection />
      {isMobile && <Nav />}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div id="sb-site">
      {isLoading && <Preloader />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/la-boda" element={<LaBoda />} />
        <Route path="/la-musica" element={<AddYourMusic />} />
        <Route path="/galeria/:imgId" element={<ImgView />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/sube-tus-fotos/subir" element={<MyUploader />} />
        <Route path="/sube-tus-fotos" element={<UploadImages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
