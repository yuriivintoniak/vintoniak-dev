"use client"
import { useEffect, useRef } from "react"

type HamburgerProps = {
  open: boolean
  onToggleAction: () => void
}

export function Hamburger({ open, onToggleAction }: HamburgerProps) {
  const ref = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.setAttribute("aria-expanded", open ? "true" : "false")
    ref.current.setAttribute("data-state", open ? "opened" : "closed")
  }, [open])

  return (
    <button
      className="lg:hidden flex button-hamburger relative h-9 w-9 rounded-full p-2 text-text-accent [&>*]:w-8"
      ref={ref}
      onClick={onToggleAction}
      aria-controls="primary-navigation"
    >
      <svg className="hamburger" fill="none" viewBox="-10 -10 120 120" stroke="currentColor">
        <path
          className="line"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
    </button>
  )
}
