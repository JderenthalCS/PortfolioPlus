import { useState } from "react"

function IconBox({ item }) {
  const [error, setError] = useState(false)

  return (
    <div
      className="flex h-12 min-w-[48px] items-center justify-center border-2 border-black bg-white px-2 transition-transform duration-200 hover:-translate-y-1"
      title={item.name}
    >
      {!error ? (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}`}
          alt={item.name}
          className="h-7 w-7"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-xs font-rowdies text-center text-black">
          {item.name}
        </span>
      )}
    </div>
  )
}

export default IconBox