import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      {/* <Contact /> */}
      <ScrollToTop
        smooth
        color="white"
        width=""
        style={{backgroundColor: '#14b8a6', borderRadius: '50%'}}
      />
    </>
  );
}

export default App;