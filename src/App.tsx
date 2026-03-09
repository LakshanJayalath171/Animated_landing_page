import About from "./Components/About"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Story from "./Components/Story"

const App = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      <div className="absolute">
        <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App