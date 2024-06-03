import React from "react"
import { useTranslation } from "react-i18next"
import Navbar from "../components/Navbar"
import Login from "../views/Login"
import UnderConstraction from "../components/UnderConstraction"
import Footer from "../components/Footer"

const Hungary = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <div className="flex items-center justify-center"></div>
        <UnderConstraction></UnderConstraction>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Hungary
