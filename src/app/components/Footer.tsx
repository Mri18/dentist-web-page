import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4 text-[#0EA5E9]">Bright Smile Dental</h3>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care for over 25 years. Your smile is our passion.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>for healthy smiles</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Testimonials', 'Contact', 'Patient Portal'].map(
                (link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#0EA5E9] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#0EA5E9] rounded-full"></span>
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'General Dentistry',
                'Cosmetic Dentistry',
                'Orthodontics',
                'Teeth Whitening',
                'Emergency Care',
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0EA5E9] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#0EA5E9] rounded-full"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-4">Follow us on social media for tips and updates</p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            &copy; 2026 Bright Smile Dental. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              HIPAA Notice
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-[#0EA5E9]/50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
}