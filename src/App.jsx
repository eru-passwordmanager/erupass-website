import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div className={theme}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <Features/>
        <Architecture/>
        <Download/>
        <Footer/>
      </div>
    </>
  )
}

export default App
