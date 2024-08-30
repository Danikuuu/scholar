import { useState } from "react"
import Context from "./assets/components/Context"
import Footer from "./assets/components/Footer"
import Hero from "./assets/components/Hero"
import Navigation from "./assets/components/Navigation"
import ScholarshipList from "./assets/components/ScholarshipList"


function App() {


    
  return (

    <>
      <div className="bg-[#e8c8fd]">
      <Navigation />
      <Hero />
      <Context/>
      <ScholarshipList />
      <Footer />
      </div>
    </>
  )
}

export default App
