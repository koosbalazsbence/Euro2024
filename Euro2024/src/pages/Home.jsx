import React from "react"
import { lazy } from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <div className="select-none p-4">
        <Navbar />
        <h1 className="delay-250 mb-4 text-center font-montserrat text-4xl font-semibold text-white transition ease-in-out hover:text-gray-900">
          2024-es labdarúgó-Európa-bajnokság
        </h1>
        <hr className="my-8 h-px border-0 bg-[#C2BDBD]" />
        <div className="mx-auto mt-16 w-3/4 text-center">
          <h2>Welcome to Euro 2024!</h2>
          <p>
            Get ready for an unforgettable journey as the best football teams
            from across Europe come together to compete for the prestigious
            title of European Champions. Euro 2024 promises to be an
            exhilarating tournament filled with thrilling matches, spectacular
            goals, and unforgettable moments.
          </p>
          <p>
            Hosted in Germany, Euro 2024 will feature matches in some of the
            most iconic stadiums across the country, bringing fans closer to the
            action. Whether you’re cheering for your favorite team or simply
            enjoying the beautiful game, Euro 2024 is set to be a celebration of
            football at its finest.
          </p>
          <p>
            Stay tuned for the latest updates, match schedules, team profiles,
            and exclusive behind-the-scenes content. Join us as we countdown to
            kick-off and experience the passion, drama, and excitement of Euro
            2024!
          </p>
        </div>
        <div className="m-10 flex items-center justify-center gap-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
