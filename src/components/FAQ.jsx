import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What are the standard check-in and check-out hours?",
    answer: "Standard check-in begins at 12:00 PM (Noon), and check-out is requested by 11:00 AM. Early check-in or late check-out is subject to room availability and may carry nominal adjustments."
  },
  {
    question: "How far is the resort from Kangra Airport and nearby bus stands?",
    answer: "Dee Jay Resort is situated on the Chandigarh-Dharamshala road in Dhaliara. We are approximately a 1.5-hour drive (approx. 45km) from Kangra Airport and 10km from the main Dehra Chowk Bus Stand."
  },
  {
    question: "Do you organize local transport charters for Pragpur and Chintpurni?",
    answer: "Yes, our concierge travel desk organizes private taxi charters, local guides, and tour planners for Pragpur Heritage Village (8km away), Chintpurni temple (22km away), and other scenic sites like Pong Dam reservoir."
  },
  {
    question: "Are pets allowed inside room cottages or pool areas?",
    answer: "To ensure absolute tranquility and comfort for all our resident guests, pets are generally not permitted inside the rooms, dining areas, or pool zones."
  },
  {
    question: "Is credit card payment or pre-booking deposit mandatory?",
    answer: "No immediate online payment is required on our website. Once you generate your hold voucher, your booking is confirmed, and you can clear all bill balances directly at the front desk using cash, cards, or UPI during checkout."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked <span>Queries</span></h2>
          <p className="section-desc">
            Find answers to common questions about transportation, bookings, check-in rules, and resort facilities.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-accordion-item glass-panel ${isOpen ? 'open' : ''}`}
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="faq-question-btn clickable"
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-text">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <h4>{faq.question}</h4>
                  </div>
                  <span className="faq-toggle-arrow">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
