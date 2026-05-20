import { motion } from 'framer-motion';
import { ExternalLink, Github, Video } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  // Helper: Cek apakah project adalah sertifikat
  const isCertificate = (project) => 
    project.tech?.some(tech => tech.toLowerCase().includes('certificate'));

  // Helper: Cek apakah project adalah website (bukan sertifikat)
  const isWebsite = (project) => !isCertificate(project);

  // ✅ Helper: Cek apakah project memiliki link video (generic, tanpa deteksi platform)
  const hasVideo = (project) => 
    project.video && project.video.trim() !== '';

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects and Certificate
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Saya menampilkan berbagai hasil karya. Setiap proyek dilengkapi dengan 
            penjelasan singkat untuk memberikan gambaran yang jelas mengenai peran 
            dan kemampuan saya.
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
              {/* Image Section with Badges */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                
                {/* ✅ Generic Video Badge - Muncul jika ada link video apa saja */}
                {hasVideo(project) && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-purple-600/90 text-white text-xs font-medium flex items-center gap-1 shadow-lg z-10">
                    <Video size={12} /> Video
                  </div>
                )}
                
                {/* Certificate Badge */}
                {isCertificate(project) && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-emerald-600/90 text-white text-xs font-medium shadow-lg z-10">
                    Certificate
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔘 Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  
                  {/* 1. Live Demo - HANYA untuk Website Project */}
                  {isWebsite(project) && project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[100px] py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}

                  {/* ✅ 2. Generic Video Button - Muncul jika ada link video apa saja */}
                  {hasVideo(project) && (
                    <motion.a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[100px] py-2 rounded-lg glass text-white text-sm font-medium flex items-center justify-center gap-2 border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                      title="Watch Video"
                    >
                      <Video size={16} />
                      Video
                    </motion.a>
                  )}

                 

                  {/* 4. Certificate View - HANYA untuk Sertifikat */}
                  {isCertificate(project) && project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[100px] py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-shadow"
                      title="View Certificate"
                    >
                      <ExternalLink size={16} />
                      View
                    </motion.a>
                  )}

                  {/* 5. Fallback: Private */}
                  {!project.link && !hasVideo(project) && !project.github && (
                    <motion.button
                      disabled
                      className="flex-1 min-w-[100px] py-2 rounded-lg bg-gray-700/50 text-gray-500 text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed"
                      title="Project not publicly available"
                    >
                      <ExternalLink size={16} />
                      Private
                    </motion.button>
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