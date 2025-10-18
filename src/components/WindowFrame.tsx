"use client"

import type React from "react"
import { X } from "lucide-react"

interface WindowFrameProps {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
  onClose: () => void
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ title, children, icon, onClose }) => (
  <div className="fixed inset-4 bg-gray-200 border-2 border-gray-400 shadow-lg z-50 flex flex-col max-h-[calc(100vh-2rem)] overflow-hidden window-enter">
    {/* Title Bar */}
    <div className="[background-color:#080484] p-2 flex items-center justify-between border-b border-gray-400">
    <div className="flex items-center gap-2 text-white font-mono text-sm">
        <span className="text-lg">{icon}</span>
        {title}
      </div>
      <div>
      <button onClick={onClose}
      className="group w-6 h-6 bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:[background-color:#d40000] active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] flex items-center justify-center transition-colors duration-150">
  <X
    className="w-3 h-3 text-black group-hover:text-white transition-colors duration-150"
    strokeWidth={3}
  />
</button>

      </div>
    </div>

    {/* Window Content */}
    <div className="flex-1 overflow-auto p-4 bg-gray-200">{children}</div>
  </div>
)
