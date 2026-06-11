import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bike.css';

const bikes = [
  { id: 1, name: 'Kawasaki Z1000', category: 'Sports', price: 1279000, engine: '1043cc', stock: 3, img: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2020/09/Kawasaki-Z1000-Naked-Cropped-1.jpg?q=50&fit=crop&w=825&dpr=1.5' },
  { id: 2, name: 'Yamaha R1', category: 'Sports', price: 2550000, engine: '998cc', stock: 1, img: 'https://cdn.pixabay.com/photo/2020/02/21/09/00/isolated-4866914_640.png' },
  { id: 3, name: 'BMW S1000RR', category: 'Sports', price: 2000000, engine: '999cc', stock: 2, img: 'https://i.redd.it/rlcg80yi08bf1.jpeg' },
  { id: 4, name: 'Honda Dio 125', category: 'Scooter', price: 120000, engine: '125cc', stock: 5, img: 'https://bd.gaadicdn.com/upload/userfiles/images/67334bb5dfa02.jpg?tr=w-930' },
  { id: 5, name: 'TVS Apache RR310', category: 'Sports', price: 250000, engine: '312cc', stock: 0, img: 'https://www.motorcyclespecs.co.za/Gallery_M-Z_16/TVS-Apache-RR310-18-01.jpg' },
  { id: 6, name: 'Royal Enfield Meteor', category: 'Cruiser', price: 190000, engine: '349cc', stock: 4, img: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/134415/royalenfield-super-meteor-650-right-side-view7.jpeg?isig=0&wm=3&q=75' },
  { id: 7, name: 'KTM RC 390', category: 'Sports', price: 320000, engine: '373cc', stock: 3, img: 'https://media-cdn.tripadvisor.com/media/photo-o/0a/fa/f7/f9/ktm-rc-390.jpg' },
  { id: 8, name: 'Suzuki Hayabusa', category: 'Sports', price: 1800000, engine: '1340cc', stock: 1, img: 'https://imgcdnblog.carbay.com/wp-content/uploads/2021/12/07184211/1-500x333.jpg' },
  { id: 9, name: 'Ducati Panigale V4', category: 'Sports', price: 3500000, engine: '1103cc', stock: 0, img: 'https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2018/12/Ducati-Panigale-V4-R-20.jpg?w=402&h=268&ssl=1' },
  { id: 10, name: 'Harley Fat Boy', category: 'Cruiser', price: 2200000, engine: '1868cc', stock: 2, img: 'https://preview.redd.it/fat-boy-s-pros-cons-v0-nzjmjxy4drde1.jpeg?width=640&crop=smart&auto=webp&s=97cc649d16eb77a7c443446d6e0bbffada6ea541' },
];

const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedBike, setSelectedBike] = useState(null);

  const filtered = bikes.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || b.category === category)
  );

  return (
    <div className="inventory-page">
      <header className="inventory-header">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="inv-logo">Velocity<span>Bikes</span></div>
          <ul className="bike-nav-links">
            <li><Link to="/bike">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/test-ride">Test Ride</Link></li>
            <li><Link to="/bike#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="inventory-container">
        <div className="page-title">
          <h1>Premium Bike Inventory</h1>
          <p>Find your next ride</p>
        </div>

        <section className="controls">
          <input
            type="text"
            placeholder="Search bikes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Sports">Sports</option>
            <option value="Cruiser">Cruiser</option>
            <option value="Scooter">Scooter</option>
          </select>
        </section>

        <div className="inv-grid">
          {filtered.map(b => (
            <div key={b.id} className="inv-card">
              <img src={b.img} alt={b.name} />
              <div className="inv-content">
                <span className="inv-tag">{b.category}</span>
                <h3>{b.name}</h3>
                <p>{b.engine} Engine</p>
                <span className="inv-price">{formatter.format(b.price)}</span>
                <div className={`inv-stock ${b.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                  {b.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </div>
                <button
                  className="inv-btn"
                  disabled={b.stock === 0}
                  onClick={() => b.stock > 0 && setSelectedBike(b)}
                >
                  {b.stock === 0 ? 'Sold Out' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBike && (
        <div className="modal-backdrop" onClick={() => setSelectedBike(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <img src={selectedBike.img} alt={selectedBike.name} />
            <h2>{selectedBike.name}</h2>
            <p><b>Engine:</b> {selectedBike.engine}</p>
            <p><b>Category:</b> {selectedBike.category}</p>
            <p><b>Price:</b> {formatter.format(selectedBike.price)}</p>
            <p><b>Stock:</b> {selectedBike.stock}</p>
            <br />
            <Link to="/test-ride" className="inv-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              Book Test Ride
            </Link>
            <button className="inv-btn" style={{ marginTop: '10px' }} onClick={() => setSelectedBike(null)}>Close</button>
          </div>
        </div>
      )}

      <footer style={{ background: '#020617', textAlign: 'center', padding: '20px', marginTop: '40px', color: '#555' }}>
        <p>© 2026 Velocity Bikes</p>
      </footer>
    </div>
  );
}
