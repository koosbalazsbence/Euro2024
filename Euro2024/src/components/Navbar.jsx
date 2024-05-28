import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar mb-8 mt-4 font-montserrat">
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
            <Link to="/Groups">Groups</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Teams">Teams</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Events">Events</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Hungary">Hungary</Link>
          </li>
          {/* TRICOLOR */}
        </ul>
        <span className="absolute right-10 top-[2.80rem]">
          <button>Change language</button>
        </span>
      </div>
    </>
  )
}

export default Navbar
