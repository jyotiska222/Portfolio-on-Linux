import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaTerminal, FaWifi } from 'react-icons/fa';

const ContactApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'email',
      value: 'john.developer@portfolio.dev',
      link: 'mailto:john.developer@portfolio.dev',
      protocol: 'SMTP',
      status: 'ACTIVE'
    },
    {
      icon: FaLinkedin,
      label: 'linkedin',
      value: '/in/johndeveloper',
      link: 'https://linkedin.com/in/johndeveloper',
      protocol: 'HTTPS',
      status: 'ONLINE'
    },
    {
      icon: FaTwitter,
      label: 'twitter',
      value: '@johndeveloper',
      link: 'https://twitter.com/johndeveloper',
      protocol: 'HTTPS',
      status: 'ONLINE'
    },
    {
      icon: FaPhone,
      label: 'phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      protocol: 'PSTN',
      status: 'AVAILABLE'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'location',
      value: '/home/sf/california',
      link: null,
      protocol: 'GPS',
      status: 'FIXED'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'ACTIVE': 'text-green-400 border-green-500',
      'ONLINE': 'text-cyan-400 border-cyan-500',
      'AVAILABLE': 'text-blue-400 border-blue-500',
      'FIXED': 'text-purple-400 border-purple-500'
    };
    return colors[status] || 'text-gray-400 border-gray-500';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with terminal output
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="h-full overflow-auto bg-black custom-scrollbar">
      {/* Terminal Header */}
      <div className="bg-gray-900 border-b border-green-500 p-4 font-mono">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <FaTerminal className="text-green-400 mr-2" />
            <h1 className="text-xl font-bold text-green-400">user@portfolio:~/contact</h1>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaWifi className="text-green-400" />
            <span className="text-green-400">CONNECTED</span>
          </div>
        </div>
      </div>



      <div className="p-4 md:p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4 md:p-6 font-mono shadow-lg shadow-cyan-500/10">
              <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-green-400 mr-2">$</span>
                cat /etc/contacts.conf
              </h2>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-3 hover:border-cyan-500 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <IconComponent className="text-cyan-400 mr-3 text-lg" />
                          <span className="text-cyan-300 font-bold text-sm">{info.label}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{info.protocol}</span>
                          <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(info.status)}`}>
                            {info.status}
                          </span>
                        </div>
                      </div>
                      <div className="ml-9">
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 transition-colors text-sm hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-300 text-sm">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-gray-900 border border-purple-500 rounded-lg p-4 md:p-6 font-mono shadow-lg shadow-purple-500/10">
              <h3 className="text-purple-400 font-bold mb-4 flex items-center">
                <span className="text-green-400 mr-2">$</span>
                systemctl status networking
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/johndeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors border border-blue-400 shadow-lg shadow-blue-500/20"
                >
                  <FaLinkedin className="mr-2" />
                  <span className="text-sm font-mono">linkedin.connect()</span>
                </a>
                <a
                  href="https://twitter.com/johndeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors border border-cyan-400 shadow-lg shadow-cyan-500/20"
                >
                  <FaTwitter className="mr-2" />
                  <span className="text-sm font-mono">twitter.follow()</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-900 border border-green-500 rounded-lg p-4 md:p-6 font-mono shadow-lg shadow-green-500/10">
              <h2 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                <span className="text-green-400 mr-2">$</span>
                nano /tmp/message.txt
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-gray-800 border border-green-500 text-green-400 rounded-lg shadow-lg shadow-green-500/20">
                  <div className="text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Message queued successfully!
                    </div>
                    <div className="text-xs text-gray-300 ml-4">
                      Status: SENT | Queue: 0 | Delivery: CONFIRMED
                    </div>
                    <div className="text-xs text-gray-300 ml-4">
                      Response time: &lt; 24 hours
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-cyan-400 mb-2">
                    --name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-cyan-500 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="john_doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-cyan-400 mb-2">
                    --email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-cyan-500 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="user@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-cyan-400 mb-2">
                    --subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-cyan-500 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="Re: Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-cyan-400 mb-2">
                    --message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-800 border border-cyan-500 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none font-mono transition-all placeholder-gray-500"
                    placeholder="Hello John,&#10;&#10;I would like to discuss...&#10;&#10;Best regards,"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-black font-bold rounded-lg transition-all border border-green-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      ./send --processing
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      ./send --message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;