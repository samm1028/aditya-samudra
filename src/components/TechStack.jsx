import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const techIcons = {
  HTML: './images/html.svg',
  CSS: './images/css.svg',
  JavaScript: './images/js.svg',
  React: './images/react.svg',
  Tailwind: './images/tailwind.svg',
  Php: './images/php.svg', 
  Figma: './images/figma.svg',
  Canva: './images/canva.svg',
  McWord: './images/mcword.svg',
  Capcut: './images/capcut.svg',
  KineMaster: './images/kinemaster.svg',
};

const techColors = {
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  Tailwind: '#38BDF8',
  Php: '#777BB4',
  Figma: '#F24E1E',
  Canva: '#00C4CC',
  McWord: '#2B579A',
  Capcut: '#ffffff',
  KineMaster: '#FF0000',
};

const TechStack = () => {
  return (
    <section className="py-16 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {portfolioData.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center cursor-pointer group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${techColors[tech.name]}15 0%, ${techColors[tech.name]}05 100%)`,
                border: `1px solid ${techColors[tech.name]}30`
              }}
            >
              {/* Logo Image */}
              <img
                src={techIcons[tech.name]}
                alt={tech.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110"
                style={{
                  filter: `drop-shadow(0 0 8px ${techColors[tech.name]}40)`
                }}
              />
              
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${techColors[tech.name]}20 0%, transparent 70%)`
                }}
              />
              
              {/* Tooltip Name */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;