import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 8px 16px;
  color: white;
  background: #673ab7;
  margin-top: 2rem;
  position: sticky;
  top: 100%;

  .footer-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .footer-section {
    width: 100%;
  }

  .column-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-section {
    display: flex;
    justify-content: center;
  }

  .social-links {
    color: white;
    margin: 0.5rem;
  }

  .footerBanner {
    color: white;
    text-decoration: none;
  }

  .logo {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: white;
  }

  .left-section {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;
