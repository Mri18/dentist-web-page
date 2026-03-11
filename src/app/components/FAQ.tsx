import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting the dentist every six months for a routine check-up and cleaning. However, some patients may need more frequent visits depending on their oral health needs.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes! We accept most major dental insurance plans. Our staff will work with your insurance provider to maximize your benefits and explain any out-of-pocket costs before treatment.',
  },
  {
    question: 'What payment options do you offer?',
    answer: 'We accept cash, credit cards, debit cards, and offer flexible payment plans for larger procedures. We also work with third-party financing companies to make dental care affordable.',
  },
  {
    question: 'Do you offer emergency dental services?',
    answer: 'Absolutely! We understand dental emergencies can happen at any time. We offer same-day emergency appointments and have on-call staff available 24/7 for urgent situations.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, professional teeth whitening performed by our dental team is completely safe and effective. We use FDA-approved whitening agents and customize the treatment to your specific needs.',
  },
  {
    question: 'What age should children start visiting the dentist?',
    answer: 'We recommend bringing your child for their first dental visit around their first birthday or when their first tooth appears. Early visits help establish good oral health habits and prevent future problems.',
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#0EA5E9] mb-4 px-4 py-2 rounded-full bg-[#0EA5E9]/10"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl lg:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our dental services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#0EA5E9]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}