import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';

export default function Contact() {
  return (
    <>
      <PortfolioNav />
      <div className="portfolio-container" style={{ marginTop: '50px' }}>
        <div className="contact-bar">
          <div>
            <p>Contact Info</p>
            <strong>srinath@gmail.com | +91 8309397596</strong>
          </div>
          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}
