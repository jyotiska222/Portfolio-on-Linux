import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // ASCII Art for JB
    const asciiArt = [
        "     ██╗██████╗ ",
        "     ██║██╔══██╗",
        "     ██║██████╔╝",
        "██   ██║██╔══██╗",
        "╚█████╔╝██████╔╝",
        " ╚════╝ ╚═════╝ "
    ];

    // Available commands
    const commands = {
        'jb-help': {
            description: 'Show all available JB commands',
            execute: () => [
                'Available JB Commands:',
                '─────────────────────',
                'jb-help      - Show this help menu',
                'jb-about     - Learn about me',
                'jb-skills    - View my technical skills',
                'jb-projects  - See my projects',
                'jb-contact   - Get my contact information',
                'jb-resume    - View my resume/CV',
                'jb-social    - Find me on social media',
                'clear        - Clear the terminal',
                '',
                'Type any command to get started!'
            ]
        },
        'jb-about': {
            description: 'Learn about me',
            execute: () => [
                '👋 Hello! I\'m JB',
                '═══════════════',
                '',
                '🚀 Full Stack Developer & Tech Enthusiast',
                '📍 Location: [Your Location]',
                '💼 Experience: [Your Experience]',
                '',
                '🎯 Passionate about creating innovative solutions',
                '🌟 Always learning and exploring new technologies',
                '💡 Love turning ideas into reality through code',
                '',
                'Fun fact: I built this terminal-style portfolio! 🖥️'
            ]
        },
        'jb-skills': {
            description: 'View my technical skills',
            execute: () => [
                '🛠️  Technical Skills',
                '═══════════════════',
                '',
                '💻 Frontend:',
                '   • React.js, Vue.js, Angular',
                '   • HTML5, CSS3, JavaScript (ES6+)',
                '   • Tailwind CSS, Bootstrap',
                '   • TypeScript',
                '',
                '⚙️  Backend:',
                '   • Node.js, Express.js',
                '   • Python, Django, Flask',
                '   • Java, Spring Boot',
                '   • RESTful APIs, GraphQL',
                '',
                '🗄️  Database:',
                '   • MongoDB, PostgreSQL, MySQL',
                '   • Redis, Firebase',
                '',
                '☁️  DevOps & Tools:',
                '   • Docker, Kubernetes',
                '   • AWS, Azure, GCP',
                '   • Git, GitHub Actions',
                '   • Linux, Bash scripting'
            ]
        },
        'jb-projects': {
            description: 'See my projects',
            execute: () => [
                '🚀 Featured Projects',
                '═══════════════════',
                '',
                '1. 🖥️  Linux Portfolio Terminal',
                '   • Interactive terminal-style portfolio',
                '   • Built with React.js & Tailwind CSS',
                '   • Custom command system',
                '',
                '2. 📱 E-Commerce Platform',
                '   • Full-stack web application',
                '   • React frontend, Node.js backend',
                '   • Payment integration & admin panel',
                '',
                '3. 🤖 AI Chat Application',
                '   • Real-time messaging with AI',
                '   • WebSocket implementation',
                '   • Natural language processing',
                '',
                '4. 📊 Data Visualization Dashboard',
                '   • Interactive charts and graphs',
                '   • D3.js & Chart.js integration',
                '   • Real-time data updates',
                '',
                'Use "jb-contact" to discuss projects!'
            ]
        },
        'jb-contact': {
            description: 'Get my contact information',
            execute: () => [
                '📞 Contact Information',
                '═══════════════════',
                '',
                '📧 Email: [your.email@example.com]',
                '📱 Phone: [+1 (555) 123-4567]',
                '🌐 Website: [www.yourwebsite.com]',
                '📍 Location: [Your City, Country]',
                '',
                '💼 Professional:',
                '   • LinkedIn: [linkedin.com/in/yourprofile]',
                '   • GitHub: [github.com/yourusername]',
                '',
                '💬 Let\'s connect and build something amazing together!',
                '',
                '⚡ Available for freelance projects and collaborations'
            ]
        },
        'jb-resume': {
            description: 'View my resume/CV',
            execute: () => [
                '📄 Resume/CV',
                '═══════════',
                '',
                '👤 JB - Full Stack Developer',
                '',
                '🎓 Education:',
                '   • [Degree] in [Field] - [University] ([Year])',
                '   • Relevant certifications and courses',
                '',
                '💼 Experience:',
                '   • Senior Developer at [Company] (2022-Present)',
                '   • Full Stack Developer at [Company] (2020-2022)',
                '   • Junior Developer at [Company] (2018-2020)',
                '',
                '🏆 Achievements:',
                '   • Led team of 5 developers on major project',
                '   • Improved application performance by 40%',
                '   • Implemented CI/CD pipeline reducing deployment time',
                '',
                '📄 Download full resume: [resume-link.pdf]'
            ]
        },
        'jb-social': {
            description: 'Find me on social media',
            execute: () => [
                '🌐 Social Media & Online Presence',
                '═══════════════════════════════',
                '',
                '💼 Professional:',
                '   • LinkedIn: [linkedin.com/in/yourprofile]',
                '   • GitHub: [github.com/yourusername]',
                '   • Stack Overflow: [stackoverflow.com/users/yourprofile]',
                '',
                '📝 Content & Blogs:',
                '   • Medium: [medium.com/@yourusername]',
                '   • Dev.to: [dev.to/yourusername]',
                '   • Personal Blog: [yourblog.com]',
                '',
                '🐦 Social:',
                '   • Twitter: [@yourusername]',
                '   • Instagram: [@yourusername]',
                '',
                '🎥 Tech Content:',
                '   • YouTube: [youtube.com/c/yourchannel]',
                '   • Twitch: [twitch.tv/yourusername]'
            ]
        }
    };

    useEffect(() => {
        // Focus input on mount
        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Add welcome message
        setHistory([
            '╔═════════════════════════════════════════════════════╗',
            '║                    Welcome to JB\'s Terminal                    ║',
            '║                     Interactive Portfolio                      ║',
            '╚═════════════════════════════════════════════════════╝',
            '',
            '🚀 Type "jb-help" to see all available commands',
            '💡 All commands start with "jb-" prefix',
            ''
        ]);
    }, []);

    useEffect(() => {
        // Auto-scroll to bottom
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (command) => {
        const trimmedCommand = command.trim().toLowerCase();

        // Handle special commands that need direct state access
        if (trimmedCommand === 'clear') {
            setHistory([]);
            return null; // Return null to indicate no output should be added
        }

        if (commands[trimmedCommand]) {
            const output = commands[trimmedCommand].execute();
            return output;
        } else if (trimmedCommand === '') {
            return [];
        } else {
            return [
                `Command not found: ${command}`,
                'Type "jb-help" to see available commands'
            ];
        }
    };

    const handleSubmit = () => {
        if (currentInput.trim()) {
            // Add command to history
            setCommandHistory(prev => [...prev, currentInput]);
            setHistoryIndex(-1);

            // Execute command and add output
            const output = executeCommand(currentInput);
            
            // If output is null (like for clear command), don't add anything to history
            if (output === null) {
                setCurrentInput('');
                return;
            }

            // Add command to terminal history
            const newHistory = [...history, `guest@jb-portfolio:~$ ${currentInput}`];
            const finalHistory = [...newHistory, ...output, ''];

            setHistory(finalHistory);
        } else {
            setHistory(prev => [...prev, 'guest@jb-portfolio:~$ ', '']);
        }

        setCurrentInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setCurrentInput('');
            }
        }
    };

    return (
        <div className="h-full bg-gray-900 text-green-400 font-mono text-sm overflow-hidden flex flex-col">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-300">JB Terminal - Interactive Portfolio</div>
            </div>

            {/* Main Terminal Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left ASCII Art Section */}
                <div className="w-48 bg-gray-800 border-r border-gray-700 p-4 flex flex-col justify-center items-center">
                    <div className="text-cyan-400 text-xs leading-tight mb-4">
                        {asciiArt.map((line, index) => (
                            <div key={index} className="whitespace-pre font-mono">
                                {line}
                            </div>
                        ))}
                    </div>
                    <div className="text-center text-gray-400 text-xs">
                        <div className="text-cyan-400 font-bold">JB</div>
                        <div>Portfolio</div>
                        <div>Terminal</div>
                    </div>
                </div>

                {/* Right Terminal Content */}
                <div
                    ref={terminalRef}
                    className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                >
                    {/* History */}
                    {history.map((line, index) => (
                        <div key={index} className="whitespace-pre-wrap">
                            {line.startsWith('guest@jb-portfolio:~$') ? (
                                <span>
                                    <span className="text-blue-400">guest@jb-portfolio:~$</span>
                                    <span className="text-green-400">{line.substring(21)}</span>
                                </span>
                            ) : (
                                line
                            )}
                        </div>
                    ))}

                    {/* Current Input Line */}
                    <div className="flex items-center">
                        <span className="text-blue-400 mr-2">guest@jb-portfolio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;