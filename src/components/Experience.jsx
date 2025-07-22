const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading a team of 5 developers in building scalable microservices architecture. Implemented CI/CD pipelines that reduced deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Architected and deployed 15+ microservices handling 1M+ daily requests",
        "Mentored junior developers and conducted technical interviews",
        "Reduced system downtime by 40% through improved monitoring and alerting"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated closely with design and product teams.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"],
      achievements: [
        "Built responsive web applications serving 100K+ users",
        "Optimized database queries resulting in 50% faster load times",
        "Implemented real-time features using WebSocket technology"
      ]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Worked on enterprise-level applications and internal tools. Focused on backend development and API design.",
      technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Linux"],
      achievements: [
        "Developed RESTful APIs used by 10+ internal applications",
        "Automated manual processes saving 20+ hours per week",
        "Maintained 99.9% uptime for critical business applications"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            My professional journey and key contributions in various roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600 dark:bg-blue-400"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              
              {/* Content card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-surface border border-border-color rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-text-primary">{exp.title}</h3>
                      <span className="text-primary font-medium">{exp.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-text-secondary">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:inline mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start">
                          <span className="text-secondary mr-2 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">Education</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface border border-border-color rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-text-primary">Bachelor of Science in Computer Science</h4>
                <span className="text-primary font-medium">2015 - 2019</span>
              </div>
              <p className="text-text-secondary mb-3">University of California, Berkeley</p>
              <p className="text-text-secondary text-sm">
                Relevant Coursework: Data Structures, Algorithms, Software Engineering, 
                Database Systems, Computer Networks, Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience