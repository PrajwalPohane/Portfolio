import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Rocket, Brain, Terminal, Cpu, Wifi, Database, Cloud, Monitor, Heart, Coffee, Globe, Sparkles, Star, Zap, Award, Trophy, Target, Lightbulb, User, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from './images/image.jpg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [-15, 15],
    rotate: [-5, 5],
  };

  const skills = [
    { name: "React", icon: Code2, color: "#00ffff", level: 80 },
    { name: "Python", icon: Terminal, color: "#00ff00", level: 85 },
    { name: "Cloud", icon: Cloud, color: "#ff00ff", level: 80 },
    { name: "Database", icon: Database, color: "#00ffff", level: 88 },
    { name: "DevOps", icon: Cpu, color: "#00ff00", level: 75 },
  ];

  const achievements = [
    { icon: Trophy, text: "Top Submission at Google GenAI Exchange Hackathon", color: "#00ffff" },
    { icon: Star, text: "100+ Projects Completed", color: "#ff00ff" },
    { icon: Award, text: "Open Source Contributor", color: "#00ff00" },
    { icon: Target, text: "Tech Conference Speaker", color: "#00ffff" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('http://localhost:5000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Error sending message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-8"
          >
            <Sparkles className="text-[#00ffff] w-16 h-16 mx-auto" />
          </motion.div>
          
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ff00] animate-pulse">
            Prajwal Pohane
          </h1>
          <p className="text-2xl text-[#00ffff]">Full Stack Developer</p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="https://github.com" 
              className="text-[#00ffff] hover:text-[#ff00ff] transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/prajwal-pohane-0770b2257/" 
              className="text-[#00ffff] hover:text-[#ff00ff] transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:prajwalpohane678@gmail.com" 
              className="text-[#00ffff] hover:text-[#ff00ff] transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 text-[#00ffff]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.button>

        {/* Floating Characters */}
        {[
          { Icon: Code2, color: "#00ffff", position: "right-20 top-1/4", delay: 0 },
          { Icon: Rocket, color: "#ff00ff", position: "left-20 top-1/3", delay: 0.2 },
          { Icon: Brain, color: "#00ff00", position: "right-1/4 bottom-1/4", delay: 0.4 },
          { Icon: Terminal, color: "#00ffff", position: "left-1/4 top-1/4", delay: 0.6 },
          { Icon: Cpu, color: "#ff00ff", position: "right-1/3 top-1/3", delay: 0.8 },
          { Icon: Wifi, color: "#00ff00", position: "left-1/3 bottom-1/3", delay: 1 },
          { Icon: Database, color: "#00ffff", position: "right-1/4 top-1/3", delay: 1.2 },
          { Icon: Cloud, color: "#ff00ff", position: "left-1/4 top-2/3", delay: 1.4 },
          { Icon: Monitor, color: "#00ff00", position: "right-1/3 bottom-1/4", delay: 1.6 }
        ].map(({ Icon, color, position, delay }) => (
          <motion.div 
            key={position}
            className={`absolute ${position}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.6,
              ...floatingAnimation
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              delay,
              repeatType: "reverse" 
            }}
          >
            <Icon size={48} style={{ color }} />
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 max-w-4xl z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffff" }}
              className="rounded-lg overflow-hidden relative group"
            >
              <img 
                src={profileImage}
                alt="Profile"
                className="rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                  <Heart className="text-[#ff00ff] w-6 h-6" />
                  <Coffee className="text-[#00ffff] w-6 h-6" />
                  <Globe className="text-[#00ff00] w-6 h-6" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#00ffff] text-lg">
                I'm a passionate Full Stack Developer with 5 years of experience in building
                web applications. I specialize in React, Node.js, and cloud technologies.
              </p>
              <p className="text-[#00ffff] text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or enjoying outdoor photography.
              </p>
              
              {/* Skills Section */}
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-[#ff00ff]">Skills</h3>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="text-[#00ffff]">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: skill.color,
                          width: `${skill.level}%`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center p-4 rounded-lg border border-[#00ffff] bg-black/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${achievement.color}` }}
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-3" style={{ color: achievement.color }} />
                <p className="text-sm text-[#00ffff]">{achievement.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 max-w-6xl z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00ff00]"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "AI Image Generator",
                description: "A deep learning model that generates artistic images from text descriptions using state-of-the-art AI technology.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500",
                tech: ["React", "Python", "TensorFlow"]
              },
              {
                title: "Crypto Dashboard",
                description: "Real-time cryptocurrency tracking dashboard with advanced analytics and portfolio management features.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
                tech: ["Vue.js", "Node.js", "WebSocket"]
              },
              {
                title: "Smart Home App",
                description: "IoT-based smart home control system with voice commands and automated scheduling capabilities.",
                image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500",
                tech: ["React Native", "AWS", "MongoDB"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0,255,255,0.3)"
                }}
                className="bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.2)] group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full border border-[#00ffff] text-[#00ffff]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#00ffff] flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#ff00ff]" />
                  {project.title}
                </h3>
                <p className="text-[#00ffff] opacity-80 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <motion.a 
                    href="#" 
                    className="flex items-center gap-2 text-[#ff00ff] hover:text-[#00ffff]"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <Github size={18} /> Code
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="flex items-center gap-2 text-[#00ff00] hover:text-[#00ffff]"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <ExternalLink size={18} /> Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 max-w-2xl z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-lg bg-black bg-opacity-20 rounded-lg p-8 border border-[#00ffff] shadow-[0_0_30px_rgba(0,255,255,0.2)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#00ffff]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border border-[#00ffff] text-[#00ffff] placeholder-[#00ffff]/50"
                  placeholder="Your name"
                  required
                />
                <motion.div
                  className="absolute right-3 top-9 text-[#00ffff] opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <User className="w-5 h-5" />
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#00ffff]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border border-[#00ffff] text-[#00ffff] placeholder-[#00ffff]/50"
                  placeholder="your@email.com"
                  required
                />
                <motion.div
                  className="absolute right-3 top-9 text-[#00ffff] opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#00ffff]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border border-[#00ffff] text-[#00ffff] placeholder-[#00ffff]/50"
                  placeholder="Your message..."
                  required
                ></textarea>
                <motion.div
                  className="absolute right-3 top-9 text-[#00ffff] opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <MessageSquare className="w-5 h-5" />
                </motion.div>
              </motion.div>
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-3 rounded-lg ${
                    submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-transparent border-2 border-[#00ffff] text-[#00ffff] font-medium py-3 rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 relative group ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="relative z-10">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#00ffff]/20 rounded-lg"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <motion.a
              href="mailto:prajwalpohane678@gmail.com"
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-lg border border-[#00ffff] bg-black/30 backdrop-blur-sm"
            >
              <Mail className="text-[#ff00ff]" />
              <span className="text-[#00ffff]">prajwalpohane678@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+91 8208468324"
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-lg border border-[#00ffff] bg-black/30 backdrop-blur-sm"
            >
              <Phone className="text-[#00ff00]" />
              <span className="text-[#00ffff]">+91 8208468324</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#00ffff] flex items-center justify-center gap-2"
          >
            <Heart className="text-[#ff00ff] w-4 h-4" />
            <span>Made with love by John Doe</span>
            <Heart className="text-[#ff00ff] w-4 h-4" />
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;