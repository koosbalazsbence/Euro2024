import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const GroupsCard = ({ group, groupHeading }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/json/groups.json")
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await res.json()
        setCountries(data.groups[group])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [group])

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
          {groupHeading}
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="flex-row divide-y divide-gray-200 dark:divide-gray-700"
        >
          {/* {countries.map((country, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={country.flag_url}
                    alt={`${country.name} Flag`}
                  />
                </div>
                <div className="ms-4 min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {country.name}
                  </p>
                </div>
              </div>
            </li>
          ))} */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="../assets/mini_flag_germany.png"
                  alt=""
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Hungary
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="../assets/mini_flag_hungary.png"
                  alt=""
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Hungary
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="../assets/mini_flag_scotland.png"
                  alt=""
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Hungary
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="../assets/mini_flag_switzerland.png"
                  alt=""
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Hungary
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

GroupsCard.propTypes = {
  groupHeading: PropTypes.string.isRequired,
  teamPicture: PropTypes.string.isRequired,
}

export default GroupsCard
