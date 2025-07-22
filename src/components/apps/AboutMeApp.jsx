import React, { useState, useEffect } from 'react';
import { FaUser, FaCode, FaGraduationCap, FaBriefcase, FaTerminal } from 'react-icons/fa';

const AboutMeApp = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalText, setTerminalText] = useState('');

  const tabs = [
    { id: 'overview', label: 'sys.info', icon: FaUser },
    { id: 'skills', label: 'skills.list', icon: FaCode },
    { id: 'education', label: 'edu.log', icon: FaGraduationCap },
    { id: 'experience', label: 'work.history', icon: FaBriefcase }
  ];

  useEffect(() => {
    const text = `user@portfolio:~$ whoami\njohn_developer `;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const skills = {
    'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Python', 'Express', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL'],
    'Tools': ['Git', 'Docker', 'VS Code', 'Linux']
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Terminal Header */}
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400">terminal@portfolio</span>
              </div>
              <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
            </div>

            {/* User Info */}
            <div className="bg-gray-800 border border-cyan-500 rounded-lg p-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                  <FaUser className="text-3xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-mono">john_developer</h2>
                  <p className="text-gray-300 mb-2">$ cat /etc/passwd | grep john</p>
                  <p className="text-green-400 font-mono text-sm">uid=1000 gid=1000 groups=sudo,dev,admin</p>
                  <p className="text-gray-400 mt-2">📍 /home/sf/california</p>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-3 font-mono">$ cat /proc/meminfo</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-300">
                  <span className="text-cyan-400">Experience:</span> 5+ years active development
                </div>
                <div className="text-gray-300">
                  <span className="text-cyan-400">Specialization:</span> Full-stack web applications
                </div>
                <div className="text-gray-300">
                  <span className="text-cyan-400">Status:</span> <span className="text-green-400">ONLINE</span> - Ready for new challenges
                </div>
                <div className="text-gray-300">
                  <span className="text-cyan-400">Interests:</span> Open source, UI/UX, System architecture
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-green-400 mb-3">$ ls -la /usr/local/skills/</h3>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-4">
                  <h4 className="font-bold text-cyan-400 mb-2">drwxr-xr-x {category.toLowerCase()}/</h4>
                  <div className="ml-4 space-y-1">
                    {skillList.map((skill) => (
                      <div key={skill} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">-rwxr-xr-x</span>
                        <span className="bg-gray-800 px-2 py-1 rounded border border-cyan-500 text-cyan-300 text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">$ tail -f /var/log/education.log</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800 p-3 rounded">
                  <div className="text-cyan-400 font-bold">[2020-05-15 09:00:00] GRADUATION_SUCCESS</div>
                  <div className="text-gray-300">Bachelor of Computer Science</div>
                  <div className="text-gray-400">University of Technology</div>
                  <div className="text-green-400 text-sm">Status: COMPLETED | GPA: 3.8/4.0</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-gray-800 p-3 rounded">
                  <div className="text-purple-400 font-bold">[2020-08-30 18:00:00] CERTIFICATION_ACQUIRED</div>
                  <div className="text-gray-300">Full Stack Web Development</div>
                  <div className="text-gray-400">Intensive Coding Bootcamp</div>
                  <div className="text-green-400 text-sm">Status: CERTIFIED | Projects: 12 deployed</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-red-400 mb-3">$ ps aux | grep work_history</h3>
              <div className="space-y-4">
                <div className="border border-green-500 bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-green-400 font-bold">PID: 2022 | Senior Frontend Developer</div>
                    <div className="text-gray-400 text-sm">STATUS: RUNNING</div>
                  </div>
                  <div className="text-gray-300">Tech Solutions Inc.</div>
                  <div className="text-cyan-400 text-sm">Runtime: 2022-01-01 → Present</div>
                  <div className="text-gray-400 text-sm mt-2 bg-gray-900 p-2 rounded">
                    $ Leading React/TypeScript development for enterprise applications<br/>
                    $ Mentoring junior developers and code reviews<br/>
                    $ Architecture decisions and performance optimization
                  </div>
                </div>
                <div className="border border-blue-500 bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-blue-400 font-bold">PID: 2020 | Full Stack Developer</div>
                    <div className="text-yellow-400 text-sm">STATUS: COMPLETED</div>
                  </div>
                  <div className="text-gray-300">StartupXYZ</div>
                  <div className="text-cyan-400 text-sm">Runtime: 2020-06-01 → 2021-12-31</div>
                  <div className="text-gray-400 text-sm mt-2 bg-gray-900 p-2 rounded">
                    $ Built MERN stack applications from scratch<br/>
                    $ Database design and API development<br/>
                    $ DevOps and deployment automation
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex bg-black">
      {/* Sidebar */}
      <div className="w-56 bg-gray-900 border-r border-cyan-500">
        <div className="p-4">
          {/* Terminal Header */}
          <div className="bg-gray-800 rounded-lg p-3 mb-4 border border-green-500">
            <div className="flex items-center mb-2">
              <FaTerminal className="text-green-400 mr-2" />
              <span className="text-green-400 font-mono text-sm">user@system</span>
            </div>
            <div className="text-cyan-400 font-mono text-xs">$ ls /home/john/</div>
          </div>
          
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-all duration-200 font-mono text-sm ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 bg-opacity-20 text-cyan-400 border border-cyan-500 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-cyan-300 border border-transparent'
                  }`}
                >
                  <IconComponent className="mr-3 text-sm" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
          
          {/* System Status */}
          <div className="mt-6 bg-gray-800 rounded-lg p-3 border border-purple-500">
            <div className="text-purple-400 font-mono text-xs mb-2">SYSTEM STATUS</div>
            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-gray-400">CPU:</span>
                <span className="text-green-400">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MEM:</span>
                <span className="text-yellow-400">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">NET:</span>
                <span className="text-green-400">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto bg-black custom-scrollbar">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AboutMeApp;