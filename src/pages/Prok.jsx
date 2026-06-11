import { Link } from 'react-router-dom';
import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';

export default function Prok() {
  return (
    <>
      <PortfolioNav />
      <div className="portfolio-container" style={{ marginTop: '50px' }}>
        <div id="projects" className="section">
          <h2 className="section-heading">📁 Featured Projects</h2>
          <div className="flex-group" style={{ flexDirection: 'column' }}>

            <div className="card">
              <h3>College Management System</h3>
              <p>A robust Java backend using custom Linked Lists and sorting algorithms for college management.</p>
            </div>

            <Link to="/dsk" className="card">
              <h3>Java Calculator Application</h3>
              <p>A simple calculator application built with Java.</p>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
