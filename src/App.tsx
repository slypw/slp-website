import React, { useRef, useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blogs from "./pages/Blogs"; // Import Blogs page
import SotaResnetCifar10 from "./pages/blogs/sota-resnet-cifar10-class"; // Example blog page

type Page = "home" | "projects" | "about" | "blogs" | "sota-resnet";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [page, setPage] = useState<Page>("home");
  const [fade, setFade] = useState(true);

  // Silk background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Silk layers
      for (let i = 0; i < 4; i++) {
        const offset = Math.sin(t * 0.4 + i) * 120;
        const gradient = ctx.createLinearGradient(
          0,
          canvas.height * 0.3 + offset,
          canvas.width,
          canvas.height * 0.7 - offset
        );
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(0.45, "rgba(255,255,255,0.06)");
        gradient.addColorStop(0.55, "rgba(255,255,255,0.06)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Pearl glow
      const pearl = ctx.createRadialGradient(
        canvas.width * 0.35,
        canvas.height * 0.25,
        canvas.width * 0.2,
        canvas.width * 0.35,
        canvas.height * 0.25,
        canvas.width
      );
      pearl.addColorStop(0, "rgba(255,255,255,0.04)");
      pearl.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = pearl;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += 0.002;
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Handle page changes with fade
  const handlePageChange = (newPage: Page) => {
    if (newPage === page) return;
    setFade(false);
    setTimeout(() => {
      setPage(newPage);
      setFade(true);
    }, 200);
  };

  // Render pages
  const renderPage = () => {
    switch (page) {
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "blogs":
        return <Blogs goToPage={handlePageChange} />;
      case "sota-resnet":
        return <SotaResnetCifar10 goToPage={handlePageChange} />;
      default:
        return <Home goToPage={handlePageChange} />;
    }
  };

  return (
    <div className="app">
      <canvas ref={canvasRef} className="silk-canvas" />

      {/* Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          {["home", "projects", "blogs", "about"].map((p) => (
            <li key={p}>
              <button
                className={page === p ? "active" : ""}
                onClick={() => handlePageChange(p as Page)}
              >
                {p === "home"
                  ? "Home"
                  : p === "projects"
                  ? "Projects"
                  : p === "about"
                  ? "About Me"
                  : "Blogs"}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page content with fade */}
      <main className={`content fade ${fade ? "show" : ""}`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
