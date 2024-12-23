import React from 'react';
import { Facebook, Twitter, LinkedIn, Instagram, Linkedin } from 'react-bootstrap-icons'; 
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Navigation Links */}
          <div className="col-md-4 mb-3">
            <h5>SkillHill</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 2: Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Address: 123 Main Street, City, India</p>
            <p>Email: <a href="mailto:support@skillhill.com" className="text-white">support@skillhill.com</a></p>
            <p>Phone: +91 123 456 7890</p>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><Facebook size={24} /></a>
              <a href="#" className="text-white me-3"><Twitter size={24} /></a>
              <a href="#" className="text-white me-3"><Linkedin size={24} /></a>
              <a href="#" className="text-white"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} SkillHill. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
