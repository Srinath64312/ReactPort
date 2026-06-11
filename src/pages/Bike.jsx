import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BikeNav from '../components/BikeNav';
import '../styles/bike.css';

const bikeCards = [
  { name: 'Kawasaki Z1100', engine: '1100cc', price: '₹12.79 Lakh', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400' },
  { name: 'Yamaha R1M', engine: '998cc', price: '₹25.50 Lakh', img: 'https://cdn.pixabay.com/photo/2020/02/21/09/00/isolated-4866914_640.png' },
  { name: 'BMW S1000RR', engine: '999cc', price: '₹20.00 Lakh', img: 'https://i.redd.it/rlcg80yi08bf1.jpeg' },
  { name: 'Honda Dio 125', engine: '125cc', price: '₹1.20 Lakh', img: 'https://bd.gaadicdn.com/upload/userfiles/images/67334bb5dfa02.jpg?tr=w-930' },
  { name: 'TVS Apache RR 310', engine: '312cc', price: '₹2.50 Lakh', img: 'https://www.motorcyclespecs.co.za/Gallery_M-Z_16/TVS-Apache-RR310-18-01.jpg' },
  { name: 'Royal Enfield Meteor 350', engine: '349cc', price: '₹1.90 Lakh', img: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/134415/royalenfield-super-meteor-650-right-side-view7.jpeg?isig=0&wm=3&q=75' },
];

const testimonials = [
  { text: '"The team at Velocity Bikes helped me find my dream motorcycle. The test ride experience was amazing and the staff was incredibly knowledgeable!"', author: '— Rahul Sharma, Kawasaki Z1000 Owner' },
  { text: '"Best bike showroom in the city! Great selection, competitive prices, and excellent after-sales service. Highly recommend!"', author: '— Priya Patel, Royal Enfield Meteor Owner' },
  { text: '"I was hesitant about buying a sports bike but the team guided me perfectly. Now I own my dream KTM RC 390!"', author: '— Arjun Singh, KTM RC 390 Owner' },
];

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400', title: 'Premium Showroom', sub: 'State-of-the-art facility' },
  { img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=400', title: 'Expert Service', sub: 'Professional maintenance' },
  { img: 'https://i.redd.it/rlcg80yi08bf1.jpeg', title: 'Sports Collection', sub: 'High-performance machines' },
  { img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400', title: 'Cruiser Lineup', sub: 'Classic and modern cruisers' },
  { img: 'https://www.datocms-assets.com/119921/1714528734-test-riding-tips-with-honda-1.jpg?auto=format&w=740', title: 'Test Ride Experience', sub: 'Feel the power firsthand' },
  { img: 'https://cdn.wallpapersafari.com/45/30/4RpIhf.jpg', title: 'Iconic Brands', sub: 'Trusted manufacturers' },
];

export default function Bike() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', message: '' });
  const [feedback, setFeedback] = useState({ msg: '', color: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goToSlide(idx) {
    setCurrentSlide((idx + testimonials.length) % testimonials.length);
  }

  function handleContact(e) {
    e.preventDefault();
    const { name, email, message } = contactData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ msg: 'Please fill in all required fields.', color: '#ef4444' });
      return;
    }
    setFeedback({ msg: "Thank you! We'll get back to you soon.", color: '#10b981' });
    setContactData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFeedback({ msg: '', color: '' }), 5000);
  }

  return (
    <div style={{ background: '#f8f9fa', color: '#0b132b', fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      <BikeNav />

      {/* Hero */}
      <section className="bike-hero">
        <div className="hero-content">
          <h1>Experience the<br />Ultimate Ride</h1>
          <p>Premium motorcycles, expert service, and an unmatched showroom experience.</p>
          <Link to="/inventory" className="btn-cta">Explore Our Bikes</Link>
          {' '}
          <Link to="/test-ride" className="btn-cta" style={{ background: 'transparent', border: '2px solid white', marginLeft: '12px' }}>Book Test Ride</Link>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Velocity Bikes</h2>
            <p>We are India's premier motorcycle showroom, offering the finest selection of bikes from around the world. With over 10 years of experience, we've helped thousands of riders find their perfect machine.</p>
            <p>From sports bikes to cruisers, scooters to adventure bikes, we have it all under one roof.</p>
            <Link to="/inventory" className="btn-cta">View Our Collection</Link>
          </div>
          <div className="stats">
            <div className="stat-item"><div className="stat-number">500+</div><div className="stat-label">Bikes Sold</div></div>
            <div className="stat-item"><div className="stat-number">50+</div><div className="stat-label">Brands</div></div>
            <div className="stat-item"><div className="stat-number">10+</div><div className="stat-label">Years Experience</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="bike-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              { icon: '🔧', title: 'Expert Service', desc: 'Certified technicians for all makes and models' },
              { icon: '🛒', title: 'Sales', desc: 'Wide selection of new and pre-owned motorcycles' },
              { icon: '🚀', title: 'Test Rides', desc: 'Experience the thrill before you buy' },
              { icon: '💳', title: 'Finance', desc: 'Easy EMI options and loan assistance' },
            ].map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="bike-container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-slider">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-item ${i === currentSlide ? 'active' : ''}`}>
                <p>{t.text}</p>
                <span className="author">{t.author}</span>
              </div>
            ))}
            <div className="testimonial-controls">
              <button className="slider-btn" onClick={() => goToSlide(currentSlide - 1)}>&#10094;</button>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(i)} />
                ))}
              </div>
              <button className="slider-btn" onClick={() => goToSlide(currentSlide + 1)}>&#10095;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Preview */}
      <section className="bike-container" id="inventory">
        <h2 className="section-title">Current Inventory</h2>
        <div id="bike-grid">
          {bikeCards.map(b => (
            <div key={b.name} className="bike-card">
              <img src={b.img} alt={b.name} />
              <div className="bike-card-content">
                <h3>{b.name}</h3>
                <p style={{ color: '#666' }}>Engine: {b.engine}</p>
                <p style={{ fontWeight: 'bold', color: 'var(--accent-color)', fontSize: '1.2rem' }}>{b.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ textAlign: 'center', marginTop: '2rem', color: '#555' }}>Check Out Inventory For More...</h2>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="bike-container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Showroom Gallery</h2>
          <div className="gallery-grid">
            {galleryItems.map(g => (
              <div key={g.title} className="gallery-item">
                <img src={g.img} alt={g.title} />
                <div className="gallery-overlay"><h4>{g.title}</h4><p>{g.sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="bike-container">
          <h2 className="section-title" style={{ color: 'white' }}>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Visit Our Showroom</h3>
              <div className="contact-item"><i>📍</i><span>123 Bike Street, Auto City, Delhi 110001</span></div>
              <div className="contact-item"><i>📞</i><span>+91 98765 43210</span></div>
              <div className="contact-item"><i>✉️</i><span>info@velocitybikes.com</span></div>
              <div className="contact-item"><i>🕒</i><span>Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</span></div>
              <h3 style={{ marginTop: '2rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {['📘', '📷', '🐦', '💼'].map(icon => (
                  <a key={icon} href="#" style={{ color: 'white', fontSize: '1.5rem' }}>{icon}</a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContact} noValidate>
              <input type="text" placeholder="Your Name" required value={contactData.name} onChange={e => setContactData(p => ({ ...p, name: e.target.value }))} />
              <input type="email" placeholder="Your Email" required value={contactData.email} onChange={e => setContactData(p => ({ ...p, email: e.target.value }))} />
              <input type="tel" placeholder="Your Phone" value={contactData.phone} onChange={e => setContactData(p => ({ ...p, phone: e.target.value }))} />
              <textarea placeholder="Your Message" required value={contactData.message} onChange={e => setContactData(p => ({ ...p, message: e.target.value }))} />
              <button type="submit" className="btn-cta">Send Message</button>
              {feedback.msg && <p className="contact-feedback" style={{ color: feedback.color }}>{feedback.msg}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="bike-footer">
        <p>&copy; 2026 Velocity Bikes Global. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
