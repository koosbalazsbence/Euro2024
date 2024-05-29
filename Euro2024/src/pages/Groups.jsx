import React from "react"
import { useTranslation } from "react-i18next"
import Navbar from "../components/Navbar"
import GroupsCard from "../components/GroupsCard"
import Loading from "../components/Loading"
import DelayedComponent from "../components/DelayedComponent"
import Footer from "../components/Footer"

const cardsData = import("../public/json/cards.json")

const Groups = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="mb-4 font-montserrat">
        <Navbar></Navbar>
        <h1 className="delay-250 mb-4 w-full text-center text-4xl font-semibold text-clr-whiteish transition ease-in-out hover:text-gray-900">
          {t("homeHeading")}
        </h1>
        <div className="mx-auto pt-4 text-center text-clr-whiteish">
          <h2 className="text-xl font-semibold">EURO 2024 group stage draw</h2>
          <br />
          <p>
            Group A: Germany, Scotland, Hungary, Switzerland Group <br /> B:
            Spain, Croatia, Italy, Albania Group <br /> C: Slovenia, Denmark,
            Serbia, England Group <br /> D: Play-off winner A, Netherlands,
            Austria, France Group <br /> E: Belgium, Slovakia, Romania, Play-off
            winner B Group <br /> F: Türkiye, Play-off winner C, Portugal,
            Czechia
          </p>
        </div>
        <hr className="mx-auto my-8 h-px w-[95%] border-0 bg-[#C2BDBD]" />
        <div className="m-8 mx-auto grid w-5/6 grid-cols-3 grid-rows-2 gap-x-px gap-y-8">
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingOne")} />
          </div>
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingTwo")} />
          </div>
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingThree")} />
          </div>
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingFour")} />
          </div>
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingFive")} />
          </div>
          <div className="flex justify-center align-middle">
            <GroupsCard heading={t("groupCardHeadingSix")} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Groups
