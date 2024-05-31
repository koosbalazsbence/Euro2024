import React from "react"
import { useTranslation } from "react-i18next"
import Navbar from "../components/Navbar"
import PlaceholderIcon from "../components/PlaceholderIcon"

const Teams = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <PlaceholderIcon></PlaceholderIcon>
      </div>
    </>
  )
}

export default Teams
