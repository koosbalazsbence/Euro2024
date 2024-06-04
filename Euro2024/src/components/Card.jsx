import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import cardsData from "../public/json/cards.json"

const Card = ({ imgSrc, heading, paragraph, buttonLabel, path }) => {
  return (
    <div className="flex max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link to={path}>
        <img className="mx-auto rounded-t-lg" src={imgSrc} alt="Card image" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link to={path}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
        </Link>
        <p className="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">
          {paragraph}
        </p>
        <Link
          to={path}
          className="inline-flex w-fit items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white transition ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonLabel}
          <svg
            className="ml-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  path: PropTypes.string,
}

export default Card
