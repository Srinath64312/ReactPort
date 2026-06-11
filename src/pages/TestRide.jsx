import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bike.css';

const bikeOptions = [
  'Kawasaki Z1100', 'Yamaha R1M', 'BMW S1000RR', 'Honda Dio 125',
  'TVS Apache RR 310', 'Royal Enfield Meteor 350', 'KTM RC 390',
  'Suzuki Hayabusa', 'Ducati Panigale V4', 'Harley-Davidson Fat Boy',
];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function TestRide() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', bike: '', date: '', time: '', message: '' });

  function handleChange(e) {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, bike, date, time } = form;
    if (!name || !email || !phone || !bike || !date || !time) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Thank you, ${name}! Your test ride for ${bike} on ${date} at ${time} has been booked. We'll contact you at ${email} or ${phone} to confirm.`);
    setForm({ name: '', email: '', phone: '', bike: '', date: '', time: '', message: '' });
  }

  return (
    <div className="test-page">
      <header className="test-header">
        <nav>
          <Link className="bike-logo" to="/bike">Velocity<span>Bikes</span></Link>
          <ul className="bike-nav-links">
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/test-ride">Test Ride</Link></li>
            <li><Link to="/bike#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="test-container">
        <div className="booking-form">
          <h2>Book Your Test Ride</h2>
          <form onSubmit={handleSubmit}>
            {[
              { id: 'name', label: 'Full Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'phone', label: 'Phone Number', type: 'tel' },
            ].map(field => (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input type={field.type} id={field.id} required value={form[field.id]} onChange={handleChange} />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="bike">Select Bike</label>
              <select id="bike" required value={form.bike} onChange={handleChange}>
                <option value="">Choose a bike...</option>
                {bikeOptions.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" required value={form.date} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <select id="time" required value={form.time} onChange={handleChange}>
                <option value="">Select time...</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea id="message" rows={4} placeholder="Any special requests or questions..." value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="book-btn">Book Test Ride</button>
          </form>
        </div>
      </div>

      <footer style={{ background: '#0b132b', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '3rem' }}>
        <p>&copy; 2026 Velocity Bikes Global. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
