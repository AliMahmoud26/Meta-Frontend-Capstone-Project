import React, { useState, useEffect } from 'react';

const Reservation = () => {
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reservationInfo, setReservationInfo] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  
    // Retrieve saved reservation from local storage
    const savedReservation = localStorage.getItem('reservation');
    if (savedReservation) {
      setReservationInfo(JSON.parse(savedReservation));
    }
  }, []);
  

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleGuestChange = (e) => {
    const value = Math.min(10, Math.max(1, e.target.value)); // Limit guests between 1 and 10
    setGuests(value);
  };

  const handleReservation = (e) => {
    e.preventDefault();
  
    if (!isLoggedIn) {
      alert('Please sign in before making a reservation.');
      return;
    }
  
    const reservation = {
      date: e.target.date.value,
      time: e.target.datetime.value,
      guests,
      occasion: occasion === 'other' ? e.target['other-occasion'].value : occasion,
    };
  
    setReservationInfo(reservation);
    localStorage.setItem('reservation', JSON.stringify(reservation));  // Save to local storage
    alert('Booking has been confirmed!');
  };
  

  const handleDelete = () => {
    setReservationInfo(null);
    localStorage.removeItem('reservation');
  };

  const handleEdit = () => {
    const savedReservation = JSON.parse(localStorage.getItem('reservation'));
    setReservationInfo(null);
    setUserInfo(savedReservation);
  };

  return (
    <section className='reservation'>
      <form onSubmit={handleReservation}>
        <div className="reserve-content date">
          <label htmlFor="date">Choose Date: </label>
          <input type="date" name="date" id="date" defaultValue={userInfo.date} />
        </div>
        <div className="reserve-content datetime">
          <label htmlFor="datetime">Choose Time: </label>
          <select name="datetime" id="datetime" defaultValue={userInfo.time}>
            <option value="10">Choose Time</option>
            <option value="10">10:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="2">2:00 PM</option>
            <option value="4">4:00 PM</option>
            <option value="6">6:00 PM</option>
            <option value="8">8:00 PM</option>
            <option value="10">10:00 PM</option>
          </select>
        </div>
        <div className="reserve-content guests">
          <label htmlFor="number">Number of Guests: </label>
          <input 
            type="number" 
            name="number-of-guests" 
            id="number" 
            value={guests} 
            onChange={handleGuestChange} 
            min="1" 
            max="10" 
          />
        </div>
        <div className="reserve-content">
          <label htmlFor="occasion">Occasion: </label>
          <select name="occasion" id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option value="friends">Choose an Occasion</option>
            <option value="friends">With Friends</option>
            <option value="family">With Family</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>
        {occasion === 'other' && (
          <div className="other">
            <label htmlFor="other-occasion">Other Occasion: </label>
            <input type="text" name='other-occasion' id='other-occasion' defaultValue={userInfo.occasion} />
          </div>
        )}
        <input type="submit" value="Make Your Reservation" className='btn' />
      </form>

      {reservationInfo && (
        <div className="reservation-summary" style={{ border: '2px solid #ccc', marginTop: '1rem', padding: '1rem' }}>
          <h3>Your Reservation</h3>
          <p>Date: {reservationInfo.date}</p>
          <p>Time: {reservationInfo.time}</p>
          <p>Guests: {reservationInfo.guests}</p>
          <p>Occasion: {reservationInfo.occasion}</p>
          <button className='btn' onClick={handleEdit}>Edit</button>
          <button className='btn' style={{marginLeft:'.5rem'}} onClick={handleDelete}>Delete</button>
        </div>
      )}
    </section>
  );
}

export default Reservation;
