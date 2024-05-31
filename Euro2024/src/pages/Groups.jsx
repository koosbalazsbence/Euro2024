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
        <div className="m-8 mx-auto grid w-5/6 grid-cols-3 grid-rows-2 gap-x-px gap-y-8">
          <DelayedComponent delay={800}>
            <Suspense fallback={<Loading />}>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group A"
                />
              </div>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group B"
                />
              </div>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group C"
                />
              </div>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group D"
                />
              </div>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group E"
                />
              </div>
              <div className="flex justify-center align-middle">
                <GroupsCard
                  groupHeading="Group F"
                />
              </div>
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
