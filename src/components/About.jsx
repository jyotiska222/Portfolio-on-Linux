import { useState, useEffect } from 'react'
import { RocketIcon, StarIcon, BrainIcon, UserIcon } from './Icons'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: 'rocket', color: 'text-blue-600 dark:text-blue-400' },
    { number: '5+', label: 'Years Experience', icon: 'star', color: 'text-green-600 dark:text-green-400' },
    { number: '24/7', label: 'Learning Mode', icon: 'brain', color: 'text-purple-600 dark:text-purple-400' }
  ]

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker']

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono text-sm mb-4">
            <span className="w-8 h-px bg-gray-400"></span>
            <span>GET TO KNOW ME</span>
            <span className="w-8 h-px bg-gray-400"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced profile section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Enhanced profile image placeholder */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-blue-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-blue-900/30 rounded-3xl flex items-center justify-center border-2 border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm overflow-hidden group">
                <UserIcon className="w-32 h-32 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Floating skill badges */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`absolute text-xs px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 font-medium animate-float`}
                      style={{
                        top: `${20 + (index % 3) * 30}%`,
                        left: `${10 + (index % 2) * 70}%`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute top-1/4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-30 delay-500"></div>
            </div>
          </div>

          {/* Enhanced content section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                I'm a passionate <span className="font-bold text-blue-600 dark:text-blue-400">software engineer</span> with over 5 years of experience in building 
                scalable web applications and solving complex technical challenges. My journey 
                started with a curiosity about how things work, which led me to pursue computer 
                science and fall in love with coding.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I specialize in <span className="font-bold text-purple-600 dark:text-purple-400">full-stack development</span> with expertise in modern JavaScript 
                frameworks, cloud technologies, and system architecture. I believe in writing 
                clean, maintainable code and creating user experiences that truly matter.
              </p>
            </div>

            {/* Enhanced stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl group ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}

                >
                  <div className="text-center">
                    <div className="mb-2 group-hover:animate-bounce flex justify-center">
                      {stat.icon === 'rocket' && <RocketIcon className={`w-8 h-8 ${stat.color}`} />}
                      {stat.icon === 'star' && <StarIcon className={`w-8 h-8 ${stat.color}`} />}
                      {stat.icon === 'brain' && <BrainIcon className={`w-8 h-8 ${stat.color}`} />}
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced code snippet */}
            <div className={`bg-gray-900 dark:bg-gray-950 border border-gray-700 rounded-2xl p-6 font-mono text-sm shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: '1200ms' }}>
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <span className="ml-4 text-gray-400 text-xs">~/developer/alex-johnson/about.json</span>
              </div>
              <div className="text-gray-300 space-y-2 leading-relaxed">
                <div className="flex"><span className="text-blue-400 mr-2">{`{`}</span></div>
                <div className="ml-4 flex">
                  <span className="text-green-400">"location":</span> 
                  <span className="text-yellow-300 ml-2">"San Francisco, CA"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4 flex">
                  <span className="text-green-400">"education":</span> 
                  <span className="text-yellow-300 ml-2">"BS Computer Science"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4 flex">
                  <span className="text-green-400">"interests":</span> 
                  <span className="text-purple-300 ml-2">["AI/ML", "Open Source", "Photography"]</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4 flex">
                  <span className="text-green-400">"currentFocus":</span> 
                  <span className="text-yellow-300 ml-2">"Cloud Architecture"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4 flex">
                  <span className="text-green-400">"status":</span> 
                  <span className="text-green-300 ml-2 animate-pulse">"Available for opportunities"</span>
                </div>
                <div className="flex"><span className="text-blue-400">{`}`}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About