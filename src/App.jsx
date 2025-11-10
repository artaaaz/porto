import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Galaxy from "./components/Galaxy";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
        {/* Background Galaxy */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.5}
            saturation={0.6}
            hueShift={200}
          />
        </div>

        {/* Konten utama */}
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
