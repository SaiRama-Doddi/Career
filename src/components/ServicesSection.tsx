import "bootstrap/dist/css/bootstrap.min.css";
import { useScrollAnimation } from "../Animation/useScrollAnimation";

const ServicesSection = () => {
  // Scroll animation hooks
  const sectionHeading = useScrollAnimation<HTMLDivElement>();
  const card1 = useScrollAnimation<HTMLDivElement>();
  const card2 = useScrollAnimation<HTMLDivElement>();
  const card3 = useScrollAnimation<HTMLDivElement>();
  const ctaSection = useScrollAnimation<HTMLDivElement>();
 

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        {/* Small Section Tag & Heading */}
        <div
          className={`fade-up ${sectionHeading.isVisible ? "show" : ""}`}
          ref={sectionHeading.ref}
        >
          <p
            className="text-uppercase fw-bold text-muted mb-2"
            style={{ fontSize: "14px" }}
          >
            What We Offer
          </p>

          <h2 className="fw-bold mb-3">
            Tailored Services for Aspiring <br />
            <span className="text-dark">Aviators & Global Learners</span>
          </h2>

          <p
            className="text-muted mb-5"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Embark on your journey with expert guidance and top-tier resources.
            Whether you’re aiming for the skies or seeking world-class education overseas
          </p>
        </div>

        {/* Cards Row */}
        <div className="row g-4 mb-5">
          {/* Study Abroad Card */}
          <div
            className={`col-md-4 fade-up ${card1.isVisible ? "show" : ""}`}
            ref={card1.ref}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0 align-items-center">
                <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                  <h5 className="fw-bold">Study Abroad</h5>
                  <p className="text-muted">
                    Our study abroad program connects students with top universities across the globe.
                  </p>
                  <button className="btn btn-danger fw-bold mt-auto">Enroll Now</button>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://img.freepik.com/free-photo/student-girl-holding-notebooks_23-2147666500.jpg"
                    alt="Study Abroad"
                    className="img-fluid h-100 w-100"
                    style={{ borderRadius: "0 12px 12px 0", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Aviation Training Card */}
          <div
            className={`col-md-4 fade-up ${card2.isVisible ? "show" : ""}`}
            ref={card2.ref}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0 align-items-center">
                <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                  <h5 className="fw-bold">Aviation Training</h5>
                  <p className="text-muted">
                    Master the skies with professional aviation training for a high-flying global career.
                  </p>
                  <button className="btn btn-primary fw-bold mt-auto">Explore More</button>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://img.freepik.com/free-photo/smiling-pilot-uniform_23-2148162199.jpg"
                    alt="Aviation Training"
                    className="img-fluid h-100 w-100"
                    style={{ borderRadius: "0 12px 12px 0", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Career Counseling Card */}
          <div
            className={`col-md-4 fade-up ${card3.isVisible ? "show" : ""}`}
            ref={card3.ref}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0 align-items-center">
                <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                  <h5 className="fw-bold">Career Counseling</h5>
                  <p className="text-muted">
                    Our study abroad program connects students with top universities across the globe.
                  </p>
                  <button className="btn btn-success fw-bold mt-auto">Book a Session</button>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://img.freepik.com/free-photo/smiling-man-holding-books_23-2147666404.jpg"
                    alt="Career Counseling"
                    className="img-fluid h-100 w-100"
                    style={{ borderRadius: "0 12px 12px 0", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`fade-up ${ctaSection.isVisible ? "show" : ""}`}
          ref={ctaSection.ref}
        >
          <h4 className="fw-bold mb-2">Start your career dreams Today</h4>
          <p className="text-muted mb-4">
            Building a global future starts with one simple step
          </p>
          <button
            className="btn btn-lg fw-bold text-white"
            style={{ backgroundColor: "#b77df3" }}
          >
            Contact Us
          </button>
        </div>

      
      </div>
    </section>
  );
};

export default ServicesSection;
