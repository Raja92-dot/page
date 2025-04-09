import { Link } from "react-router-dom";
import "./Footer.css"; // Optional (for external CSS)

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-nav">
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/about" className="footer-link">About</Link></li>
          <li><Link to="/contact" className="footer-link">Contact</Link></li>
          <li><Link to="/faq" className="footer-link">FAQ</Link></li>
          <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
        </ul>
      </nav>
      <p className="footer-text">© {new Date().getFullYear()} Design by RAJA KUMAR SINGH.</p>
    </footer>
  );
}

export default Footer;
