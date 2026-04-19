import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  // Fungsi untuk mengecek apakah project adalah sertifikat
  const isCertificate = (project) => {
    return project.tech.some(tech => tech.toLowerCase().includes('certificate'));
  };

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects and Certificate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            saya melalui berbagai hasil karya. Setiap proyek dilengkapi dengan penjelasan singkat 
            untuk memberikan gambaran yang jelas mengenai peran dan kemampuan saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* Live Demo Button - Conditional */}
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      {isCertificate(project) ? 'View Certificate' : 'Live Demo'}
                    </motion.a>
                  ) : (
                    <motion.button
                      disabled
                      className="flex-1 py-2 rounded-lg bg-gray-700 text-gray-400 text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
                    >
                      <ExternalLink size={16} />
                      Private
                    </motion.button>
                  )}

                  {/* Code Button - Hide for Certificates */}
                  {!isCertificate(project) && project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 rounded-lg glass text-white text-sm font-medium flex items-center justify-center gap-2 border border-primary/30"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;