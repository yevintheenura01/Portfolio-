import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ParallaxBackground from "./components/ParallaxBackground.jsx";
import MouseSpotlight from "./components/MouseSpotlight.jsx";
import SectionRail from "./components/SectionRail.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden transition-colors duration-300 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950">
        <ParallaxBackground />
        <MouseSpotlight />
        <SectionRail />
        <ScrollProgress />
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
