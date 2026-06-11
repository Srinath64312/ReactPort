import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';

const skills = ['HTML5', 'CSS', 'JavaScript', 'Java', 'C Language', 'Git & GitHub'];

export default function Skills() {
  return (
    <>
      <PortfolioNav />
      <div className="portfolio-container" style={{ marginTop: '50px' }}>
        <div className="section">
          <h2 className="section-heading">🛠️ Skills</h2>
          <div className="skill-list">
            {skills.map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
