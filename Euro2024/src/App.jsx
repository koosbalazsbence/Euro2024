import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Groups from "./pages/Groups"
import Teams from "./pages/Teams"
import Events from "./pages/Events"
import Hungary from "./pages/Hungary"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Hungary" element={<Hungary />} />
      </Routes>
    </>
  )
}

export default App
