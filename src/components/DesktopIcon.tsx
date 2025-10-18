"use client"

import type React from "react"

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2 p-3 hover:[background-color:#080484] transition-colors rounded w-[100px]"
  >
    <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
    <span className="text-white text-xs text-center font-mono drop-shadow-lg">{label}</span>
  </button>
)

