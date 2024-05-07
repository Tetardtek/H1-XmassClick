import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hud from "./components/Hud/Hud";

import "./scss/root.scss";
import "./scss/components/footer.scss";

import navData from "./data/NavBarData.json";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [toggleSnow, setToggleSnow] = useState(false);

  return (
    <>
      <Navbar
        navData={navData}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        toggleSnow={toggleSnow}
        setToggleSnow={setToggleSnow}
      />
      <Hud isVisible={isVisible} setIsVisible={setIsVisible} />
      <main>
        <Outlet context={[toggleSnow, setToggleSnow]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
