import { NavLink } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import skull from "../assets/skull.png"

const base =
  "px-1 py-1 text-sm md:text-lg tracking-wide font-rowdies transition-colors duration-200 ease-out text-black/90 underline decoration-wavy decoration-2 underline-offset-3 decoration-transparent"

const linkHome = ({ isActive }) =>
  [base, isActive ? "opacity-40" : "opacity-100", "hover:text-blue-600 hover:decoration-blue-600"].join(" ")

const linkAbout = ({ isActive }) =>
  [base, isActive ? "opacity-40" : "opacity-100", "hover:text-yellow-500 hover:decoration-yellow-500"].join(" ")

const linkProjects = ({ isActive }) =>
  [base, isActive ? "opacity-40" : "opacity-100", "hover:text-green-600 hover:decoration-green-600"].join(" ")

const linkContact = ({ isActive }) =>
  [base, isActive ? "opacity-40" : "opacity-100", "hover:text-red-600 hover:decoration-red-600"].join(" ")

export default function Navbar() {
  return (
    <nav className="relative border-b border-neutral-200 px-4 py-4 md:px-10 md:py-6 md:pb-3">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="flex items-center gap-3 group self-start">
          <img
            src={skull}
            alt="Skull Logo"
            className="w-10 md:w-11 -rotate-35 transition-transform duration-300 group-hover:-rotate-25"
          />

          <div className="flex flex-col leading-tight font-rowdies text-xl md:text-2xl tracking-wide">
            <span
              className="
                text-black
                transition-all duration-300
                group-hover:bg-gradient-to-r
                group-hover:from-blue-600
                group-hover:via-green-500
                group-hover:to-red-600
                group-hover:bg-clip-text
                group-hover:text-transparent
              "
            >
              Justin
            </span>

            <span
              className="
                text-black
                transition-all duration-300
                group-hover:bg-gradient-to-r
                group-hover:from-yellow-500
                group-hover:via-blue-500
                group-hover:to-green-600
                group-hover:bg-clip-text
                group-hover:text-transparent
              "
            >
              Derenthal
            </span>
          </div>
        </NavLink>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-6">
          <NavLink to="/" className={linkHome}>HOME</NavLink>
          <NavLink to="/about" className={linkAbout}>ABOUT</NavLink>
          <NavLink to="/projects" className={linkProjects}>PROJECTS</NavLink>
          <NavLink to="/contact" className={linkContact}>CONTACT</NavLink>

          <a
            href="https://github.com/JderenthalCS"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-4 text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] transition-all duration-200"
          >
            <FaGithub size={24} className="md:w-[30px] md:h-[30px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/jderenthalcs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.7)] transition-all duration-200"
          >
            <FaLinkedin size={24} className="md:w-[30px] md:h-[30px]" />
          </a>

          <a
            href="mailto:JDerenthalCS@gmail.com"
            className="text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] transition-all duration-200"
          >
            <FaEnvelope size={24} className="md:w-[30px] md:h-[30px]" />
          </a>
        </div>
      </div>
    </nav>
  )
}