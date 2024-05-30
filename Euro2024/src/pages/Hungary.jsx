import React from "react"
import { useTranslation } from "react-i18next"
import Navbar from "../components/Navbar"
import Login from "../views/Login"

const Hungary = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <div className="flex justify-center items-center">
          <Login></Login>
        </div>
      </div>
    </>
  )
}

export default Hungary
