import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-primary font-semibold mb-2">INTRODUCTION</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Overview</h3>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
            {portfolioData.overview}
          </p>
        </motion.div>

        {/* Skills Grid */}
       
      </div>
    </section>
  );
};

export default Overview;