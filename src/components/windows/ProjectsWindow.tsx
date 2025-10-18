export const ProjectsWindow = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-black font-mono mb-4">{"> PROJECT DIRECTORY"}</h2>
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="bg-white border-2 border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] p-8 text-center max-w-md">
        <div className="bg-gray-300 border-b border-gray-400 p-2 mb-4">
          <h3 className="text-black font-mono text-sm font-bold">PROJECTS.DIR</h3>
        </div>
        <div className="space-y-4">
          <p className="text-black font-mono text-lg font-bold">COMING SOON...</p>
          <p className="text-black font-mono text-xs">
            {"> Loading project files..."}
            <br />
            {"> Compiling portfolio data..."}
            <br />
            {"> Initializing showcase..."}
          </p>
          <div className="flex justify-center">
            <div className="bg-gray-200 border border-gray-400 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray] px-4 py-2">
              <span className="text-black font-mono text-xs animate-pulse">{"█"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
