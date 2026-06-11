import { Link } from 'react-router-dom';
import PortfolioNav from '../components/PortfolioNav';
import '../styles/portfolio.css';
import '../styles/bike.css'; // for port.css-like styles

export default function Home() {
  const skills = ['HTML', 'CSS', 'Basic JavaScript', 'Basic Python'];

  const projects = [
    { title: 'Portfolio Website', desc: 'Personal website built using HTML & CSS.', link: '/' },
    { title: 'Bike Show Room Website', desc: 'Simple website design using HTML and CSS.', link: '/bike' },
    { title: 'Java Calculator Application', desc: 'A simple calculator application built with Java.', link: '/dsk' },
    { title: 'Java College Management Application', desc: 'A college management system built with Java.', link: '/prok' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    e.target.reset();
  }

  return (
    <div style={{ background: '#f4f4f4', color: '#333', minHeight: '100vh', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Hero */}
      <header style={{ background: '#222', color: 'white', textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Srinath</h1>
        <p style={{ fontSize: '18px', color: '#ccc' }}>Beginner Web Developer | Learning HTML &amp; CSS</p>
        <a href="#projects" style={{
          display: 'inline-block', marginTop: '20px', padding: '12px 28px',
          background: '#ff9800', color: 'white', textDecoration: 'none',
          borderRadius: '6px', fontWeight: 'bold'
        }}>View My Work</a>
      </header>

      {/* Nav */}
      <nav style={{
        background: '#333', textAlign: 'center', padding: '12px 20px',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        {['About', 'Skills', 'Education', 'Projects', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: 'white', textDecoration: 'none', margin: '0 14px',
            fontWeight: 'bold', fontSize: '14px'
          }}>{item}</a>
        ))}
      </nav>

      <div style={{ width: '85%', maxWidth: '1100px', margin: 'auto', padding: '40px 0' }}>

        {/* About */}
        <section id="about" style={sectionStyle}>
          <h2 style={h2Style}>About Me</h2>
          <p style={{ color: '#555', marginBottom: '10px' }}>Hello! My name is Srinath.</p>
          <p style={{ color: '#555' }}>I am passionate about web development and currently learning HTML and CSS. I enjoy building clean and creative websites.</p>
        </section>

        {/* Skills */}
        <section id="skills" style={sectionStyle}>
          <h2 style={h2Style}>My Skills</h2>
          <SkillBox skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" style={sectionStyle}>
          <h2 style={h2Style}>My Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '10px' }}>
            {projects.map(p => (
              <Link key={p.title} to={p.link} style={cardStyle}>
                <h3 style={{ color: '#222', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={sectionStyle}>
          <h2 style={h2Style}>Contact Me</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <input type="text" placeholder="Your name" required style={inputStyle} />
            <input type="email" placeholder="Your email" required style={inputStyle} />
            <input type="tel" placeholder="Your phone number" pattern="[0-9]{10}" style={inputStyle} />
            <textarea rows={4} placeholder="Your message" required style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }} />
            <input type="submit" value="Send Message" style={{
              ...inputStyle, background: '#333', color: 'white', cursor: 'pointer',
              fontWeight: 'bold', border: 'none'
            }} />
          </form>
        </section>

      </div>

      <footer style={{ textAlign: 'center', padding: '20px', background: '#222', color: '#aaa', fontSize: '14px' }}>
        <p>© 2026 My Portfolio | Designed by Srinath</p>
      </footer>
    </div>
  );
}

function SkillBox({ skills }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
      {skills.map(s => <SkillBadge key={s} label={s} />)}
    </div>
  );
}

function SkillBadge({ label }) {
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      onClick={() => setSelected(v => !v)}
      style={{
        background: selected ? '#222' : '#ff9800',
        color: 'white', padding: '8px 18px', borderRadius: '20px',
        fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', userSelect: 'none'
      }}
    >{label}</div>
  );
}

import React from 'react';

const sectionStyle = {
  background: 'white', marginBottom: '30px', padding: '36px 30px',
  borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
};

const h2Style = {
  fontSize: '26px', marginBottom: '16px', color: '#222',
  borderLeft: '4px solid #ff9800', paddingLeft: '12px',
  borderRight: '4px solid #ff9800'
};

const inputStyle = {
  padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '15px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const cardStyle = {
  background: '#f9f9f9', padding: '20px', borderRadius: '10px',
  border: '1px solid #e0e0e0', textDecoration: 'none', color: 'inherit', display: 'block',
  transition: 'transform 0.2s'
};
