import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';


const skillIcons = {
  HTML: <img src="./images/html.svg" alt="HTML" className="w-12  h-12" />,
  CSS: <img src="./images/css.svg" alt="CSS" className="w-12 h-12" />,
  JavaScript: <img src="./images/js.svg" alt="JS" className="w-12 h-12" />,
React: <img src="./images/react.svg"alt="React" className="w-12 h-12" />,

};

const Skills = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi web modern
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-xl p-8 text-center group cursor-pointer"
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ 
                  backgroundColor: skill.color,
                  boxShadow: `0 0 30px ${skill.color}40`
                }}
              >
                {skillIcons[skill.name] || <span className="text-3xl font-bold">{skill.name.charAt(0)}</span>}
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
              <div className="h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {portfolioData.techStack.map((tech, index) => (
            <div key={tech.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-primary font-semibold">{tech.level}</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: tech.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;