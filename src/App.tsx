import About from "./Components/About"
import Hero from "./Components/Hero"

const App = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      <Hero/>
      <About/>
    </div>
  )
}

export default App