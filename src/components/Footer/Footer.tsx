import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section left-section">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            className="logo"
            alt="logo"
          />
        </div>
        <div className="footer-section column-section">
          <span>
            Made with <i className="fas fa-heart"></i> by Rohith Poyyeri
          </span>
          <span>rohithpoyyeri.com | &#169; {currentYear}</span>
        </div>

        <div className="footer-section column-section">
          <a href="/about" className="footerBanner" aria-label="About us">
            About us
          </a>
          <a
            href="/terms-and-condition"
            className="footerBanner"
            aria-label="Terms and condition"
          >
            Terms and condition
          </a>
          <a
            href="/privacy-policy"
            className="footerBanner"
            aria-label="Privacy policy"
          >
            Privacy policy
          </a>
        </div>

        <div className="footer-section social-section">
          <a
            href="https://rohithpoyyeri.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="footerBanner social-links"
            aria-label="rohithpoyyeri.com"
          >
            <i className="fas fa-globe"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohithpoyyeri/"
            aria-label="LinkedIn"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="footerBanner social-links"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
