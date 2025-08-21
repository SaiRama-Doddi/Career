import "bootstrap/dist/css/bootstrap.min.css";
import { useScrollAnimation } from "../Animation/useScrollAnimation";

const PilotOnboardSection = () => {
  // Scroll animation hooks
  const leftContent = useScrollAnimation<HTMLDivElement>();
  const mainImage = useScrollAnimation<HTMLImageElement>();
  const smallImage1 = useScrollAnimation<HTMLDivElement>();
  const smallImage2 = useScrollAnimation<HTMLDivElement>();
  const smallImage3 = useScrollAnimation<HTMLDivElement>();
  const smallImage4 = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div
            className={`col-lg-6 mb-5 mb-lg-0 fade-up ${
              leftContent.isVisible ? "show" : ""
            }`}
            ref={leftContent.ref}
          >
            <span className="badge bg-danger text-white fw-bold px-3 py-2 mb-3">
              NEW! PilotOnboard
            </span>

            <h2 className="fw-bold mb-3">
              Join <span className="text-primary">PilotOnboard</span>
            </h2>

            <h4 className="fw-semibold mb-3">
              Engineered to Train Successful Pilots.
            </h4>

            <p className="text-muted mb-4">
              From classroom to clouds, <b>PilotOnboard</b> delivers focused
              training, licensing support, and mentorship.
            </p>

            <div className="row g-3 mb-4">
              {[
                "DGCA Ground Mastery",
                "Flight School Pathway",
                "Industry Record Success Rate",
                "Professional Pilot Skills",
              ].map((feature, idx) => (
                <div className="col-6 d-flex align-items-center" key={idx}>
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="btn btn-lg fw-bold text-white"
              style={{ backgroundColor: "#800042" }}
            >
              Know more about PilotOnboard
            </a>
          </div>

          {/* Right Column - Circular Images */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{ width: "350px", height: "350px" }}
            >
              {/* Main Big Image */}
              <img
                src="https://images.unsplash.com/photo-1604697963529-df83f1e7b6b5?auto=format&fit=crop&w=400&q=80"
                alt="Pilot"
                className={`rounded-circle shadow fade-up ${
                  mainImage.isVisible ? "show" : ""
                }`}
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  zIndex: 2,
                }}
                ref={mainImage.ref}
              />

              {/* Top-Left Small Image with Tag */}
              <div
                className={`position-absolute fade-up ${
                  smallImage1.isVisible ? "show" : ""
                }`}
                style={{ top: "10px", left: "20px" }}
                ref={smallImage1.ref}
              >
                <div className="position-relative d-inline-block">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="small1"
                    className="rounded-circle shadow"
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                  />
                  <span
                    className="badge bg-primary position-absolute"
                    style={{ top: "-5px", right: "-5px", fontSize: "12px" }}
                  >
                    New
                  </span>
                </div>
              </div>

              {/* Top-Right Small Image */}
              <div
                className={`position-absolute fade-up ${
                  smallImage2.isVisible ? "show" : ""
                }`}
                style={{ top: "10px", right: "20px" }}
                ref={smallImage2.ref}
              >
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="small2"
                  className="rounded-circle shadow"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
              </div>

              {/* Bottom-Left Small Image */}
              <div
                className={`position-absolute fade-up ${
                  smallImage3.isVisible ? "show" : ""
                }`}
                style={{ bottom: "20px", left: "30px" }}
                ref={smallImage3.ref}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="small3"
                  className="rounded-circle shadow"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
              </div>

              {/* Bottom-Right Small Image with Tag */}
              <div
                className={`position-absolute fade-up ${
                  smallImage4.isVisible ? "show" : ""
                }`}
                style={{ bottom: "20px", right: "30px" }}
                ref={smallImage4.ref}
              >
                <div className="position-relative d-inline-block">
                  <img
                    src="https://randomuser.me/api/portraits/men/24.jpg"
                    alt="small4"
                    className="rounded-circle shadow"
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                  />
                  <span
                    className="badge bg-primary position-absolute translate-middle-x"
                    style={{ bottom: "-10px", left: "50%", fontSize: "12px" }}
                  >
                    Tag
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotOnboardSection;
