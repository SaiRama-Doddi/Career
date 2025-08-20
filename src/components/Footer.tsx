import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-5" style={{ backgroundColor: "#f7f0fb" }}>
      <div className="container">
        <div className="row text-start">
          {/* Logo & Description */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-primary">Wings To Wits</h4>
            <p style={{ fontSize: "14px" }}>
              Empowering students and professionals through expert guidance in
              global education, aviation training, and career development. Your
              success is our mission.
            </p>
            <div className="d-flex gap-3">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled mt-3" style={{ fontSize: "14px" }}>
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Study Abroad</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Aviation Training</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Career Counseling</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="mt-3 mb-1" style={{ fontSize: "14px" }}>
              Location: Chennai, TamilNadu, India
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              Phone: +91-XXXXXXXXXX
            </p>
            <p style={{ fontSize: "14px" }}>
              Email: official@wingstowits.com
            </p>
          </div>

          {/* Success Journey */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Start your Success Journey</h6>
            <p className="mt-3" style={{ fontSize: "14px" }}>
              <q className="fw-semibold">
                Success isn’t a Maybe, It’s a{" "}
                <span style={{ color: "#6c2cff", fontWeight: "bold" }}>Guarantee</span>
              </q>
            </p>
            <p style={{ fontSize: "14px" }}>
              With the right guidance, success is guaranteed. Let us help you
              achieve your study abroad dreams.
            </p>
            <button className="btn btn-outline-dark rounded-pill px-4">
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center py-3 mt-4" style={{ fontSize: "13px" }}>
          © 2025 Wings to Wits. All rights reserved. Design and Developed by{" "}
          <span className="fw-semibold">Digitakex Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
