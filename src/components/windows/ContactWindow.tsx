import { Github, Linkedin, ExternalLink, MessageSquare, Facebook, Instagram } from "lucide-react"

export const ContactWindow = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-black font-mono mb-4">
      {"> CONTACT INFORMATION"}
    </h2>

    <div className="bg-white border-2 border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] p-4">
      <p className="text-black font-mono text-sm mb-4">
        {"> Ready to collaborate? Let's connect!"}
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/hoanghero125"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <Github className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">GitHub</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dpbhoang/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <Linkedin className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">LinkedIn</span>
        </a>
        {/* Email */}
        <a
          href="mailto:dekuran.business@gmail.com"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <ExternalLink className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">Email</span>
        </a>
        {/* Discord */}
        <a
          href="https://discord.com/users/dekuranvn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <MessageSquare className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">Discord</span>
        </a>
        {/* Facebook */}
        <a
          href="https://facebook.com/dekuranvn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <Facebook className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">Facebook</span>
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com/dekuranvn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] hover:bg-gray-300 active:shadow-[inset_-1px_-1px_0px_white,inset_1px_1px_0px_gray] p-3 flex items-center justify-center gap-2 no-underline rounded"
        >
          <Instagram className="w-4 h-4 text-black" />
          <span className="text-black font-mono text-sm">Instagram</span>
        </a>
      </div>
    </div>

    <div className="bg-white border-2 border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] p-4">
      <p className="text-black font-mono text-sm">
        {"> System Status: Online"}
        <br />
        {"> Availability: Open to opportunities"}
        <br />
        {"> Response Time: Usually within 24 hours"}
        <br />
        <span className="animate-pulse">{"> _"}</span>
      </p>
    </div>
  </div>
);