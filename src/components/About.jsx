import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart, Shield } from 'lucide-react';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Storytelling Text */}
          <div className="about-text-panel">
            <motion.span className="section-subtitle" variants={itemVariants}>
              Wilderness & Comfort
            </motion.span>
            <motion.h2 className="section-title left" variants={itemVariants}>
              A Luxury Jungle Stay Near <span>Mukki Gate, Kanha</span>.
            </motion.h2>
            
            <motion.p className="about-narrative-lead" variants={itemVariants}>
              Located just 1.1 km from the renowned Mukki Gate of Kanha National Park, Grand Tiger Resort offers an immersive wildlife stay experience for nature enthusiasts and jungle lovers.
            </motion.p>
            
            <motion.p className="about-narrative-text" variants={itemVariants}>
              Spanning over 3 acres of serene landscape, the resort is surrounded by dense Sal and Bamboo forests, setting the perfect atmosphere for a tranquil yet adventurous getaway. Inaugurated in 2012, we provide luxurious accommodation equipped with modern amenities while maintaining a captivating jungle theme.
            </motion.p>

            <motion.p className="about-narrative-text" variants={itemVariants}>
              Whether you are relaxing with a cup of coffee amidst the forest or embarking on a thrilling Kanha wildlife safari, the jungle is never too far away. Listen to the calls of the wild as you enjoy a sumptuous dinner from our multi-cuisine restaurant.
            </motion.p>

            {/* Quick stats counter blocks */}
            <motion.div className="about-achievements" variants={itemVariants}>
              <div className="achievement-block">
                <div className="achievement-icon-circle"><Shield size={20} /></div>
                <div>
                  <h5>Premium Lodge</h5>
                  <p>Kanha Tiger Reserve</p>
                </div>
              </div>
              <div className="achievement-block">
                <div className="achievement-icon-circle"><Heart size={20} /></div>
                <div>
                  <h5>10+ Years</h5>
                  <p>Trusted hospitality since 2012</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Handcrafted Parallax Image Gallery Layout */}
          <div className="about-parallax-gallery">
            <motion.div 
              className="about-gallery-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Image */}
              <div className="about-img-frame main-frame">
                <img 
                  src="/WhatsApp Image 2026-07-08 at 18.13.21.jpeg" 
                  alt="Grand Tiger Resort Jungle" 
                />
              </div>

              {/* Offset Image Card */}
              <motion.div 
                className="about-img-frame offset-frame glass-panel"
                style={{ y: 20 }}
                whileHover={{ y: 0, transition: { duration: 0.3 } }}
              >
                <img 
                  src="/WhatsApp Image 2026-07-08 at 18.07.42.jpeg" 
                  alt="Scenic Jungle Overlook" 
                />
              </motion.div>

              {/* Float Badge */}
              <motion.div 
                className="about-float-stamp glass-panel"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="stamp-ring">
                  <Compass size={24} className="stamp-icon" />
                  <div>
                    <h4>1.1 KM</h4>
                    <p>From Mukki Gate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
