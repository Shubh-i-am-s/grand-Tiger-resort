import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Check, BadgePercent, Printer, RotateCcw } from 'lucide-react';
import './BookingWizard.css';

const roomsList = [
  { id: 'deluxe', name: 'Deluxe Mountain Room', price: 3500, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80" },
  { id: 'premium', name: 'Premium Mountain View', price: 4800, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" },
  { id: 'suite', name: 'Executive Suite', price: 6500, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" },
  { id: 'family-suite', name: 'Grand Family Suite', price: 8200, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80" },
  { id: 'honeymoon-villa', name: 'Honeymoon Sanctuary Villa', price: 11500, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" },
  { id: 'pool-villa', name: 'Private Plunge Pool Villa', price: 15000, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" }
];

export default function BookingWizard({ initialData = {} }) {
  const [step, setStep] = useState(1);
  
  // Date states
  const [checkIn, setCheckIn] = useState(initialData.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialData.checkOut || '');
  const [guests, setGuests] = useState(initialData.guests || '2');
  const [selectedRoomId, setSelectedRoomId] = useState(initialData.roomId || 'deluxe');

  // Guest Info
  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: ''
  });

  const [bookingId, setBookingId] = useState('');
  const [nights, setNights] = useState(1);

  // Sync with initial states when passed from rooms or hero search
  useEffect(() => {
    if (initialData.roomId) setSelectedRoomId(initialData.roomId);
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
    if (initialData.guests) setGuests(initialData.guests);
  }, [initialData]);

  // Calculate duration
  useEffect(() => {
    if (checkIn && checkOut) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays || 1);
    }
  }, [checkIn, checkOut]);

  const selectedRoom = roomsList.find(r => r.id === selectedRoomId) || roomsList[0];
  const roomCost = selectedRoom.price * nights;
  const taxCost = Math.round(roomCost * 0.12); // 12% luxury tax
  const totalCost = roomCost + taxCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleConfirmReservation = () => {
    const randomVal = Math.floor(1000 + Math.random() * 9000);
    setBookingId(`DJR-2026-${randomVal}`);
    setStep(4);
  };

  return (
    <section id="booking" className="booking-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Secure Stay</span>
          <h2 className="section-title">Reservation <span>Wizard</span></h2>
          <p className="section-desc">
            Calculate pricing and lock your luxury cottage room choice securely. No advance card hold is required.
          </p>
        </div>

        <div className="wizard-container glass-panel">
          {/* Step Indicators */}
          <div className="wizard-step-progress-row">
            {[1, 2, 3, 4].map((s) => {
              const label = s === 1 ? "Dates & Room" : s === 2 ? "Guest Info" : s === 3 ? "Review Cost" : "Voucher";
              return (
                <React.Fragment key={s}>
                  <div className={`progress-ind-block ${step >= s ? 'active' : ''} ${step > s ? 'done' : ''}`}>
                    <span className="step-badge-num">
                      {step > s ? <Check size={14} /> : s}
                    </span>
                    <span className="step-badge-label">{label}</span>
                  </div>
                  {s < 4 && <div className={`progress-ind-line ${step > s ? 'done' : ''}`} />}
                </React.Fragment>
              );
            })}
          </div>

          {/* STEP 1: PARAMS & ROOM PICKER */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="wiz-step-body text-left">
              <div className="wiz-inputs-row">
                <div className="form-group">
                  <label htmlFor="checkin-wiz"><Calendar size={12} style={{ marginRight: 4 }} /> Check-In</label>
                  <input 
                    type="date" 
                    id="checkin-wiz" 
                    required 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-wiz"><Calendar size={12} style={{ marginRight: 4 }} /> Check-Out</label>
                  <input 
                    type="date" 
                    id="checkout-wiz" 
                    required 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests-wiz"><Users size={12} style={{ marginRight: 4 }} /> Guests</label>
                  <select 
                    id="guests-wiz"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <h4 className="wiz-section-subtitle-tag">Accommodations Selection</h4>
              <div className="wiz-rooms-picker-grid">
                {roomsList.map((room) => (
                  <div 
                    key={room.id}
                    className={`wiz-room-option-card clickable ${selectedRoomId === room.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRoomId(room.id)}
                  >
                    <div className="wiz-option-img">
                      <img src={room.image} alt={room.name} />
                      {selectedRoomId === room.id && (
                        <div className="wiz-option-check"><Check size={14} /></div>
                      )}
                    </div>
                    <div className="wiz-option-info">
                      <h4>{room.name}</h4>
                      <span>₹{room.price.toLocaleString('en-IN')} / night</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wiz-actions-footer">
                <div className="room-availability-badge">
                  <span className="dot-blink"></span> Room Availability Confirmed
                </div>
                <button type="submit" className="btn btn-primary clickable">
                  Continue stay
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: GUEST DETAILS */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="wiz-step-body text-left">
              <div className="wiz-inputs-grid-two">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    value={guestDetails.firstName}
                    onChange={handleInputChange}
                    placeholder="Rajesh"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    value={guestDetails.lastName}
                    onChange={handleInputChange}
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div className="wiz-inputs-grid-two">
                <div className="form-group">
                  <label htmlFor="email">Email ID</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={guestDetails.email}
                    onChange={handleInputChange}
                    placeholder="rajesh@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={guestDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label htmlFor="requests">Remarks / Custom Requirements</label>
                <textarea 
                  id="requests"
                  name="requests"
                  rows="3"
                  value={guestDetails.requests}
                  onChange={handleInputChange}
                  placeholder="Example: Need cab from Kangra Airport, early check-in, honeymoon bed styling."
                />
              </div>

              <div className="wiz-actions-footer">
                <button type="button" className="btn btn-outline clickable" onClick={handlePrevStep}>
                  Back Selection
                </button>
                <button type="submit" className="btn btn-primary clickable">
                  Calculate Cost
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: REVIEW BILL */}
          {step === 3 && (
            <div className="wiz-step-body text-left">
              <h4 className="wiz-section-subtitle-tag">Verify Details & Cost Calculations</h4>
              
              <div className="wiz-billing-summary-grid">
                {/* Stay data */}
                <div className="wiz-stay-summary glass-panel">
                  <div className="wiz-summary-row">
                    <span>Cottage Selected:</span>
                    <strong>{selectedRoom.name}</strong>
                  </div>
                  <div className="wiz-summary-row">
                    <span>Dates duration:</span>
                    <strong>{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</strong>
                  </div>
                  <div className="wiz-summary-row">
                    <span>Guest Count:</span>
                    <strong>{guests} Persons</strong>
                  </div>
                  <div className="wiz-summary-row">
                    <span>Primary Guest:</span>
                    <strong>{guestDetails.firstName} {guestDetails.lastName}</strong>
                  </div>
                  <div className="wiz-summary-row">
                    <span>Contact Info:</span>
                    <strong>{guestDetails.email} / {guestDetails.phone}</strong>
                  </div>
                </div>

                {/* Bill details */}
                <div className="wiz-invoice-summary glass-panel">
                  <h4>Billing Invoice</h4>
                  <div className="wiz-invoice-row">
                    <span>Stay Charges (₹{selectedRoom.price} &times; {nights} nights)</span>
                    <span>₹{roomCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="wiz-invoice-row">
                    <span>12% GST Luxury Tax</span>
                    <span>₹{taxCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="wiz-invoice-row total-row">
                    <span>Grand Total:</span>
                    <span>₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="wiz-invoice-note">
                    Secure reservations. All payments are collected directly during checkout.
                  </p>
                </div>
              </div>

              <div className="wiz-payment-mock-container" style={{ marginTop: '2.5rem' }}>
                <h4 className="wiz-section-subtitle-tag text-center" style={{ marginBottom: '1.5rem', borderBottom: 'none' }}>Select Payment Method</h4>
                <div className="payment-methods-grid">
                  <div className="payment-method-card clickable" onClick={handleConfirmReservation}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="pay-logo" />
                    <span>Pay via GPay</span>
                  </div>
                  <div className="payment-method-card clickable" onClick={handleConfirmReservation}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="pay-logo" />
                    <span>Pay via PhonePe</span>
                  </div>
                  <div className="payment-method-card clickable" onClick={handleConfirmReservation}>
                    <div className="pay-card-icon">💳</div>
                    <span>Credit/Debit Card</span>
                  </div>
                </div>
                <p className="wiz-invoice-note text-center" style={{ marginTop: '1.25rem' }}>
                  * Mock transaction. Selecting any payment method will generate a confirmed voucher.
                </p>
              </div>

              <div className="wiz-actions-footer">
                <button type="button" className="btn btn-outline clickable" onClick={handlePrevStep}>
                  Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="wiz-step-body success-body flex-center">
              <div className="success-icon-badge"><Check size={36} /></div>
              <h3>Reservation Voucher Confirmed</h3>
              <p>Your room lock is guaranteed. Show this stay voucher at the reception desk during arrival.</p>

              {/* PDF layout stay voucher */}
              <div className="reservation-voucher" id="resort-voucher-doc">
                <div className="voucher-head">
                  <div>
                    <h4>DEE JAY RESORT</h4>
                    <p>Dhaliara, Tehsil Dehra, Kangra, HP - 177103</p>
                  </div>
                  <div className="voucher-id-block">
                    <span>ID Reference:</span>
                    <strong>{bookingId}</strong>
                  </div>
                </div>

                <div className="voucher-main">
                  <div className="voucher-details-grid">
                    <div><span>Primary Traveler</span><h5>{guestDetails.firstName} {guestDetails.lastName}</h5></div>
                    <div><span>Room Category</span><h5>{selectedRoom.name}</h5></div>
                    <div><span>Check-In Hours</span><h5>{checkIn} (12:00 PM)</h5></div>
                    <div><span>Check-Out Hours</span><h5>{checkOut} (11:00 AM)</h5></div>
                    <div><span>Total Travelers</span><h5>{guests}</h5></div>
                    <div><span>Stay Duration</span><h5>{nights} Night{nights > 1 ? 's' : ''}</h5></div>
                  </div>

                  {guestDetails.requests && (
                    <div className="voucher-remarks-box">
                      <span>Traveler Remarks:</span>
                      <p>{guestDetails.requests}</p>
                    </div>
                  )}

                  <div className="voucher-bottom-price">
                    <div>
                      <span>Payable Amount at Counter</span>
                      <h3>₹{totalCost.toLocaleString('en-IN')} <small>(Taxes Included)</small></h3>
                    </div>
                    <div className="voucher-stamp-box">
                      <span>STATUS</span>
                      <strong>HOLD SECURED</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="voucher-actions-row">
                <button className="btn btn-outline clickable" onClick={() => window.print()}>
                  <Printer size={14} style={{ marginRight: 6 }} /> Print Voucher
                </button>
                <button 
                  className="btn btn-primary clickable"
                  onClick={() => {
                    setStep(1);
                    setCheckIn('');
                    setCheckOut('');
                    setGuestDetails({ firstName: '', lastName: '', email: '', phone: '', requests: '' });
                  }}
                >
                  <RotateCcw size={14} style={{ marginRight: 6 }} /> New Reservation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
