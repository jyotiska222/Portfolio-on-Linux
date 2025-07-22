import { useState } from 'react'
import { 
  ShoppingCartIcon, 
  ClipboardIcon, 
  CloudIcon, 
  PlugIcon, 
  RobotIcon, 
  CreditCardIcon,
  TargetIcon,
  GlobeIcon,
  PaletteIcon,
  CogIcon,
  SmartphoneIcon,
  BrainIcon,
  SearchIcon,
  FolderIcon,
  ExternalLinkIcon,
  RocketIcon,
  LockIcon,
  StarIcon,
  GitHubIcon
} from './Icons'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      icon: "shopping-cart",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      difficulty: "Advanced",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      icon: "clipboard",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      difficulty: "Intermediate",
      duration: "2 months"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.",
      icon: "cloud",
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      difficulty: "Intermediate",
      duration: "3 weeks"
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and request routing capabilities.",
      icon: "plug",
      technologies: ["Node.js", "Redis", "JWT", "Docker", "Kubernetes"],
      category: "backend",
      github: "https://github.com",
      live: null,
      featured: true,
      difficulty: "Advanced",
      duration: "6 weeks"
    },
    {
      id: 5,
      title: "Machine Learning Pipeline",
      description: "Automated ML pipeline for data processing, model training, and deployment with monitoring dashboard.",
      icon: "robot",
      technologies: ["Python", "TensorFlow", "Apache Airflow", "MLflow", "AWS"],
      category: "ml",
      github: "https://github.com",
      live: null,
      featured: false,
      difficulty: "Advanced",
      duration: "4 months"
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      icon: "credit-card",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Plaid"],
      category: "mobile",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      difficulty: "Advanced",
      duration: "5 months"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: 'target' },
    { id: 'fullstack', label: 'Full Stack', icon: 'globe' },
    { id: 'frontend', label: 'Frontend', icon: 'palette' },
    { id: 'backend', label: 'Backend', icon: 'cog' },
    { id: 'mobile', label: 'Mobile', icon: 'smartphone' },
    { id: 'ml', label: 'ML/AI', icon: 'brain' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500'
      case 'Intermediate': return 'from-yellow-500 to-orange-500'
      case 'Advanced': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  const ProjectCard = ({ project }) => (
    <div className="group relative">
      {/* Card Background with Border */}
      <div className="absolute -inset-0.5 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500 blur-sm group-hover:blur"></div>

      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Project Header */}
        <div className="h-56 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-150"></div>
            <div className="absolute bottom-8 left-12 w-6 h-6 bg-pink-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Project Icon */}
          <div className="group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-lg flex justify-center">
            {project.icon === 'shopping-cart' && <ShoppingCartIcon className="w-20 h-20 text-blue-600 dark:text-blue-400" />}
            {project.icon === 'clipboard' && <ClipboardIcon className="w-20 h-20 text-green-600 dark:text-green-400" />}
            {project.icon === 'cloud' && <CloudIcon className="w-20 h-20 text-purple-600 dark:text-purple-400" />}
            {project.icon === 'plug' && <PlugIcon className="w-20 h-20 text-orange-600 dark:text-orange-400" />}
            {project.icon === 'robot' && <RobotIcon className="w-20 h-20 text-red-600 dark:text-red-400" />}
            {project.icon === 'credit-card' && <CreditCardIcon className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />}
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center gap-1">
              <StarIcon className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Difficulty Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1.5 text-white rounded-full text-xs font-semibold shadow-lg ${
            project.difficulty === 'Beginner' ? 'bg-green-500' :
            project.difficulty === 'Intermediate' ? 'bg-yellow-500' :
            project.difficulty === 'Advanced' ? 'bg-red-500' : 'bg-gray-500'
          }`}>
            {project.difficulty}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs font-medium flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.duration}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer" title={project.technologies.slice(3).join(', ')}>
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2 group/btn"
            >
              <FolderIcon className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              View Code
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
              >
                <RocketIcon className="w-4 h-4 group-hover/btn:scale-125 transition-transform duration-200" />
                Live Demo
              </a>
            ) : (
              <div className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700">
                <LockIcon className="w-4 h-4" />
                Private
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full mb-6">
            <FolderIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of my recent work showcasing diverse technologies and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-lg ${activeFilter === filter.id
                ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex">
                {filter.icon === 'target' && <TargetIcon className="w-5 h-5" />}
                {filter.icon === 'globe' && <GlobeIcon className="w-5 h-5" />}
                {filter.icon === 'palette' && <PaletteIcon className="w-5 h-5" />}
                {filter.icon === 'cog' && <CogIcon className="w-5 h-5" />}
                {filter.icon === 'smartphone' && <SmartphoneIcon className="w-5 h-5" />}
                {filter.icon === 'brain' && <BrainIcon className="w-5 h-5" />}
              </span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="mb-6 animate-bounce flex justify-center">
              <SearchIcon className="w-20 h-20 text-gray-400 dark:text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Try selecting a different category to explore more projects</p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-600 dark:bg-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 max-w-2xl mx-auto">
              <div className="mb-6 flex justify-center">
                <GitHubIcon className="w-16 h-16 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore More on GitHub
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Dive deeper into my development journey with 50+ repositories, open-source contributions, and collaborative projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold flex items-center gap-2">
                  <StarIcon className="w-4 h-4" />
                  50+ Stars
                </div>
                <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  25+ Forks
                </div>
                <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Active Contributor
                </div>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <RocketIcon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Visit GitHub Profile
                <ExternalLinkIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Projects