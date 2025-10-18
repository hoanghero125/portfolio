"use client"

import { useState } from "react"
import Image from "next/image";
import { DesktopIcon } from "../components/DesktopIcon"
import { WindowFrame } from "../components/WindowFrame"
import { AboutWindow } from "../components/windows/AboutWindow"
import { SkillsWindow } from "../components/windows/SkillsWindow"
import { ProjectsWindow } from "../components/windows/ProjectsWindow"
import { ContactWindow } from "../components/windows/ContactWindow"
import { HeartIcon } from "@/components/icons/HeartIcon";

type WindowType = "about" | "skills" | "projects" | "contact" | null

export default function Portfolio() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null)
  const openWindow = (windowType: WindowType) => {
    setActiveWindow(windowType)
  }
  const closeWindow = () => {
    setActiveWindow(null)
  }
  return (
    <div className="min-h-screen bg-teal-600 font-mono relative">   
      {!activeWindow && (
        <div className="container mx-auto px-8 py-8 min-h-screen flex flex-col">

          {/* Header Section */}
          <div className="text-center mb-8 bg-gray-200 border-2 border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] p-8">
            <pre className="text-xs md:text-sm [color:#102E50] mb-4 overflow-x-auto font-mono font-bold [transform:scaleX(1.5)] inline-block">
              {`
██████╗ ███████╗██╗  ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔════╝██║ ██╔╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║  ██║█████╗  █████╔╝     ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║  ██║██╔══╝  ██╔═██╗     ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██████╔╝███████╗██║  ██╗    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
            </pre>
          </div>
        
          {/* Desktop Icons */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <DesktopIcon
                icon={<Image src="/img/icons/notepad.png" alt="Notepad icon" width={100} height={100} priority />}
                label="about.txt"
                onClick={() => openWindow("about")}
              />
              <DesktopIcon
                icon={<Image src="/img/icons/data.png" alt="Data icon" width={100} height={100} priority />}
                label="skills.dat"
                onClick={() => openWindow("skills")}
              />
              <DesktopIcon
                icon={<Image src="/img/icons/folder.png" alt="Folder icon" width={100} height={100} priority />}
                label="projects.dir"
                onClick={() => openWindow("projects")}
              />
              <DesktopIcon
                icon={<Image src="/img/icons/contact.png" alt="Contact icon" width={100} height={100} priority />}
                label="contact.exe"
                onClick={() => openWindow("contact")}
              />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 bg-gray-300 border-2 border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] p-4 text-center">
  <p className="font-normal text-sm">
    © {new Date().getFullYear()} / Designed &amp; Developed with{" "}
    <HeartIcon className="inline mx-1" width={20} height={20}/>
    {" "}by{" "}
    <a
      className="[font-family:var(--font-dek)] [color:#102E50] text-[22px] align-middle transition-all duration-300"
      href="https://github.com/hoanghero125"
      target="_blank"
      rel="noopener noreferrer" 
    >
      Dek
    </a>
  </p>
</footer>
        </div>
      )}

      {activeWindow === "about" && (
        <WindowFrame
          title="about.txt - Notepad"
          icon={<Image src="/img/icons/notepad.png" alt="Notepad icon" width={24} height={24} priority />}
          onClose={closeWindow}
        >
          <AboutWindow />
        </WindowFrame>
      )}

      {activeWindow === "skills" && (
        <WindowFrame
          title="skills.dat - Data Viewer"
          icon={<Image src="/img/icons/data.png" alt="Data icon" width={24} height={24} priority />}
          onClose={closeWindow}
        >
          <SkillsWindow />
        </WindowFrame>
      )}

      {activeWindow === "projects" && (
        <WindowFrame
          title="projects.dir - File Manager"
          icon={<Image src="/img/icons/folder.png" alt="Folder icon" width={24} height={24} priority />}
          onClose={closeWindow}
        >
          <ProjectsWindow />
        </WindowFrame>
      )}

      {activeWindow === "contact" && (
        <WindowFrame
          title="contact.exe - Communication Center"
          icon={<Image src="/img/icons/contact.png" alt="Contact icon" width={24} height={24} priority />}
          onClose={closeWindow}
        >
          <ContactWindow />
        </WindowFrame>
      )}
    </div>
  )
}
