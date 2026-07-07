import React, { useState } from 'react';
import './LocalAttractions.css';

// Importing our generated images
import heroImg from '../assets/hero.png';
import suiteImg from '../assets/suite.png';
import diningImg from '../assets/dining.png';

const attractions = [
  {
    name: "Pragpur Heritage Village",
    distance: "8 km (15 mins drive)",
    desc: "India's first certified Heritage Village. Walk through beautiful cobblestone streets, slate-roofed houses, and ornamental water tanks that preserve medieval and colonial era architecture.",
    image: heroImg
  },
  {
    name: "Chintpurni Shakti Peeth",
    distance: "22 km (35 mins drive)",
    desc: "A highly revered Hindu pilgrimage site dedicated to Goddess Chhinnamastika. Thousands of pilgrims visit daily via the Chandigarh-Chintpurni highway.",
    image: suiteImg
  },
  {
    name: "Beas River Reservoir & Pong Dam",
    distance: "25 km (40 mins drive)",
    desc: "A massive artificial wetland sanctuary that attracts birdwatchers from all over. Offers scenic boating, sunset views, and sits in front of the Dhauladhar range.",
    image: diningImg
  },
  {
    name: "Historic Kangra Fort",
    distance: "31 km (50 mins drive)",
    desc: "Built by the Royal family of Kangra (Katoch Dynasty), this is one of the oldest and largest forts in the Himalayas, offering massive stone battlements and museum pieces.",
    image: heroImg
  }
];

export default function LocalAttractions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="attractions" className="attractions-section section-padding reveal">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Local Travel Guide</span>
          <h2 className="section-title">Explore Kangra & Pragpur</h2>
          <p className="section-desc-center">
            Dee Jay Resort is strategically located on the Chandigarh-Chintpurni-Dharamshala highway, making it convenient to tour these regional highlights.
          </p>
        </div>

        {/* Dynamic Attractions Presentation */}
        <div className="attractions-explorer glass">
          <div className="attractions-nav-list">
            {attractions.map((place, idx) => (
              <button
                key={idx}
                className={`attraction-nav-item ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="nav-item-num">0{idx + 1}</div>
                <div className="nav-item-info">
                  <h4>{place.name}</h4>
                  <span>{place.distance}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="attraction-details-panel">
            <div className="panel-image-wrapper">
              <img src={attractions[activeIndex].image} alt={attractions[activeIndex].name} />
              <div className="panel-distance-badge">{attractions[activeIndex].distance}</div>
            </div>
            <div className="panel-content">
              <h3>{attractions[activeIndex].name}</h3>
              <p>{attractions[activeIndex].desc}</p>
              <div className="panel-guide-tip">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ask our front desk concierge to arrange a private cab charter or booking assistance.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
