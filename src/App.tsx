import { useLocation } from "react-router-dom";
import Avantages from "./components/Avantages";
import Footer from "./components/Footer";
import Formation from "./components/Formation";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <HeroBanner />
      <Avantages />
      <Formation />
      <Footer />
    </>
  );
};

export default App;
