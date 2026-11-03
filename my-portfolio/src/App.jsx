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
import SplashScreen from "./component/SplashScreen";
import ScrollToTop from "./component/ScrollToTop";
import SystemBar from "./component/SystemBar";
import CommandPalette from "./component/CommandPalette";
import ResumeModal from "./component/ResumeModal";
import StickySection from "./component/StickySection";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {!splashDone && (
          <SplashScreen onComplete={() => setSplashDone(true)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Layout */}
      <div
        style={{ visibility: splashDone ? "visible" : "hidden" }}
        className="min-h-screen bg-black text-zinc-100 selection:bg-white/20 selection:text-white"
      >
        <SystemBar onOpenCommandPalette={setCommandPaletteOpen} />
        <ScrollToTop />
        <NavBar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Hero — no sticky wrapper, it's the entry point */}
        <Hero />

        {/* Sticky stacked sections — Linear/Apple card stack effect */}
        <StickySection index={0} total={5}>
          <About />
        </StickySection>

        <StickySection index={1} total={5}>
          <Experience />
        </StickySection>

        <StickySection index={2} total={5}>
          <Skill />
        </StickySection>

        <StickySection index={3} total={5}>
          <Project />
        </StickySection>

        <StickySection index={4} total={5}>
          <Contact />
        </StickySection>

        {/* Footer — no sticky wrapper */}
        <Footer />

        {/* Global Command Palette (Cmd+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={setCommandPaletteOpen}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Global Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
