import React from "react"
import { useTranslation } from "react-i18next"
import Navbar from "../components/Navbar"

const Groups = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="">
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default Groups
