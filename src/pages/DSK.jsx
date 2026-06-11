import { Link } from 'react-router-dom';
import '../styles/bike.css';

const features = [
  { title: '✓ Basic Operations', desc: 'Addition, Subtraction, Multiplication, and Division with decimal support.' },
  { title: '✓ Advanced Functions', desc: 'Percentage, Square Root, Power, and trigonometric functions.' },
  { title: '✓ Memory Functions', desc: 'Store, recall, and clear values for quick calculations.' },
  { title: '✓ History Tracking', desc: 'View and replay previous calculations.' },
  { title: '✓ Error Handling', desc: 'Graceful error messages and division by zero prevention.' },
  { title: '✓ User Interface', desc: 'Intuitive GUI built with Java Swing framework.' },
];

const techBadges = ['Java 8+', 'Swing GUI', 'Object-Oriented Programming', 'Exception Handling', 'Design Patterns', 'MVC Architecture'];

const codeSnippet = `public class Calculator {
    private double currentValue = 0.0;
    private String operator = "";
    private boolean newNumber = true;

    public void pressNumber(double num) {
        if (newNumber) {
            currentValue = num;
            newNumber = false;
        } else {
            currentValue = currentValue * 10 + num;
        }
    }

    public double pressOperator(String op) {
        if (!operator.isEmpty()) {
            calculate();
        }
        operator = op;
        newNumber = true;
        return currentValue;
    }

    public double calculate() {
        switch (operator) {
            case "+": return currentValue + buffer;
            case "-": return currentValue - buffer;
            case "*": return currentValue * buffer;
            case "/": return currentValue / buffer;
            default: return currentValue;
        }
    }

    public void clear() {
        currentValue = 0.0;
        operator = "";
        newNumber = true;
    }
}`;

export default function DSK() {
  return (
    <div className="dsk-page">
      <header className="dsk-header">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', letterSpacing: '2px', textTransform: 'uppercase' }}>Srinath</div>
          <ul className="bike-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/test-ride">Test Ride</Link></li>
            <li><Link to="/dsk">Java Project</Link></li>
          </ul>
        </nav>
      </header>

      <div className="dsk-container">
        <div className="dsk-hero">
          <h1>Java Calculator Application</h1>
          <p>A powerful and user-friendly calculator built with Java</p>
        </div>

        {/* Overview */}
        <div className="dsk-section">
          <h2>Project Overview</h2>
          <p>The Java Calculator Application is a comprehensive project demonstrating core Java concepts, object-oriented programming, and GUI development using Swing. This project showcases best practices in software design and clean code principles.</p>
          <div className="dsk-stats">
            <div className="stat-box"><div className="stat-number">500+</div><div className="stat-label-dsk">Lines of Code</div></div>
            <div className="stat-box"><div className="stat-number">10+</div><div className="stat-label-dsk">Features</div></div>
            <div className="stat-box"><div className="stat-number">4</div><div className="stat-label-dsk">Classes</div></div>
          </div>
        </div>

        {/* Features */}
        <div className="dsk-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="dsk-section">
          <h2>Technology Stack</h2>
          <p>This project utilizes the following technologies and concepts:</p>
          <div className="tech-stack">
            {techBadges.map(b => <span key={b} className="tech-badge">{b}</span>)}
          </div>
        </div>

        {/* Code Sample */}
        <div className="dsk-section">
          <h2>Code Sample</h2>
          <p>Here's a sample of the main Calculator class structure:</p>
          <div className="code-label">Calculator.java</div>
          <div className="code-block"><pre>{codeSnippet}</pre></div>
        </div>

        {/* UI Design */}
        <div className="dsk-section">
          <h2>User Interface Design</h2>
          <p>The calculator features a clean, organized layout with intuitive button placement mimicking real calculators:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li><strong>Display Area:</strong> Large, easy-to-read text field showing current input and results</li>
            <li><strong>Number Buttons:</strong> Grid layout (0-9) for quick number entry</li>
            <li><strong>Operator Buttons:</strong> Clearly marked for mathematical operations</li>
            <li><strong>Function Buttons:</strong> Advanced operations organized in a secondary row</li>
            <li><strong>Result Button:</strong> Prominent equals button to execute calculations</li>
          </ul>
        </div>

        {/* How to Run */}
        <div className="dsk-section">
          <h2>How to Run</h2>
          <div className="code-label">Command Line Instructions</div>
          <div className="code-block"><pre>{`# Compile the Java files\njavac *.java\n\n# Run the main application\njava CalculatorApp`}</pre></div>
          <p><strong>Requirements:</strong> Java Development Kit (JDK) 8 or higher</p>
        </div>

        {/* Learning Outcomes */}
        <div className="dsk-section">
          <h2>Learning Outcomes</h2>
          <p>Through this project, I've gained expertise in:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li>Building graphical user interfaces with Java Swing</li>
            <li>Event-driven programming and listener patterns</li>
            <li>Exception handling and error prevention</li>
            <li>Object-oriented design principles and best practices</li>
            <li>Code organization and maintainability</li>
            <li>Testing and debugging Java applications</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="dsk-cta">
          <h2 style={{ color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '10px', marginBottom: '16px' }}>Want to Learn More?</h2>
          <p>Check out the source code, documentation, and other projects in my portfolio.</p>
          <br />
          <Link to="/" className="dsk-btn">View Full Portfolio</Link>
          <button className="dsk-btn dsk-btn-sec" style={{ marginLeft: '10px' }}>Download Project</button>
        </div>
      </div>

      <footer className="bike-footer">
        <p>&copy; 2026 Velocity Bikes Global. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
