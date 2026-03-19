import abouttop from "../assets/about-top.jpg"

export default function About() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#e6f4ea] opacity-60" />

      <div
        className="pointer-events-none absolute inset-0 -z-10
        [background-image:linear-gradient(to_right,rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.15)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 px-10 py-16 flex flex-col items-center text-center">
        
        {/* Header */}
        <h1 className="font-rowdies text-5xl text-black mb-12">
          A little about me... 
        </h1>

        {/* Top Card */}
        <div className="w-full max-w-5xl border-2 border-black bg-[#FEE2C1] p-6 shadow-[4px_4px_0px_black] flex flex-col items-center gap-6">
          
          {/* Image */}
          <div className="w-48 h-48 border-2 border-black overflow-hidden bg-black">
            <img
              src={abouttop}
              alt="Justin Derenthal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Intro */}
          <p className="text-black/80 text-lg leading-relaxed max-w-2xl">
            I’m a Software Engineer focused on building data-driven systems and automation 
            that solve real-world operational problems. My work sits at the intersection 
            of software engineering, data, and workflow automation, where inefficiencies 
            become scalable systems.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-5xl mt-16">
          <div className="h-[2px] flex-1 bg-black" />
          <span className="font-rowdies text-sm uppercase tracking-[0.25em] text-black/60">
            What I Do
          </span>
          <div className="h-[2px] flex-1 bg-black" />
        </div>

        {/* Main Content */}
        <div className="mt-10 w-full max-w-4xl space-y-6 text-black/80 text-lg leading-relaxed">
          <p>
            I design and build tools that reduce manual effort, improve visibility, 
            and help teams make better decisions. Whether it’s full-stack applications, 
            data pipelines, or automation systems, I focus on real impact.
          </p>

          <p>
            Through help desk operations and AI consulting, I’ve worked directly with 
            production systems—building automation workflows, analyzing datasets, 
            and improving internal processes. This shapes how I approach engineering.
          </p>

          <p>
            I’m currently focused on software engineering, data engineering, and automation 
            roles where I can continue building scalable systems and working with real-world data.
          </p>

          <p>
            Outside of development, I enjoy optimizing workflows, exploring new technologies, 
            and building projects that push my skills forward.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-5xl mt-16">
          <div className="h-[2px] flex-1 bg-black" />
          <span className="font-rowdies text-sm uppercase tracking-[0.25em] text-black/60">
            Quick Facts
          </span>
          <div className="h-[2px] flex-1 bg-black" />
        </div>

        {/* Facts */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          
          {[
            { label: "Location", value: "Long Island, NY" },
            { label: "Education", value: "BS Computer Science (May 2026)" },
            { 
  label: "Experience", 
  value: (
    <>
      AI Consultant <br />
      Help Desk Tech <br />
      General Manager
    </>
  ) 
},
            { label: "Focus", value: (
             <>
             Software Engineering <br/>
             Data Engineering <br/>
             Automation
             </> 
            )
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_black] text-center"
            >
              <p className="text-xs uppercase tracking-wider text-black/60">
                {item.label}
              </p>
              <p className="font-rowdies text-black mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}