import { motion } from 'framer-motion';
import { MessageCircle, Youtube, Instagram, Music } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Music, href: '#', label: 'TikTok' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 bg-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Aditya Samudra. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;