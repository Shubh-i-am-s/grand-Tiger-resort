import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Accommodations', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Dining', href: '#dining' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Attractions', href: '#attractions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="nav-logo">
            <span className="logo-main">DEE JAY</span>
            <span className="logo-sub">RESORT</span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="nav-menu">
            {menuItems.map((item, idx) => (
              <li key={idx} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Actions */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="theme-toggle-btn clickable" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Quick Stay CTA */}
            <button onClick={onBookClick} className="btn btn-luxury nav-book-btn clickable">
              Book Stay <ArrowRight size={14} style={{ marginLeft: 6 }} />
            </button>

            {/* Mobile Menu Icon */}
            <button 
              className="hamburger-btn clickable" 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            className="mobile-nav-drawer glass-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <ul className="mobile-nav-menu">
              {menuItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="mobile-nav-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a 
                    href={item.href} 
                    className="mobile-nav-link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="mobile-nav-item drawer-cta">
                <button 
                  onClick={() => {
                    setIsMobileOpen(false);
                    onBookClick();
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Book Stay Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
