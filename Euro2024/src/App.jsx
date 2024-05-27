import React from "react"
import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  return (
    <>
      <div className="bg-[--clr-bg-blue] h-screen p-4 text-['Montserrat']">
        <Navbar />
        <h1 className="text-center text-4xl">2024-es labdarúgó-Európa-bajnokság</h1>
        <img src="" alt="" />
        <div></div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  )
}

export default App
