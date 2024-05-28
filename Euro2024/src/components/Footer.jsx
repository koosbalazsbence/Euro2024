import React from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footer relative bottom-0 left-0 right-0 mt-4 select-none bg-[--clr-footer-bg-blue] p-4 pb-4 text-center font-montserrat font-semibold text-gray-500">
        <h2 className="mb-4">
          Offical Euro 2024 website:
          <Link
            to="https://www.uefa.com/euro2024/"
            target="_blank"
            className="text-white"
          >
            {" "}
            UEFA Euro 2024
          </Link>
        </h2>
        <Link to="https://github.com/koosbalazsbence" target="_blank">
          <FaGithub className="mx-auto size-8" />
        </Link>
      </div>
    </>
  )
}

export default Footer
