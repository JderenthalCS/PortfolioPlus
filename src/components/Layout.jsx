import WaveFooter from "./WaveFooter"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-neutral-900">
      {children}
      <WaveFooter />
    </div>
  )
}