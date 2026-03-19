export default function MarqueeRows() {
  const tech =
    "PYTHON • SQL • POWER BI • POWER AUTOMATE • POWER PLATFORM • JAVA • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • FIREBASE • AZURE • MONGODB • GIT • FIGMA • LINUX • "

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 marquee marquee-left">
      <div className="marquee-track text-sm font-rowdies tracking-wide text-black/40">
        <div className="marquee-chunk">{tech}</div>
        <div className="marquee-chunk">{tech}</div>
        <div className="marquee-chunk">{tech}</div>
        <div className="marquee-chunk">{tech}</div>
      </div>
    </div>
  )
}