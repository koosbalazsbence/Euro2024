import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="navbar mb-8 mt-4 p-4 font-montserrat">
        <ul className="navbar-list flex items-center justify-center gap-6 text-xl font-bold">
          <li>
            <Link to="/">
              <img
                src="../../assets/euro-2024-logo.png"
                alt=""
                title=""
                className="h-12 w-12 no-underline"
              />
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Groups">{t("navbarItemGroups")}</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Teams">{t("navbarItemTeams")}</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Events">{t("navbarItemEvents")}</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Hungary">{t("navbarItemHungary")}</Link>
          </li>
        </ul>
        <span className="lng-icon absolute right-10 top-10 w-8">
          <button>
            <img src="../../assets/united-kingdom.png" alt="" />
            {/* <img src="../../assets/hungary.png" alt="" /> */}
          </button>
        </span>

        {/* <span className="absolute right-10 top-10 w-8">
          <button>
            <img src="../../assets/united-kingdom.png" alt="" />
          </button>
        </span> */}
      </div>
    </>
  )
}

export default Navbar
