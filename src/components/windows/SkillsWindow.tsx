const skills = {
  "Full Stack Development": ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL"],
  "AI Research": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "PyTorch", "TensorFlow"],
  "Data Science": ["Pandas", "NumPy", "Scikit-learn", "Jupyter", "Data Visualization", "Statistics"],
}

export const SkillsWindow = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-black font-mono mb-4">{"> TECHNICAL SKILLS"}</h2>
    <div className="grid md:grid-cols-3 gap-4">
      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
          className="bg-white border-2 border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white]"
        >
          <div className="bg-gray-300 border-b border-gray-400 p-2">
            <h3 className="text-black font-mono text-sm font-bold">{category.toUpperCase()}</h3>
          </div>
          <div className="p-3">
            <div className="space-y-1">
              {skillList.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="text-black font-mono text-xs">{">"}</span>
                  <span className="text-black font-mono text-xs">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
