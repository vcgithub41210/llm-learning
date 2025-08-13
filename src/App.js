
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  background: '#fff',
  borderBottom: '1px solid #eee',
  fontFamily: 'Inter, sans-serif',
};

const linkStyle = {
  margin: '0 20px',
  textDecoration: 'none',
  color: '#222',
  fontWeight: 500,
  fontSize: '1rem',
  letterSpacing: '0.05em',
};

const containerStyle = {
  maxWidth: '700px',
  margin: '60px auto 0 auto',
  padding: '0 20px',
  fontFamily: 'Inter, sans-serif',
};

function App() {
  return (
    <div>
      <nav style={navStyle}>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#about" style={linkStyle}>About Me</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
      <main style={containerStyle}>
        {/* Minimal sections as placeholders */}
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <section id="about">
          <h2>About Me</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

