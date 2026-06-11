import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';

export default function About() {
  return (
    <>
      <PortfolioNav />
      <div className="portfolio-container" style={{ marginTop: '100px' }}>
        <div className="section">
          <h2 className="section-heading">💻 About Me</h2>
          <p>I'm a computer science student learning web development and specialize customizing Linux environments.</p>
        </div>
        <div className="section">
          <h2 className="section-heading">🛠️ Interests</h2>
          <p>I specialize in Python and web development. My workflow is driven by modern development tools and practices.</p>
          <br />
          <p>Beyond code, I am interested in ancient sciences and philosophy.</p>
        </div>
      </div>
    </>
  );
}
