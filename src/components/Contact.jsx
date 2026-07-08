import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, PhoneCall, Mail, MessageCircle, Send, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMail = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Contact & <span>Location</span></h2>
          <p className="section-desc">
            We are here to assist with booking customizations, private transfers, and local packages.
          </p>
        </div>

        <div className="contact-grid-main">
          {/* Info Panels Column */}
          <div className="contact-info-column">
            <div className="info-cards-stack-luxury">
              {/* Address */}
              <div className="contact-info-card glass-panel">
                <div className="card-icon-box"><MapPin size={20} /></div>
                <div>
                  <h4>Sanctuary Address</h4>
                  <p>Near Mukki Gate, Village: Manjitola, Kanha National Park, Baihar, District: Balaghat, Madhya Pradesh 481111, India</p>
                </div>
              </div>

              {/* Call Hotline */}
              <div className="contact-info-card glass-panel">
                <div className="card-icon-box"><PhoneCall size={20} /></div>
                <div>
                  <h4>24/7 Hotline Desk</h4>
                  <p className="contact-phone-num">+91 88895 02888</p>
                  <span>Connect with our reception desk instantly</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-card glass-panel">
                <div className="card-icon-box"><Mail size={20} /></div>
                <div>
                  <h4>Email Desk</h4>
                  <p className="contact-email-txt">grandtigerresort@gmail.com</p>
                  <span>Replies guaranteed within 2 hours</span>
                </div>
              </div>
            </div>

            {/* Real Google Maps Embed */}
            <div className="interactive-map-block">
              <iframe
                title="Grand Tiger Resort Location - Kanha National Park"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1472595688936!2d80.63942607497878!3d22.245310444985085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27c40dcfd07a07%3A0xa4e73a36c8c31f61!2sGrand%20Tiger%20Resort!5e0!3m2!1sen!2sin!4v1720450000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Inquiry Form Panel */}
          <div className="contact-form-container glass-panel">
            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div 
                  className="form-success-box flex-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                >
                  <div className="success-check-ring-box"><Check size={36} /></div>
                  <h3>Message Dispatched</h3>
                  <p>Thank you for reaching out, {formData.name}. Our booking concierge will respond to {formData.email} shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSendMail} className="contact-inquiry-form text-left">
                  <h3 className="form-heading-title">Send Stay Inquiry</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name-input">Full Name</label>
                    <input 
                      type="text" 
                      id="name-input" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Rajesh Sharma"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email-input">Email Address</label>
                    <input 
                      type="email" 
                      id="email-input" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rajesh@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subj-input">Subject Topic</label>
                    <input 
                      type="text" 
                      id="subj-input" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Event booking, private cab charter, suite upgrade"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="msg-input">Detailed Message</label>
                    <textarea 
                      id="msg-input" 
                      name="message" 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your stay request details..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-send-btn clickable">
                    Send Message <Send size={14} style={{ marginLeft: 6 }} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
