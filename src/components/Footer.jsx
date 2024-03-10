import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center">
      <div className="container">
        <div className="icons-container d-flex justify-content-center align-items-center">
          <a
            className="bi bi-instagram text-white"
            href="https://instagram.com/lelitecutandcolor?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            className="bi bi-facebook text-white"
            href="https://www.facebook.com/profile.php?id=100082958246140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            className="bi bi-whatsapp text-white"
            href="https://wa.me/33678079268"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            Whatsapp
          </a>
          <a
            className="bi bi-envelope-at text-white"
            href="mailto:lelitecutcolor@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
          >
            Mail
          </a>
        </div>
      </div>
      <div className="developpeur">© &lt;/&gt;Milkago 2024</div>
    </footer>
  );
};

export default Footer;
