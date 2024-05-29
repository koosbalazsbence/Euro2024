import React from "react"
import { lazy } from "react" // TODO
import { useTranslation } from "react-i18next"
import "../public/json/cards.json" // Importing the JSON file
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"

const Home = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="select-none font-montserrat">
        <Navbar />
        <h1 className="delay-250 mb-4 text-center text-4xl font-semibold text-clr-whiteish transition ease-in-out hover:text-gray-900 w-full">
          {t("homeHeading")}
        </h1>
        <hr className="my-8 h-px border-0 bg-[#C2BDBD]" />
        <div className="mx-auto mt-12 w-3/4 text-center text-clr-whiteish">
          <h2 className="pb-8 text-5xl font-extrabold">
            {t("homeBellowHeading")}
          </h2>
          <p>
            {t('homeParagraphFirst')}
          </p>
          {t('homeParagraphSecond')}
          <p>
          </p>
          <br />
          <p>
            {t('')}
          </p>
        </div>
        <div className="m-10 flex items-center justify-center gap-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        {/* <MusicPlayer></MusicPlayer> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
