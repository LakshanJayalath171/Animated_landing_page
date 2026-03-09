import About from "./Components/About"
import Features from "./Components/Features"
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
    </div>
  )
}

export default App