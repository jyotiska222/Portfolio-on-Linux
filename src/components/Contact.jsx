import { useState } from 'react'
import { MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon, TwitterIcon, MediumIcon, CheckIcon } from './Icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'alex.johnson@email.com',
      link: 'mailto:alex.johnson@email.com'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/alexjohnson',
      link: 'https://linkedin.com/in/alexjohnson'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Medium', icon: 'medium', url: 'https://medium.com' }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {info.icon === 'mail' && <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                    {info.icon === 'phone' && <PhoneIcon className="w-6 h-6 text-green-600 dark:text-green-400" />}
                    {info.icon === 'location' && <LocationIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                    {info.icon === 'linkedin' && <LinkedInIcon className="w-6 h-6 text-blue-700 dark:text-blue-300" />}
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-text-primary hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-text-primary font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface border border-border-color rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon === 'github' && <GitHubIcon className="w-6 h-6" />}
                    {social.icon === 'linkedin' && <LinkedInIcon className="w-6 h-6" />}
                    {social.icon === 'twitter' && <TwitterIcon className="w-6 h-6" />}
                    {social.icon === 'medium' && <MediumIcon className="w-6 h-6" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-surface border border-border-color rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-text-primary font-medium">Available for new projects</div>
                  <div className="text-text-secondary text-sm">Currently accepting freelance and full-time opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-text-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-text-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-text-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-text-primary resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-text-muted cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 hover:scale-105'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-center flex items-center justify-center gap-2">
                  <CheckIcon className="w-5 h-5" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border-color text-center">
          <p className="text-text-secondary">
            © 2025 Alex Johnson. Built with React, Tailwind CSS, and lots of coffee
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact