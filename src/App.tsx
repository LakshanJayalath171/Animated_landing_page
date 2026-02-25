import Hero from "./Components/Hero"

const App = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      <Hero/>
      <section className="z-0 min-h-screen bg-blue-500"/>
    </div>
  )
}

export default App