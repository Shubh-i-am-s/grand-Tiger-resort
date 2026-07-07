import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    title: "Sublime mountain views & pristine rooms",
    text: "Dee Jay Resort exceeded all our expectations. Waking up to pristine views of the snow-clad Dhauladhars right from our family suite balcony was a dream. The service was impeccable.",
    author: "Rajesh Kumar",
    location: "Chandigarh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    title: "Outstanding local dining & hospitality",
    text: "We ordered the Himachali Dham and Chef Dev's steamed Siddu thali—absolutely outstanding. The staff is so polite and organized a lovely day tour to historic Pragpur village.",
    author: "Shreya Ghoshal",
    location: "Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    title: "The private pool villa is spectacular",
    text: "Our stay at the private pool villa was worth every rupee. Heated infinity plunge pool with direct sunset views over the valley. The 24/7 butler service made us feel like royalty.",
    author: "Aditya Roy",
    location: "New Delhi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex(prev => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Client Stories</span>
          <h2 className="section-title">Luxury Testimonials</h2>
          <p className="section-desc">
            Discover what our guests love about their experiences at Dee Jay Resort.
          </p>
        </div>

        <div className="reviews-carousel-box">
          {/* Animated quote icon background */}
          <div className="quote-backdrop">
            <Quote size={120} />
          </div>

          <div className="reviews-card-container glass-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="review-active-slide text-left"
              >
                {/* Rating stars */}
                <div className="review-stars-row">
                  {Array.from({ length: reviews[index].rating }).map((_, i) => (
                    <Star key={i} size={16} className="rating-star-icon" />
                  ))}
                </div>

                <h3 className="review-active-title">"{reviews[index].title}"</h3>
                <p className="review-active-text">{reviews[index].text}</p>

                {/* Profile card details */}
                <div className="review-profile-block">
                  <img src={reviews[index].avatar} alt={reviews[index].author} className="review-avatar" />
                  <div>
                    <h4>{reviews[index].author}</h4>
                    <span>{reviews[index].location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigations buttons */}
            <div className="reviews-carousel-nav">
              <button className="nav-circle-btn prev clickable" onClick={prevReview} aria-label="Previous Review">
                <ChevronLeft size={20} />
              </button>
              <div className="nav-dots flex-center">
                {reviews.map((_, i) => (
                  <span 
                    key={i} 
                    className={`nav-dot ${i === index ? 'active' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button className="nav-circle-btn next clickable" onClick={nextReview} aria-label="Next Review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
