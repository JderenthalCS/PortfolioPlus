import { useEffect, useRef, useState } from "react"
import IconBox from "../components/IconBox"

// Project images
import openHandImg from "../assets/openhand.png"
import shareBinImg from "../assets/sharebin.png"
import automationImg from "../assets/comingsoon.jpg"
import payLensImg from "../assets/comingsoon.jpg"
import circuitImg from "../assets/circuitsandbox.png"
import manageengine from "../assets/manageengine.png"
import ingniteTikTok from "../assets/IgniteTikTok.png"
import igniteTikTok from "../assets/igniteTikTok.pdf"
import pintFinderImg from "../assets/PintFinder_Logo.png"


const featuredProjects = [
  {
  title: "OpenHand – Real-Time ASL Recognition System",
  image: openHandImg,
  github: "https://github.com/JderenthalCS/OpenHand",
  summary:
    "A real-time ASL recognition system that uses computer vision and machine learning to enable interactive, accessible sign language learning across web and mobile.",
  bullets: [
    "Built real-time gesture recognition using MediaPipe hand tracking and a RandomForestClassifier (~95% accuracy)",
    "Developed full-stack system with React frontend, FastAPI backend, and live inference via WebSockets",
    "Engineered feature extraction from 21-point hand landmarks for supervised ML classification",
  ],
  tools: [
   { name: "Python", slug: "python" },
    { name: "FastAPI", slug: "fastapi" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "MediaPipe", slug: "mediapipe" },
    { name: "React", slug: "react" },
    { name: "Firebase", slug: "firebase" },
    { name: "WebSockets", slug: "websockets" },
    { name: "OpenCV", slug: "opencv" },
    { name: "JavaScript", slug: "javascript" },
    { name: "HTML/CSS", slug: "htmlcss" },
    { name: "Vercel", slug: "vercel" },
  ],
},
{
  title: "Circuit Simulator – Event-Driven Electrical System",
  image: circuitImg,
  github: "https://github.com/JderenthalCS/CSC311-Circuit-Project",
  summary:
    "An event-driven circuit simulation engine modeling real electrical behavior, including voltage and current propagation across dynamically connected components.",
  bullets: [
    "Engineered object-oriented simulation system (20,000+ lines) modeling voltage/current flow with event-driven state propagation",
    "Designed relational data model and JSON serialization for persistent circuit states",
    "Built interactive JavaFX UI with draggable components and real-time system updates",
  ],
  tools: [
    { name: "Java", slug: "java" },
    { name: "JavaFX", slug: "javafx" },
    { name: "MySQL", slug: "mysql" },
    { name: "Azure Blob Storage", slug: "azure" },
    { name: "OOP Design", slug: "oop" },
  ],
},
{
  title: "PayLensNY – SUNY Payroll Data Pipeline & Visualization",
  image: payLensImg,
  github: "https://github.com/JderenthalCS/PayLensNY",
  summary:
    "An end-to-end data pipeline and analytics platform that processes public SUNY payroll data to generate insights on salary distribution, trends, and workforce structure.",
  bullets: [
    "Built ETL pipeline to ingest, clean, and normalize multi-source datasets using Python and SQL",
    "Designed data models and validation checks to ensure cross-source consistency and accuracy",
    "Developed Power BI dashboards to visualize salary distributions and extract actionable insights",
  ],
  tools: [
    { name: "Python", slug: "python" },
    { name: "Pandas", slug: "pandas" },
    { name: "NumPy", slug: "numpy" },
    { name: "SQL", slug: "sql" },
    { name: "Power BI", slug: "powerbi" },
    { name: "Azure", slug: "microsoftazure" },
  ],
}
]

