import { NavLink } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import skull from "../assets/skull.png"

const base =
  "px-2 py-2 text-lg tracking-wide font-rowdies transition-colors duration-200 ease-out text-black/90 underline decoration-wavy decoration-2 underline-offset-3 decoration-transparent"

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
    <nav className="flex items-center justify-between py-6 px-10 pb-3 border-b border-neutral-200 relative">

  {/* Skull*/}
      <NavLink to="/" className="flex items-center gap-3 group">

  <img
    src={skull}
    alt="Skull Logo"
    className="w-11 -rotate-35 transition-transform duration-300 group-hover:-rotate-25"
  />

{/* Justin Derenthal*/}
  <div className="flex flex-col leading-tight font-rowdies text-2xl tracking-wide">
    <span className="
      text-black
      transition-all duration-300
      group-hover:bg-gradient-to-r 
      group-hover:from-blue-600 
      group-hover:via-green-500 
      group-hover:to-red-600
      group-hover:bg-clip-text 
      group-hover:text-transparent
    ">
      Justin
    </span>

    <span className="
      text-black
      transition-all duration-300
      group-hover:bg-gradient-to-r 
      group-hover:from-yellow-500 
      group-hover:via-blue-500 
      group-hover:to-green-600
      group-hover:bg-clip-text 
      group-hover:text-transparent
    ">
      Derenthal
    </span>
  </div>

</NavLink>
      {/* Right Side Links */}
      <div className="flex items-center gap-6">
        <NavLink to="/" className={linkHome}>HOME</NavLink>
        <NavLink to="/about" className={linkAbout}>ABOUT</NavLink>
        <NavLink to="/projects" className={linkProjects}>PROJECTS</NavLink>
        <NavLink to="/contact" className={linkContact}>CONTACT</NavLink>

        <a
          href="https://github.com/JderenthalCS"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] transition-all duration-200"
        >
          <FaGithub size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/jderenthalcs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.7)] transition-all duration-200"
        >
          <FaLinkedin size={30} />
        </a>
        <a
  href="mailto:JDerenthalCS@gmail.com"
  className="text-black/80 hover:text-black hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] transition-all duration-200"
>
  <FaEnvelope size={30} />
</a>
      </div>

    </nav>
  )
}