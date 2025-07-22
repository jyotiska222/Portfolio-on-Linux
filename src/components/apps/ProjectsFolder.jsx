import React, { useState } from 'react';
import { FaFolder, FaExternalLinkAlt, FaGithub, FaEye, FaTerminal, FaServer, FaCode } from 'react-icons/fa';

const ProjectsFolder = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ecommerce-platform',
      description: 'Full-stack e-commerce solution with React microservices architecture',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Stripe'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      icon: FaServer,
      status: 'PRODUCTION',
      category: 'web-dev',
      size: '2.1MB',
      lastModified: '2025-01-15'
    },
    {
      id: 2,
      title: 'task-manager',
      description: 'Real-time collaborative task management with WebSocket integration',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
      demoUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/username/taskapp',
      icon: FaCode,
      status: 'ACTIVE',
      category: 'productivity',
      size: '1.8MB',
      lastModified: '2025-01-10'
    },
    {
      id: 3,
      title: 'weather-dashboard',
      description: 'Responsive weather dashboard with geolocation and API integration',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      demoUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com/username/weather',
      icon: FaTerminal,
      status: 'STABLE',
      category: 'web-dev',
      size: '856KB',
      lastModified: '2024-12-28'
    },
    {
      id: 4,
      title: 'linux-portfolio',
      description: 'Interactive Linux desktop environment portfolio with React',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: 'https://github.com/username/portfolio',
      icon: FaFolder,
      status: 'CURRENT',
      category: 'personal',
      size: '3.2MB',
      lastModified: '2025-01-20'
    },
    {
      id: 5,
      title: 'linux-portfolio',
      description: 'Interactive Linux desktop environment portfolio with React',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: 'https://github.com/username/portfolio',
      icon: FaFolder,
      status: 'CURRENT',
      category: 'personal',
      size: '3.2MB',
      lastModified: '2025-01-20'
    },
    {
      id: 6,
      title: 'linux-portfolio',
      description: 'Interactive Linux desktop environment portfolio with React',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: 'https://github.com/username/portfolio',
      icon: FaFolder,
      status: 'CURRENT',
      category: 'personal',
      size: '3.2MB',
      lastModified: '2025-01-20'
    },
    {
      id: 7,
      title: 'linux-portfolio',
      description: 'Interactive Linux desktop environment portfolio with React',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: 'https://github.com/username/portfolio',
      icon: FaFolder,
      status: 'CURRENT',
      category: 'personal',
      size: '3.2MB',
      lastModified: '2025-01-20'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'PRODUCTION': 'text-green-400 border-green-500',
      'ACTIVE': 'text-cyan-400 border-cyan-500',
      'STABLE': 'text-blue-400 border-blue-500',
      'CURRENT': 'text-purple-400 border-purple-500'
    };
    return colors[status] || 'text-gray-400 border-gray-500';
  };

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    return (
      <div 
        className="bg-gray-900 border border-cyan-500 rounded-lg p-4 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer font-mono"
        onClick={() => setSelectedProject(project)}
      >
        <div className="flex items-center mb-3">
          <IconComponent className="text-2xl text-cyan-400 mr-3" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-cyan-300 text-sm">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 text-xs mb-3 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded border border-green-500">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 text-yellow-400 text-xs rounded border border-yellow-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <div className="text-gray-500">
            <div>Size: {project.size}</div>
            <div>Modified: {project.lastModified}</div>
          </div>
          <div className="flex space-x-2">
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <FaEye />
            </button>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }) => {
    const IconComponent = project.icon;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-auto font-mono custom-scrollbar">
          {/* Terminal Header */}
          <div className="bg-gray-800 border-b border-cyan-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-cyan-400 text-sm">user@portfolio:~/projects/{project.title}</span>
              </div>
              <button 
                onClick={onClose}
                className="text-red-400 hover:text-red-300 text-lg font-bold"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Project Header */}
            <div className="flex items-center mb-6">
              <IconComponent className="text-4xl text-cyan-400 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-cyan-300 mb-1">{project.title}</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-400">Category: {project.category}</span>
                  <span className={`px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black rounded-lg p-4 mb-6 border border-green-500">
              <div className="text-green-400 text-sm">
                <div>$ cat README.md</div>
                <div className="mt-2 text-gray-300">{project.description}</div>
                <div className="mt-4">$ ls -la package.json</div>
                <div className="text-cyan-400">Size: {project.size} | Last Modified: {project.lastModified}</div>
              </div>
            </div>

            {/* Dependencies */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-purple-400 mb-3">$ npm list --depth=0</h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-purple-500">
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center text-sm">
                      <span className="text-green-400 mr-2">├──</span>
                      <span className="text-cyan-300">{tech}</span>
                      <span className="text-gray-500 ml-2">@latest</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-black font-bold rounded transition-colors border border-cyan-400"
              >
                <FaExternalLinkAlt className="mr-2" />
                ./deploy --live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors border border-purple-400"
              >
                <FaGithub className="mr-2" />
                git clone
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Terminal Header */}
      <div className="bg-gray-900 border-b border-cyan-500 p-4 font-mono">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <FaTerminal className="text-cyan-400 mr-2" />
            <h1 className="text-lg font-bold text-cyan-400">user@portfolio:~/projects</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-cyan-500 bg-opacity-20 text-cyan-400 border border-cyan-500' 
                  : 'text-gray-400 hover:text-cyan-300 border border-gray-600'
              }`}
            >
              --grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                viewMode === 'list' 
                  ? 'bg-cyan-500 bg-opacity-20 text-cyan-400 border border-cyan-500' 
                  : 'text-gray-400 hover:text-cyan-300 border border-gray-600'
              }`}
            >
              --list
            </button>
          </div>
        </div>
      </div>



      {/* Content */}
      <div className="flex-1 p-6 overflow-auto bg-black custom-scrollbar">
        <div className={`grid gap-4 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default ProjectsFolder;