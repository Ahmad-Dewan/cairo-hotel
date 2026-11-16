import React from 'react';
import { FOOTER_LINKS } from '../data/hotelData';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Brand */}
        <div className="footer__brand">
          <p className="footer__logo"><em>C</em>airo</p>
          <p className="footer__tagline">
            A sanctuary of luxury and tranquility in the heart of Cairo.
            Where every detail is crafted to perfection.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div className="footer__col" key={heading}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Cairo Hotel &amp; Spa. All rights reserved.</p>
        <p>Crafted with care in Cairo</p>
      </div>
    </>
  );
}
