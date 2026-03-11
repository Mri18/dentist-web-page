import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function ElegantFooter() {
  return (
    <footer className="border-t border-[#d9cab7] bg-[#ece2d4] text-[#4c4138]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="mb-4 text-3xl"
            >
              Bright Smile Dental
            </h3>
            <p
              className="mb-4 text-sm text-[#675b4f]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Premium, painless & family-friendly dental care to make your visit calm and pleasant.
            </p>
          </div>

          <div>
            <h4
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="mb-4 text-2xl"
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li><a href="#about" className="text-sm text-[#675b4f] transition-colors hover:text-[#7e907c]">About Us</a></li>
              <li><a href="#services" className="text-sm text-[#675b4f] transition-colors hover:text-[#7e907c]">Services</a></li>
              <li><a href="#" className="text-sm text-[#675b4f] transition-colors hover:text-[#7e907c]">Our Team</a></li>
              <li><a href="#contact" className="text-sm text-[#675b4f] transition-colors hover:text-[#7e907c]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="mb-4 text-2xl"
            >
              Contact Us
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li className="flex items-center gap-2 text-sm text-[#675b4f]">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#675b4f]">
                <Mail className="w-4 h-4" />
                <span>info@brightsmile.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#675b4f]">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Main Street<br />Anytown, ST 12345</span>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="mb-4 text-2xl"
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ccb8a2] bg-[#f7f0e7] transition-colors hover:bg-[#e8ddcd]"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ccb8a2] bg-[#f7f0e7] transition-colors hover:bg-[#e8ddcd]"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ccb8a2] bg-[#f7f0e7] transition-colors hover:bg-[#e8ddcd]"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d9cab7] pt-8 text-center">
          <p
            className="text-sm text-[#675b4f]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            &copy; 2026 Bright Smile Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
