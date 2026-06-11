import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bike from './pages/Bike';
import Inventory from './pages/Inventory';
import TestRide from './pages/TestRide';
import DSK from './pages/DSK';
import Prok from './pages/Prok';

export default function App() {
  return (
    <BrowserRouter basename="/ReactPort">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/test-ride" element={<TestRide />} />
        <Route path="/dsk" element={<DSK />} />
        <Route path="/prok" element={<Prok />} />
      </Routes>
    </BrowserRouter>
  );
}
