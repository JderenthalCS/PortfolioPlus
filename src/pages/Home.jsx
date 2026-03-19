import MarqueeRows from "../components/MarqueeRows"
import headshot from "../assets/headshot.png"
import resumePdf from "../assets/Justin Derenthal - Resume.pdf"
import IconBox from "../components/IconBox"

export default function Home() {
  return (
   <div className="relative min-h-screen pb-32">
  {/* Background grid (ONLY for page content) */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-[#e6f4ea] opacity-60" />

  <div className="pointer-events-none absolute inset-0 -z-10 
    [background-image:linear-gradient(to_right,rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.15)_1px,transparent_1px)]
    [background-size:40px_40px]" 
  />
  

  {/* Page content */}
  <div className="relative z-10 px-10 py-0">
      {/* Marquee */}
      <div className="mb-12 border-b border-neutral-200">
        <MarqueeRows />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12">
          {/* Left side */}
          <div className="xl:col-span-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="weave">
                  <div className="weave-inner"></div>
                  <img src={headshot} alt="Justin Derenthal" />
                </div>
              </div>

              <div className="pt-2">
                <h1 className="text-5xl font-rowdies text-black/90">
                  Justin Derenthal
                </h1>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
                  I’m a Software Engineer focused on data and automation,
                  building systems that eliminate inefficiencies, reduce manual
                  work, and turn complex problems into scalable, real-world
                  solutions that actually get used.
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="xl:col-span-5">
            <div className="border-2 border-black bg-[#FEE2C1] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]">
              <h2 className="font-rowdies text-2xl text-black">Currently Focused On</h2>

              <div className="mt-4 space-y-3 text-black/75">
                <p>• Power BI (PL-300) </p>
                <p>• PayLensNY - SUNY Payroll Data Pipeline</p>
                <p>• Workflow Automation Systems (Help Desk & Internal Tools)</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-black/65">
                  I’m currently focused on strengthening my skills across data, automation, and software engineering.
                </p>
          
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto mt-20 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <StackGroup
            title="Languages"
            items={[
              { name: "Python", slug: "python" },
              { name: "Java", slug: "java" },
              { name: "SQL", slug: "SQL" },
              { name: "JavaScript", slug: "javascript" },
              { name: "TypeScript", slug: "typescript" },
              { name: "Kotlin", slug: "kotlin" }
            ]}
          />

          <StackGroup
            title="Frontend"
            items={[
              { name: "React", slug: "react" },
              { name: "HTML", slug: "html5" },
              { name: "CSS", slug: "css3" },
              { name: "Tailwind", slug: "tailwindcss" },
              { name: "JavaFX", slug: "JavaFX" }
            ]}
          />

          <StackGroup
            title="Backend & Data"
            items={[
              { name: "FastAPI", slug: "fastapi" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "Firebase", slug: "firebase" },
              { name: "MongoDB", slug: "mongodb" },
              { name: "Azure SQL", slug: "microsoftazure" },
              { name: "Power BI", slug: "powerbi" },
              { name: "NumPy", slug: "numpy" },
              { name: "Pandas", slug: "pandas" },
              { name: "SciKit-Learn", slug: "scikitlearn" }
            ]}
          />
        </div>
      </section>

      {/* Resume */}
      <div className="mt-16 flex justify-center">
        <section className="w-full max-w-5xl">
          <div className="rounded-none border-2 border-black bg-[#FEE2C1] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]">
            <div className="flex items-center justify-between">
              <h2 className="font-rowdies text-2xl text-black">Resume</h2>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-rowdies text-sm uppercase tracking-wide text-black/70 underline underline-offset-4 hover:text-black"
              >
                Open PDF
              </a>
            </div>

            <div className="mt-6 overflow-hidden border-2 border-black bg-white">
              <iframe
                src={resumePdf}
                title="Justin Derenthal Resume"
                className="h-[900px] w-full"
              />
            </div>

            <a
            className="mt-4 inline-block text-sm text-black/60 hover:text-black italic"
            >
              Last updated: March 2026
            </a>
          </div>
        </section>
      </div>
    </div>
      </div>

  )
}

function StackGroup({ title, items }) {
  return (
    <div
      className="border-2 border-black bg-[#FEE2C1] p-6 rounded-none
      transition-all duration-200
      hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]"
    >
      <h3 className="font-rowdies text-xl uppercase tracking-wide text-black">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-4">
        {items.map((item) => (
          <IconBox key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}



function QuickLink({
  href,
  color,
  textColor,
  label,
  arrowHeight = "h-16",
  arrowBoxHeight = "h-[90px]",
  className = "",
  labelClass = ""
}) {
  return (
    <a
      href={href}
      className={`group flex w-full flex-col items-center text-center ${className}`}
    >
      <div className={`flex ${arrowBoxHeight} items-start justify-center`}>
        <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
          <div className={`h-4 w-4 rotate-45 border-l-4 border-t-4 ${color.replace("bg-", "border-")}`} />
          <div className={`w-1 ${arrowHeight} ${color} -mt-1`} />
        </div>
      </div>

      <span
        className={`mt-1 w-[120px] text-center text-base leading-tight font-rowdies ${textColor} ${labelClass}`}
      >
        {label}
      </span>
    </a>
  )
}