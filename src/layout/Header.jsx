import { Link } from "react-router-dom";

function Header() {
  return (
    <header   style={{
      background: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(.1px)",
      padding: "15px 0",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
    }}>
    
      <nav>
        <ul style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "center",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}>
          <li><Link to="/home" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
          <li><Link to="/gallery" style={linkStyle}>Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}


const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "18px",
  transition: "0.3s",
};

export default Header;