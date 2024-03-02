import { Suspense, lazy } from "react";
import { ThemeModeProvider } from "./context/ThemeModeContext";
import { ThemeColorProvider } from "./context/ThemeColorContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Spinner = lazy(() => import("./ui/Spinner"));

function App() {
  return (
    <ThemeModeProvider>
      <ThemeColorProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </AppLayout>
          </Suspense>
        </BrowserRouter>
      </ThemeColorProvider>
    </ThemeModeProvider>
  );
}

export default App;
