import { useState } from "react"

const Ac = ({ number, title, content }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-[40px] border border-black mb-6 overflow-hidden top-40 left-50 flex flex-col 
      ${open ? "bg-[rgb(170,240,90)]" : "bg-gray-200"}`}
    >
      {/* HEADER */}
      <div
        className="flex justify-between items-center px-10 py-8 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-6">
          <span className="text-5xl font-bold">{number}</span>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>

        {/* PLUS / MINUS */}
        <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-2xl">
          {open ? "−" : "+"}
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`px-10 transition-all duration-500 ease-in-out
        ${open ? "max-h-40 py-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-black mb-4"></div>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  )
}

export default Ac