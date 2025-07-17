import * as React from "react"

export function Avatar({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt={alt || "User"}
      className={`rounded-full w-8 h-8 object-cover ${className}`}
    />
  )
}
