import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from "react";

function getRandomColor() {
  // Generates a pastel random color
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

const stats = [
  ["30+", "Countries Served"],
  ["95%+", "DGCA Exam Success Rate"],
  ["50+", "Years Combined Experience"],
  ["1000+", "Careers Shaped"],
  ["700+", "University Partnerships"],
  ["10+", "International Aviation School Tie-ups"],
];

const AboutSection = () => {
  const [hoverColors, setHoverColors] = useState(Array(stats.length).fill(""));

  const handleMouseEnter = (idx: number) => {
    const newColors = [...hoverColors];
    newColors[idx] = getRandomColor();
    setHoverColors(newColors);
  };
  const handleMouseLeave = (idx: number) => {
    const newColors = [...hoverColors];
    newColors[idx] = "";
    setHoverColors(newColors);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="text-uppercase text-primary fw-bold small d-block mb-2">
              Who We Are
            </span>
            <h2 className="fw-bold mb-3">
              South India’s Fastest Growing <br />
              Global Career Partner
            </h2>
            <p className="text-muted mb-4">
              Global Careers don’t happen by chance. At Wings To Wits, we combine
              expert counseling, industry connections, and a proven track record
              to help students achieve their education and aviation goals — faster,
              smarter, and with confidence.
            </p>
            {/* Stats Grid */}
            <div className="row g-3">
              {stats.map(([num, text], i) => (
                <div className="col-6" key={i}>
                <div
  className="px-3 py-3 rounded-4 shadow-sm text-center"
  style={{
    background: hoverColors[i] || "#f8f9fa",
    transition: "background 0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={() => handleMouseEnter(i)}
  onMouseLeave={() => handleMouseLeave(i)}
>
                    <h1 className="fw-bold text-success mb-1">{num}</h1>
                    <p className="mb-0 small text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side Images - Responsive Overlap */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="position-relative"
              style={{ width: "100%", maxWidth: "320px", height: "280px" }}
            >
              {/* Main Image (Graduate) */}
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=400&q=80"
                alt="Graduate"
                className="rounded-4 shadow position-absolute"
                style={{
                  width: "80%",
                  height: "220px",
                  objectFit: "cover",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
              />
              {/* Overlapping Image (Pilot) */}
              <img
                src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=400&q=80"
                alt="Pilot"
                className="rounded-4 shadow position-absolute"
                style={{
                  width: "80%",
                  height: "220px",
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
  );
};

export default AboutSection;