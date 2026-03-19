export default function WaveFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="wave-footer" />

      <div className="flex gap-6 px-10 py-0 text-sm text-black/60">
        <a
          className="hover:text-black"
          href="https://github.com/JderenthalCS"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:text-black"
          href="https://www.linkedin.com/in/jderenthalcs/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span className="ml-auto">© {new Date().getFullYear()} Justin Derenthal</span>
      </div>
    </footer>
  )
}