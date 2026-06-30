import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Project from "./component/Project";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import BackgroundCanvas from "./component/BackgroundCanvas";
import CustomCursor from "./component/CustomCursor";
import SplashScreen from "./component/SplashScreen";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* Splash Screen — shown before portfolio loads */}
      <AnimatePresence>
        {!splashDone && (
          <SplashScreen onComplete={() => setSplashDone(true)} />
        )}
      </AnimatePresence>

      {/* Main portfolio — rendered behind splash, fades in after */}
      <div style={{ visibility: splashDone ? "visible" : "hidden" }}>
        <BackgroundCanvas />
        <CustomCursor />
        <ScrollToTop />
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
