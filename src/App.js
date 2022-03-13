import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import MainSlider from "./components/MainSlider/MainSlider";

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
    </div>
  );
}

export default App;
