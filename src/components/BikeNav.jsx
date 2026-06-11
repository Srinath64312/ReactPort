import { Link } from 'react-router-dom';
import '../styles/bike.css';

export default function BikeNav({ page }) {
  return (
    <header className="bike-header">
      <nav>
        <Link className="bike-logo" to="/bike">
          Velocity<span>Bikes</span>
        </Link>
        <ul className="bike-nav-links">
          <li><Link to="/bike">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/test-ride">Test Ride</Link></li>
          <li><Link to="/bike#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
