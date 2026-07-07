import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Compass, UtensilsCrossed } from 'lucide-react';
import './Dining.css';

const dishes = [
  {
    name: "Himachali Siddu",
    category: "specialty",
    desc: "Traditional steamed wheat bread stuffed with walnuts, poppy seeds, and local green herbs, served with warm ghee.",
    price: 280,
    badge: "Heritage recipe"
  },
  {
    name: "Kangra Dham Thali",
    category: "specialty",
    desc: "Slow-cooked organic black lentils, yogurt-based chickpea madra, and sweet rice cooked in custom bronze pots.",
    price: 450,
    badge: "Dham Tradition"
  },
  {
    name: "Grilled Himalayan Trout",
    category: "european",
    desc: "Freshly caught mountain stream trout seasoned with rosemary and lemon, grilled over a firewood flame.",
    price: 680,
    badge: "Chef's Signature"
  },
  {
    name: "Wild Morel Mushroom Risotto",
    category: "european",
    desc: "Italian arborio rice folded with fresh Kangra pine wood morels and local goat cheese.",
    price: 520,
    badge: "Seasonal"
  },
  {
    name: "Rhododendron Custard Tart",
    category: "desserts",
    desc: "A rich butter tart filled with sweet custard infused with handpicked organic rhododendron blossoms.",
    price: 240,
    badge: "Floral Delicacy"
  }
];

export default function Dining() {
  const [menuFilter, setMenuFilter] = useState('specialty');

  const filteredDishes = dishes.filter(d => d.category === menuFilter);

  return (
    <section id="dining" className="dining-section section-padding">
      <div className="container">
        {/* Core Layout Grid */}
        <div className="dining-main-grid">
          {/* Chef Profile Column */}
          <motion.div 
            className="chef-profile-card glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chef-image-box">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" 
                alt="Chef Vikram Dev" 
              />
              <div className="chef-tag glass-panel">
                <ChefHat size={18} className="chef-icon" />
                <div>
                  <h4>Chef Vikram Dev</h4>
                  <span>Himalayan Culinary Master</span>
                </div>
              </div>
            </div>
            <div className="chef-details">
              <span className="badge-premium">Organic Farm-To-Table</span>
              <h3>Handcrafted Gastronomy</h3>
              <p>
                "We gather wild herbs, morels, and fresh valley apples to craft recipes that reflect the soul of Himachal. Every dish bridges old campfire stories with contemporary fine dining."
              </p>
            </div>
          </motion.div>

          {/* Intro Text & Menu Explorer */}
          <div className="dining-explorer-panel">
            <span className="section-subtitle">Gourmet Pleasures</span>
            <h2 className="section-title left">The Shivalik <span>Dining Room</span></h2>
            <p className="dining-panel-intro">
              Dine in front of colossal glass windows frame-locking the snow-capped Dhauladhars. Our multi-cuisine restaurant sources seasonal organic produce to create rich dining memories.
            </p>

            {/* Menu Box */}
            <div className="dining-menu-box glass-panel">
              <div className="menu-box-nav">
                <button 
                  className={`menu-box-nav-btn clickable ${menuFilter === 'specialty' ? 'active' : ''}`}
                  onClick={() => setMenuFilter('specialty')}
                >
                  Himachali Specialty
                </button>
                <button 
                  className={`menu-box-nav-btn clickable ${menuFilter === 'european' ? 'active' : ''}`}
                  onClick={() => setMenuFilter('european')}
                >
                  European Selection
                </button>
                <button 
                  className={`menu-box-nav-btn clickable ${menuFilter === 'desserts' ? 'active' : ''}`}
                  onClick={() => setMenuFilter('desserts')}
                >
                  Sweet Endings
                </button>
              </div>

              <div className="menu-box-list">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={menuFilter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="menu-items-grid"
                  >
                    {filteredDishes.map((dish, idx) => (
                      <div key={idx} className="menu-item-row">
                        <div className="menu-item-top">
                          <h4>{dish.name}</h4>
                          <span className="dots-spacer"></span>
                          <strong>₹{dish.price}</strong>
                        </div>
                        <div className="menu-item-bottom">
                          <p>{dish.desc}</p>
                          <span className="menu-item-badge">{dish.badge}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
