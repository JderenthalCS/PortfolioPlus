import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#e6f4ea] opacity-60" />

      <div
        className="pointer-events-none absolute inset-0 -z-10
        [background-image:linear-gradient(to_right,rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.15)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 px-10 py-10 pb-12">
        {/* Top line / header */}
        
        <div className="flex items-end justify-between gap-6 pb-6">
          <div>
            <h1 className="font-rowdies text-5xl tracking-wide text-black/90">
              Contact
            </h1>
            <p className="mt-2 max-w-2xl text-black/60">
              <span className="italic">
                I’m always open to collaboration, new ideas, and opportunities to build meaningful systems.
              </span>
            </p>
          </div>
        </div>

        {/* One cohesive “contact sheet” */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: form */}
          <div className="lg:col-span-8">
            <div className="rounded-none border-2 border-black bg-[#FEE2C1] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]">
              <div className="flex items-center justify-between gap-6">
                <h2 className="font-rowdies text-2xl text-black/90">
                  Send a message
                </h2>
              </div>

              <form
                className="mt-6 grid grid-cols-1 gap-5"
                onSubmit={async (e) => {
                  e.preventDefault()
                  const formEl = e.currentTarget

                  const form = new FormData(formEl)

                  const payload = {
                    from_name: form.get("name")?.toString() || "",
                    reply_to: form.get("email")?.toString() || "",
                    subject: form.get("subject")?.toString() || "Hello",
                    message: form.get("message")?.toString() || "",
                  }

                  try {
                    await emailjs.send(
                      import.meta.env.VITE_EMAILJS_SERVICE_ID,
                      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                      payload,
                      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    )

                    formEl.reset()
                    alert("Message sent successfully.")
                  } catch (error) {
                    console.error(error)
                    alert("Something went wrong.")
                  }
                }}
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" placeholder="[YOUR_NAME]" />
                  <Field label="Email" name="email" type="email" placeholder="[YOUR_NAME@EMAIL.COM]" />
                </div>

                <Field label="Subject" name="subject" placeholder="[What’s this about?]" />
                <Textarea label="Message" name="message" placeholder="[Write your message here...]" />

                <div className="flex items-center justify-between gap-6 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 border-2 border-black bg-[#22c55e] text-black font-rowdies tracking-wide rounded-none
transition-all duration-200
hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]
hover:bg-[#16a34a]
active:translate-y-[1px] active:shadow-none"
                  >
                    Send
                  </button>

                  <div className="text-sm text-black/55">
                    <span className="italic">Thank you for reaching out!</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4">
            <div className="rounded-none border-2 border-black bg-[#FEE2C1] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]">
              <div className="flex items-center justify-between">
                <h3 className="font-rowdies text-xl text-black/90">
                  Direct links
                </h3>

                <div className="flex items-center gap-2 font-rowdies italic text-red-500">
                  <span className="text-xl animate-bounce">↓</span>
                  <span>Click these!</span>
                  <span className="text-xl animate-bounce">↓</span>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-black/75">
                <LineItem label="Email" value="JDerenthalCS@gmail.com" href="mailto:JDerenthalCS@gmail.com" />
                <LineItem label="LinkedIn" value="linkedin.com/in/JDerenthalCS" href="https://linkedin.com/in/JDerenthalCS" />
                <LineItem label="GitHub" value="github.com/JDerenthalCS" href="https://github.com/JDerenthalCS" />
                <LineItem label="Location" value="[Long Island / Remote]" />
                <LineItem label="Status" value="[Open to roles / Freelance / etc]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* --- small pieces --- */

function IconBtn({ href, label, glow, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={[
        "inline-flex items-center justify-center w-9 h-9",
        "border border-black/15 bg-white/40 text-black/75",
        "rounded-none transition hover:bg-white hover:text-black",
        glow,
      ].join(" ")}
    >
      {children}
    </a>
  )
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs tracking-widest uppercase text-black/60">
        {label}
      </div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full resize-none rounded-none border-2 border-black bg-white px-4 py-3 text-black/80 outline-none transition focus:border-black/40 focus:bg-white"
      />
    </label>
  )
}

function Textarea({ label, name, placeholder }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs tracking-widest uppercase text-black/60">
        {label}
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={7}
        className="w-full resize-none rounded-none border-2 border-black bg-white px-4 py-3 text-black/80 outline-none transition focus:border-black/40 focus:bg-white"
      />
    </label>
  )
}

function LineItem({ label, value, href }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-black/20 pb-3">
      <div className="text-xs tracking-widest uppercase text-black/55">
        {label}
      </div>

      <div className="text-sm text-black/80 text-right">
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="italic underline underline-offset-4 decoration-black hover:opacity-70"
          >
            {value}
          </a>
        ) : (
          <span className="italic">{value}</span>
        )}
      </div>
    </div>
  )
}