import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Compass, Eye, X, Move } from 'lucide-react';
import './VirtualTour.css';

export default function VirtualTour() {
  const [showVRModal, setShowVRModal] = useState(false);

  return (
    <section id="virtual-tour" className="tour-section section-padding">
      <div className="container">
        <div className="tour-card glass-panel">
          {/* Drone Video Backdrop */}
          <div className="tour-media-box">
            <img 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80" 
              alt="Drone view of Dee Jay Resort" 
              className="tour-backdrop-img"
            />
            <div className="tour-gradient-layer"></div>
            
            {/* Action buttons */}
            <div className="tour-actions-overlay flex-center">
              <motion.button 
                onClick={() => setShowVRModal(true)}
                className="tour-play-btn clickable"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Launch 360° VR Tour"
              >
                <Compass size={32} className="compass-vr-icon" />
              </motion.button>
            </div>
          </div>

          {/* Details */}
          <div className="tour-text-panel">
            <span className="section-subtitle">Immersive Experience</span>
            <h2 className="section-title left">Drone Overview & <span>360° VR Tour</span></h2>
            <p>
              Experience the spectacular setting of Dee Jay Resort before you pack your bags. Fly high over the Shivalik foothills and take a simulated VR stroll through our gardens, pools, and cottages.
            </p>
            <div className="tour-buttons-row">
              <button onClick={() => setShowVRModal(true)} className="btn btn-primary clickable">
                <Compass size={14} style={{ marginRight: 6 }} /> Start 360° Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VR 360° Mockup Modal */}
      <AnimatePresence>
        {showVRModal && (
          <motion.div 
            className="vr-modal-overlay flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVRModal(null)}
          >
            <button className="vr-modal-close clickable" onClick={() => setShowVRModal(null)}>
              <X size={32} />
            </button>

            <motion.div 
              className="vr-modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="vr-viewer-window">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
                  alt="360 View" 
                  className="vr-panoramic-img"
                />
                
                <div className="vr-nav-guides">
                  <Move size={24} className="vr-drag-icon" />
                  <span>Drag or swipe landscape to look around the Kangra valley</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
