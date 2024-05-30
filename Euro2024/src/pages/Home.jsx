import React, { lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
import "../public/json/cards.json"
import Loading from "../components/Loading"
import DelayedComponent from "../components/DelayedComponent"

const cardsData = import("../public/json/cards.json")

const Navbar = lazy(() => import("../components/Navbar"))
const Card = lazy(() => import("../components/Card"))
const Footer = lazy(() => import("../components/Footer"))

// const MusicPlayer = lazy(() => import("../components/MusicPlayer"))

const Home = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="select-none font-montserrat">
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
            <div className="mx-auto mt-12 w-3/4 text-center text-clr-whiteish">
              <h2 className="pb-8 text-5xl font-extrabold">
                {t("homeBellowHeading")}
              </h2>
              <p>{t("homeParagraphFirst")}</p>
              {t("homeParagraphSecond")}
              <p></p>
              <br />
              <p>{t("homeParagraphThird")}</p>
            </div>
          </Suspense>
        </DelayedComponent>
        <div className="m-10 flex items-center justify-center gap-10">
          <DelayedComponent delay={800}>
            <Suspense fallback={<Loading />}>
              <Card
                heading={t("groupsCardHeading")}
                paragraph={t("groupsCardParagraph")}
                buttonLabel={t("groupsCardButton")}
                path="/Groups"
              />
              <Card
                heading={t("teamsCardHeading")}
                paragraph={t("teamsCardParagraph")}
                buttonLabel={t("teamsCardButton")}
                path="/Teams"
              />
              <Card
                heading={t("eventsCardHeading")}
                paragraph={t("eventsCardParagraph")}
                buttonLabel={t("eventsCardButton")}
                path="/Events"
              />
            </Suspense>
          </DelayedComponent>
        </div>
        {/* <DelayedComponent delay={300}>
          <Suspense fallback={<Loading />}>
            <MusicPlayer />
          </Suspense>
        </DelayedComponent> */}
      </div>
      <DelayedComponent delay={1200}>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </DelayedComponent>
    </>
  )
}

export default Home
