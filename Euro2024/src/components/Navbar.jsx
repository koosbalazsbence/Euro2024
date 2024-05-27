import React from "react"

const Navbar = () => {
  return (
    <>
      <div className="font-montserrat mb-8 mt-4">
        <ul className="flex justify-center items-center gap-6 text-xl">
            <li><a href=""><img src="../../assets/euro-2024-logo.png" alt="" title="" className="h-12 w-12 no-underline" /></a></li>
            <li><a href="" className="hover:underline">Groups</a></li>
            <li><a href="" className="hover:underline">Teams</a></li>
            <li><a href="" className="hover:underline">Events</a></li>
            <li><a href="" className="hover:underline">Hungary</a></li>
            {/* TRICOLOR */}
        </ul>
      </div>
    </>
  )
}

export default Navbar
