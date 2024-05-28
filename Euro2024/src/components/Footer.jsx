import React from "react"

const Footer = () => {
  return (
    <>
      <div className="footer fixed bottom-0 left-0 right-0 bg-[--clr-footer-bg-blue] p-4 text-center font-montserrat font-semibold text-gray-500 mt-4">
        <h2>
          Offical Euro 2024 website:
          <a
            href="https://www.uefa.com/euro2024/"
            className="text-white"
          >
            {" "}
            UEFA Euro 2024
          </a>
        </h2>
      </div>
    </>
  )
}

export default Footer
