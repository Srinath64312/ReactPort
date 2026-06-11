import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';

const education = [
  { degree: 'B.Tech CSE', institution: 'KLH University' },
  { degree: 'Intermediate', institution: 'FIITJEE' },
  { degree: 'Schooling', institution: 'Vasavi public school' },
];

export default function Education() {
  return (
    <>
      <PortfolioNav />
      <div className="portfolio-container" style={{ marginTop: '50px' }}>
        <div className="section">
          <h2 className="section-heading">🎓 Education</h2>
          <div className="flex-group">
            {education.map(edu => (
              <div key={edu.degree} className="card">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
