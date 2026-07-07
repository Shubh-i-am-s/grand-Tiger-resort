import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, PhoneCall, MessageCircle } from 'lucide-react';
import './FloatingUI.css';

export default function FloatingUI() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Live update of scroll progress bar
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Scan for clickable elements to scale cursor
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at the top of the body */}
      <div className="scroll-progress-container">
        <div id="scroll-progress" className="scroll-progress-bar"></div>
      </div>

      {/* Screen Cursor Follower (Desktop Only) */}
      <div 
        className={`cursor-follower ${isHovered ? 'hovered' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Full-Screen Page Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="luxury-loader-screen"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          >
            <motion.div 
              className="loader-logo-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 className="loader-title">DEE JAY</h2>
              <span className="loader-subtitle">RESORT</span>
              <div className="loader-line-indicator">
                <motion.div 
                  className="loader-progress"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </div>
              <p className="loader-tag">Inspired by Natural Beauty & Culture</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Controls */}
      <div className="floating-action-controls">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919418103888?text=Hello%20Dee%20Jay%20Resort,%20I'd%20like%20to%20inquire%20about%20staying%20packages."
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn glass-panel"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="floating-tooltip">Chat with us</span>
        </a>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="floating-btn scroll-top-btn glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
