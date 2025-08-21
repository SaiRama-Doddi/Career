import "bootstrap/dist/css/bootstrap.min.css";

import image2 from "../../src/assets/career2.png";
import image3 from "../../src/assets/career3.jpg";
import offer from "../../src/assets/offer.png";
import '../Animation/animation.css'
import { useScrollAnimation } from '../Animation/useScrollAnimation';

const HomePage = () => {

const feature1 = useScrollAnimation<HTMLButtonElement>();
const feature2 = useScrollAnimation<HTMLButtonElement>();


  return (
    <div style={{ background: "linear-gradient(to bottom, #e5d9ea, #ffffff)" }}>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              {/* Badge Button */}
              <div className="d-flex my-4">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={offer}
                    alt="Best Choice Badge"
                      className="blink" 
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "-18px",
                      width: "78px",
                      height: "68px",
                      zIndex: 2,
                    }}
                  />
                  <button
                    style={{
                      background: "#a855f7",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px 26px",
                      fontWeight: 600,
                      fontSize: "18px",
                      boxShadow: "0 2px 8px rgba(168,85,247,0.15)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Chosen by Over 1000+ Students
                  </button>
                </div>
              </div>

              <h1 className="fw-bold mb-3">
                Your Trusted Partner to Global <br />
                <span style={{ color: "black", fontSize: "32px" }}>
                  Study Abroad & Aviation Careers
                </span>
              </h1>

              <p className="mb-3 text-muted">
                Study at Top Global Universities or Train to Become a Commercial Pilot...
              </p>

              {/* Buttons with scroll animation */}
            {/* Buttons with scroll animation */}
<div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
  <button
    className={`btn me-sm-3 mb-3 mb-sm-0 fade-up ${feature1.isVisible ? 'show' : ''}`}
    ref={feature1.ref}
    style={{
      backgroundColor: "#a855f7",
      borderColor: "#9b59b6",
      color: "white",
    }}
  >
    Book a Free Consulting Session
  </button>

  <button
    className={`btn fade-up ${feature2.isVisible ? 'show' : ''}`}
    ref={feature2.ref}
    style={{ borderColor: "#9b59b6", color: "#9b59b6" }}
  >
    Know More about Us
  </button>
</div>

            </div>

            {/* Right Side Images */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                className="position-relative"
                style={{ width: "100%", maxWidth: "320px", height: "280px" }}
              >
                <img
                  src={image2}
                  alt="Graduate"
                  className="rounded-4 shadow position-absolute"
                  style={{
                    width: "70%",
                    height: "200px",
                    objectFit: "cover",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                  }}
                />
                <img
                  src={image3}
                  alt="Pilot"
                  className="rounded-4 shadow position-absolute"
                  style={{
                    width: "70%",
                    height: "200px",
                    objectFit: "cover",
                    top: "20%",
                    left: "25%",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
