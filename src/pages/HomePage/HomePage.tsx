import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Social from "./components/Social";


function HomePage() {
  return (
    <div className="bg-main">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Social />
      <Footer />
    </div>
  )
}

export default HomePage;