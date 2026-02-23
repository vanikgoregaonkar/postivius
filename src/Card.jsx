import React from "react"

const Card = ({ icon, title, desc }) => {
  return (
    <div className="bg-gradient-to-r from-[rgb(170,240,90)] to-[rgb(120,220,70)]font-['zen_dots'] text-lg md:text-xl p-5 rounded-3xl text-black font-semibold shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_18px_#94b9ff] hover:-translate-y-1 active:scale-95 cursor-pointer w-100 h-60">

      {/* ICON IMAGE
      <img
        src={icon}
        alt="icon"
        className="w-48 h-48 mb-4 object-contain  "
      /> */}

      <h2 className="text-4xl font-bold mb-3 font-['Zen_dots']">
        {title}
      </h2>

      <button className="border border-black rounded-xl px-8 py-5 text-sm
                         transition hover:bg-black hover:text-white active:scale-95">
        Learn More
      </button>
    </div>
  )
}

export default Card