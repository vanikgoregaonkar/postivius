import React from "react"

const TC = ({ name, role, review }) => {
  return (
    <div className="bg-white text-lg md:text-xl p-7 rounded-3xl text-black font-semibold shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_18px_#94b9ff] hover:-translate-y-1 active:scale-95 cursor-pointer w-120 h-60
">
      
      {/* Quote */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        “{review}”
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold text-black">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TC