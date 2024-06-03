import React, { lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
import Loading from "../components/Loading"
import DelayedComponent from "../components/DelayedComponent"

const cardsData = import("../public/json/cards.json")

const Navbar = lazy(() => import("../components/Navbar"))
const GroupsCard = lazy(() => import("../components/GroupsCard"))
const Footer = lazy(() => import("../components/Footer"))

const Groups = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="mb-4 select-none font-montserrat">
        <DelayedComponent delay={100}>
          <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
        </DelayedComponent>

        <DelayedComponent delay={300}>
          <Suspense fallback={<Loading />}>
            <h1 className="delay-250 mb-4 w-full text-center text-4xl font-semibold text-clr-whiteish transition ease-in-out hover:text-gray-900">
              {t("homeHeading")}
            </h1>
            <hr className="mx-auto my-8 h-px w-[95%] border-0 bg-[#C2BDBD]" />
            <div className="mx-auto pt-4 text-center text-clr-whiteish">
              <h2 className="text-4xl font-bold">EURO 2024 group stage draw</h2>
              <br />
              <p className="pb-8 text-xl leading-loose">
                Group A: Germany, Scotland, Hungary, Switzerland <br />
                Group B: Spain, Croatia, Italy, Albania <br />
                Group C: Slovenia, Denmark, Serbia, England <br />
                Group D: Play-off winner A, Netherlands, Austria, France <br />
                Group E: Belgium, Slovakia, Romania, Play-off winner B <br />
                Group F: Türkiye, Play-off winner C, Portugal, Czechia
              </p>
            </div>
          </Suspense>
        </DelayedComponent>

        <div className="m-8 mx-10 grid grid-cols-1 content-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <DelayedComponent delay={800}>
            <Suspense fallback={<Loading />}>
              <GroupsCard
                groupHeading="Group A"
                firstTeamPicture="../../assets/flags_folder/mini_flag_germany.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_hungary.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_scotland.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_switzerland.png"
                firstTeamName="Germany"
                secondTeamName="Hungary"
                thirdTeamName="Scotland"
                fourthTeamName="Switzerland"
              />
              <GroupsCard
                groupHeading="Group B"
                firstTeamPicture="../../assets/flags_folder/mini_flag_spain.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_croatia.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_italy.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_switzerland.png"
                firstTeamName="Spain"
                secondTeamName="Croatia"
                thirdTeamName="Italy"
                fourthTeamName="Albania"
              />
              <GroupsCard
                groupHeading="Group C"
                firstTeamPicture="../../assets/flags_folder/mini_flag_slovenia.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_denmark.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_serbia.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_england.png"
                firstTeamName="Slovenia"
                secondTeamName="Denmark"
                thirdTeamName="Serbia"
                fourthTeamName="England"
              />
              <GroupsCard
                groupHeading="Group D"
                firstTeamPicture="../../assets/flags_folder/mini_flag_netherlands.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_france.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_poland.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_austria.png"
                firstTeamName="Netherlands"
                secondTeamName="France"
                thirdTeamName="Poland"
                fourthTeamName="Austria"
              />
              <GroupsCard
                groupHeading="Group E"
                firstTeamPicture="../../assets/flags_folder/mini_flag_ukraine.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_slovakia.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_belgium.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_romania.png"
                firstTeamName="Ukraine"
                secondTeamName="Slovakia"
                thirdTeamName="Belgium"
                fourthTeamName="Romania"
              />
              <GroupsCard
                groupHeading="Group F"
                firstTeamPicture="../../assets/flags_folder/mini_flag_portugal.png"
                secondTeamPicture="../../assets/flags_folder/mini_flag_czechia.png"
                thirdTeamPicture="../../assets/flags_folder/mini_flag_georgia.png"
                fourthTeamPicture="../../assets/flags_folder/mini_flag_turkey.png"
                firstTeamName="Portugal"
                secondTeamName="Czechia"
                thirdTeamName="Georgia"
                fourthTeamName="Türkiye"
              />
            </Suspense>
          </DelayedComponent>
        </div>
      </div>
      <DelayedComponent delay={1200}>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </DelayedComponent>
    </>
  )
}

export default Groups
