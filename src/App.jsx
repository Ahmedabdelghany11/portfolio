import { ThemeModeProvider } from "./context/ThemeModeContext";
import { ThemeColorProvider } from "./context/ThemeColorContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./ui/AppLayout";
import { useEffect, useState } from "react";
import Spinner from "./ui/Spinner";
import Skills from "./pages/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  }, []);

  return (
    <ThemeModeProvider>
      <ThemeColorProvider>
        {isLoading && <Spinner />}
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </ThemeColorProvider>
    </ThemeModeProvider>
  );
}

export default App;
