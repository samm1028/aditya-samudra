import { motion } from 'framer-motion';
// Ganti icon sesuai keinginan
import { Building2 } from 'lucide-react';  // ← Ubah dari Briefcase ke Building2
import { portfolioData } from '../data/portfolioData';

const WorkExperience = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent glow z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {/* ← Icon diubah di sini */}
                    <Building2 className="text-primary" size={20} />
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                  <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;