import React from "react";
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <ul className="contact-list">
        {/* Phone */}
        <li>
          <a href="tel:+447460057150" className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>+44 7460 057150</span>
          </a>
        </li>

        {/* Email */}
        <li>
          <a href="mailto:contact@amadeaacademy.com" className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>contact@amadeaacademy.com</span>
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a 
            href="https://www.instagram.com/amadea.academy/" 
            className="contact-item" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <span>@amadeaacademy</span>
          </a>
        </li>

        {/* Address */}
        <li>
            <a>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <span>England, United Kingdom</span>
          </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;
