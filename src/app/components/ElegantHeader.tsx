import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ElegantHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7f0e7]/95 backdrop-blur-md shadow-[0_6px_20px_rgba(70,56,38,0.12)]'
          : 'bg-[#f4ede2]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[1.85rem] text-[#40352f]"
            >
              Bright Smile Dental
            </h1>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-[#5f554a] hover:text-[#7e907c] transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-[#5f554a] hover:text-[#7e907c] transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#5f554a] hover:text-[#7e907c] transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Contact
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="dental-primary-btn flex items-center gap-2 !px-6 !py-2"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.button>
          </nav>

          <button
            className="md:hidden text-[#52453c]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#d8c9b7] bg-[#f7f0e8]"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-[#5f554a] hover:text-[#7e907c] py-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-[#5f554a] hover:text-[#7e907c] py-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-[#5f554a] hover:text-[#7e907c] py-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Contact
              </a>
              <button
                className="dental-primary-btn w-full"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