const categorizedProjects = [
  {
    title: "Automation & Workflow",
    align: "left",
    defaultOpen: true,
    accent: "bg-[#FEE2C1]",
    trayAccent: "bg-[#FEE2C1]/80",
    projects: [
      {
        title: "Service Desk Automation & Notification System",
        image: ingniteTikTok,
        hideButton: true,
        summary:
          "An automation system designed to streamline service desk workflows by reducing manual follow-up, improving visibility, and standardizing operational processes.",
        bullets: [
          "Designed and implemented automated workflows using Power Automate to reduce manual ticket handling and response time",
          "Integrated service desk data with dashboards to monitor SLA compliance, ticket volume, and operational trends",
          "Improved communication and process consistency by automating notifications and workflow triggers",
        ],
        tools: [
          { name: "Power Automate", slug: "powerautomate" },
          { name: "Power BI", slug: "powerbi" },
          { name: "SQL", slug: "sql" },
        ],
      },
    ],
  },
  {
    title: "Data & Analytics",
    align: "right",
    defaultOpen: false,
    accent: "bg-[#D9F2E6]",
    trayAccent: "bg-[#D9F2E6]/80",
    projects: [
      {
        title: "PayLensNY – SUNY Payroll Data Analysis Platform",
        image: payLensImg,
        github: "https://github.com/JderenthalCS/PayLensNY",
        summary:
          "A data analytics platform that processes and visualizes SUNY payroll data to uncover salary trends, distribution patterns, and institutional insights.",
        bullets: [
          "Built ETL pipeline to clean and normalize multi-source public payroll datasets",
          "Developed analytical models to compare salary distributions across campuses, roles, and departments",
          "Created interactive Power BI dashboards to surface trends and support data-driven insights",
        ],
        tools: [
          { name: "Python", slug: "python" },
          { name: "Pandas", slug: "pandas" },
          { name: "NumPy", slug: "numpy" },
          { name: "SQL", slug: "sql" },
          { name: "Power BI", slug: "powerbi" },
        ],
      },
      {
  title: "(Independent Study) TikTok Share Predictions: Viral Content Prediction Model",
  image: ingniteTikTok,
  href: igniteTikTok,
  buttonLabel: "Read More",
  summary:
    "A machine learning model built to predict TikTok content virality using structured metadata and statistical feature engineering.",
  bullets: [
    "Trained Logistic Regression model on 19,000+ records with ~87.9% accuracy using cross-validation",
    "Performed feature engineering and standardization to improve model performance",
    "Analyzed content engagement patterns to identify key drivers of virality",
  ],
  tools: [
    { name: "Python", slug: "python" },
    { name: "Pandas", slug: "pandas" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "NumPy", slug: "numpy" },
  ],
},
{
  title: "Service HelpDesk - Ticket Analytics Dashboard",
  image: ingniteTikTok,
  hideButton: true,
  summary:
    "A data analytics project that transforms raw service desk ticket data into actionable insights, helping identify high-frequency issue categories and improve operational focus.",
  bullets: [
    "Collected, cleaned, and transformed real service desk data to create analysis-ready datasets",
    "Identified high-volume ticket categories to guide operational prioritization and resource allocation",
    "Developed interactive Power BI dashboards to visualize trends, category distribution, and service patterns",
  ],
  tools: [
    { name: "Python", slug: "python" },
    { name: "Pandas", slug: "pandas" },
    { name: "SQL", slug: "sql" },
    { name: "Power BI", slug: "powerbi" },
    { name: "Excel", slug: "excel"},
  
  ],
}
    ],
  },
  {
    title: "Software Applications",
    align: "left",
    defaultOpen: false,
    accent: "bg-[#E8E3FF]",
    trayAccent: "bg-[#E8E3FF]/80",
    projects: [
      {
  title: "Circuit Simulator – Event-Driven Electrical System",
  image: circuitImg,
  github: "https://github.com/JderenthalCS/CSC311-Circuit-Project",
  summary:
    "An event-driven circuit simulation engine modeling real electrical behavior, including voltage and current propagation across dynamically connected components.",
  bullets: [
    "Engineered object-oriented simulation system (20,000+ lines) modeling voltage/current flow with event-driven state propagation",
    "Designed relational data model and JSON serialization for persistent circuit states",
    "Built interactive JavaFX UI with draggable components and real-time system updates",
  ],
  tools: [
    { name: "Java", slug: "java" },
    { name: "JavaFX", slug: "javafx" },
    { name: "MySQL", slug: "mysql" },
    { name: "Azure Blob Storage", slug: "azure" },
    { name: "OOP Design", slug: "oop" },
  ],
},
      {
        title: "PintFinder – Location Discovery Platform",
        image: pintFinderImg,
        github: "https://github.com/JderenthalCS/PintFinder",
        summary:
          "A concept application designed to help users discover, rate, and track high-quality Guinness locations through a themed, user-focused interface.",
        bullets: [
          "Designed and implemented themed UI/UX focused on discovery and user engagement",
          "Integrated location-based data handling and rating concepts for real-world usability",
          "Structured application for scalability with future features like user profiles and reviews",
        ],
        tools: [
          { name: "Java", slug: "java" },
          { name: "JavaFX", slug: "javafx" },
          { name: "Firebase", slug: "firebase" },
        ],
      },
      {
  title: "OpenHand – Real-Time ASL Recognition System",
  image: openHandImg,
  github: "https://github.com/JderenthalCS/OpenHand",
  summary:
    "A real-time ASL recognition system that uses computer vision and machine learning to enable interactive, accessible sign language learning across web and mobile.",
  bullets: [
    "Built real-time gesture recognition using MediaPipe hand tracking and a RandomForestClassifier (~95% accuracy)",
    "Developed full-stack system with React frontend, FastAPI backend, and live inference via WebSockets",
    "Engineered feature extraction from 21-point hand landmarks for supervised ML classification",
  ],
  tools: [
    { name: "Python", slug: "python" },
    { name: "FastAPI", slug: "fastapi" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "MediaPipe", slug: "mediapipe" },
    { name: "React", slug: "react" },
    { name: "Firebase", slug: "firebase" },
    { name: "WebSockets", slug: "websockets" },
    { name: "OpenCV", slug: "opencv" },
    { name: "JavaScript", slug: "javascript" },
    { name: "HTML/CSS", slug: "htmlcss" },
    { name: "Vercel", slug: "vercel" },
  ],
},
    ],
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#e6f4ea] opacity-60" />

      <div
        className="pointer-events-none absolute inset-0 -z-10
        [background-image:linear-gradient(to_right,rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.15)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 px-10 py-6">
        <section className="mt-10">
          <div className="mb-8 flex justify-center">
            <h2 className="font-rowdies text-center text-5xl text-black/90">
              Featured Projects
            </h2>
          </div>

          <FeaturedProjectsScroller projects={featuredProjects} />
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-black" />
            <span className="font-rowdies text-sm uppercase tracking-[0.25em] text-black/60">
              Categorized Projects
            </span>
            <div className="h-[2px] flex-1 bg-black" />
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-black/70">
            I’ve grouped these projects by category to better represent the kind
            of work I enjoy building most, from workflow automation and data
            analysis to full software applications.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-7xl space-y-10">
          {categorizedProjects.map((section) => (
            <ProjectsAccordionSection key={section.title} section={section} />
          ))}
        </section>
      </div>
    </div>
  )
}

function FeaturedProjectsScroller({ projects }) {
  const scrollRef = useRef(null)
  const trackRef = useRef(null)

  const [thumb, setThumb] = useState({
    width: 120,
    left: 0,
  })

  const updateThumb = () => {
    const scrollEl = scrollRef.current
    const trackEl = trackRef.current
    if (!scrollEl || !trackEl) return

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth
    const trackWidth = trackEl.clientWidth

    if (maxScroll <= 0 || trackWidth <= 0) {
      setThumb({
        width: trackWidth,
        left: 0,
      })
      return
    }

    const visibleRatio = scrollEl.clientWidth / scrollEl.scrollWidth
    const thumbWidth = Math.max(90, trackWidth * visibleRatio)
    const maxThumbLeft = trackWidth - thumbWidth
    const scrollRatio = scrollEl.scrollLeft / maxScroll
    const thumbLeft = scrollRatio * maxThumbLeft

    setThumb({
      width: thumbWidth,
      left: thumbLeft,
    })
  }

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    updateThumb()

    scrollEl.addEventListener("scroll", updateThumb)
    window.addEventListener("resize", updateThumb)

    return () => {
      scrollEl.removeEventListener("scroll", updateThumb)
      window.removeEventListener("resize", updateThumb)
    }
  }, [])

  const handleTrackClick = (e) => {
    const scrollEl = scrollRef.current
    const trackEl = trackRef.current
    if (!scrollEl || !trackEl) return

    const rect = trackEl.getBoundingClientRect()
    const clickX = e.clientX - rect.left

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth
    const maxThumbLeft = trackEl.clientWidth - thumb.width

    const nextThumbLeft = Math.min(
      Math.max(0, clickX - thumb.width / 2),
      maxThumbLeft
    )

    const ratio = maxThumbLeft <= 0 ? 0 : nextThumbLeft / maxThumbLeft
    scrollEl.scrollTo({
      left: ratio * maxScroll,
      behavior: "smooth",
    })
  }

  const handleThumbMouseDown = (e) => {
    e.preventDefault()

    const scrollEl = scrollRef.current
    const trackEl = trackRef.current
    if (!scrollEl || !trackEl) return

    const startX = e.clientX
    const startLeft = thumb.left

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth
    const maxThumbLeft = trackEl.clientWidth - thumb.width

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX
      const nextThumbLeft = Math.min(
        Math.max(0, startLeft + deltaX),
        maxThumbLeft
      )

      const ratio = maxThumbLeft <= 0 ? 0 : nextThumbLeft / maxThumbLeft
      scrollEl.scrollLeft = ratio * maxScroll
    }

    const handleMouseUp = () => {
      document.body.style.userSelect = ""
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    document.body.style.userSelect = "none"
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-10 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div key={project.title} className="w-[860px] shrink-0">
            <ProjectCard project={project} featured />
          </div>
        ))}
      </div>

      <div className="px-10">
        <div
          ref={trackRef}
          onMouseDown={handleTrackClick}
          className="relative h-4 cursor-pointer rounded-full border-2 border-black bg-white/90 shadow-[2px_2px_0px_black]"
        >
          <div
            onMouseDown={handleThumbMouseDown}
            className="absolute top-0 h-full rounded-full border-2 border-black bg-[#22c55e] cursor-grab active:cursor-grabbing"
            style={{
              width: `${thumb.width}px`,
              left: `${thumb.left}px`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

function ProjectsAccordionSection({ section }) {
  const [open, setOpen] = useState(section.defaultOpen ?? false)

  const alignmentClass =
    section.align === "right"
      ? "ml-auto max-w-5xl"
      : "mr-auto max-w-5xl"

  return (
    <div className={alignmentClass}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`relative z-10 flex w-full items-center justify-between border-2 border-black px-5 py-4 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] ${section.accent}`}
      >
        <span className="font-rowdies text-2xl text-black">
          {section.title}
        </span>

        <span className="font-rowdies text-2xl text-black">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div
          className={`-mt-[2px] border-2 border-black p-5 shadow-[4px_4px_0px_black] ${section.trayAccent}`}
        >
          <div className="space-y-6">
            {section.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={[
        "grid overflow-hidden border-2 border-black bg-[#FEE2C1]",
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]",
        featured
          ? "h-[540px] grid-cols-[36%_64%]"
          : "min-h-[430px] grid-cols-[36%_64%]",
      ].join(" ")}
    >
      <div className="flex items-center justify-center border-r-2 border-black bg-black p-4">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain"
  />
</div>

      <div className="flex h-full flex-col justify-between p-5">
        <div>
          <div className="border-b border-black/25 pb-3">
            <h3 className="font-rowdies text-3xl text-black">{project.title}</h3>
          </div>

          <div className="pt-4 text-black/80">
            <p className="text-base leading-relaxed">{project.summary}</p>

            {!!project.bullets?.length && (
              <ul className="mt-3 list-disc pl-5 text-base leading-relaxed">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            <div className="mt-5">
              <div className="text-xs uppercase tracking-[0.2em] text-black/55">
                Tools
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <IconBox  key={tool.name} item={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {!project.hideButton && (project.href || project.github) && (
  <a
    href={project.href || project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 w-fit border-2 border-black bg-[#22c55e] px-4 py-2 text-xs font-rowdies uppercase tracking-wide text-black transition-all duration-200 hover:-translate-y-1 hover:bg-[#16a34a] hover:shadow-[3px_3px_0px_black] active:translate-y-[1px] active:shadow-none"
  >
    {project.buttonLabel || "GitHub"} →
  </a>
)}
      </div>
    </div>
  )
}
