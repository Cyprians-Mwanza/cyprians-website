// === src/App.js ===
import { useState, useEffect } from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function App() {
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Topbar show={showTopbar} />
      <Navbar />
    </>
  );
}

export default App;
