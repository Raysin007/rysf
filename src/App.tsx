// @ts-ignore
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Areas from "./components/Areas";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("footer.brand_name");
  }, [i18n.language, t]);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Areas />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
