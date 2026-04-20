// @ts-ignore
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
