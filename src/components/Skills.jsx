import { CodeIcon, CogIcon, CloudIcon, TrophyIcon, CertificateIcon, StarIcon } from './Icons'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "code",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: "cog",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "cloud",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 82 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "star",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Agile", level: 90 }
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary font-medium">{skill.name}</span>
        <span className="text-text-secondary text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-surface-elevated rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-background border border-border-color rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center">
                  {category.icon === 'code' && <CodeIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                  {category.icon === 'cog' && <CogIcon className="w-10 h-10 text-green-600 dark:text-green-400" />}
                  {category.icon === 'cloud' && <CloudIcon className="w-10 h-10 text-purple-600 dark:text-purple-400" />}
                  {category.icon === 'star' && <StarIcon className="w-10 h-10 text-orange-600 dark:text-orange-400" />}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-text-primary mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border border-border-color rounded-lg p-6 hover:bg-surface-elevated transition-colors">
              <div className="mb-3 flex justify-center">
                <TrophyIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">AWS Certified</h4>
              <p className="text-text-secondary text-sm">Solutions Architect Associate</p>
            </div>
            <div className="bg-background border border-border-color rounded-lg p-6 hover:bg-surface-elevated transition-colors">
              <div className="mb-3 flex justify-center">
                <CertificateIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Google Cloud</h4>
              <p className="text-text-secondary text-sm">Professional Developer</p>
            </div>
            <div className="bg-background border border-border-color rounded-lg p-6 hover:bg-surface-elevated transition-colors">
              <div className="mb-3 flex justify-center">
                <StarIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Open Source</h4>
              <p className="text-text-secondary text-sm">500+ GitHub contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills