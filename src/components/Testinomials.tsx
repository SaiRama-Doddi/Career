const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-5 mb-4 mb-md-0">
            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{
                background: "linear-gradient(to right, #c084fc, #a855f7)",
                color: "white",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Testimonials
            </span>
            <h2 className="fw-bold">
              What They <br /> Say About Us
            </h2>
            <p className="text-muted">
              Discover the insights from our students about us and the excellence of our
              service. Everything is transparent and straightforward for your sense of
              justification.
            </p>
            {/* Arrows */}
            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-outline-dark rounded-circle">
                ←
              </button>
              <button className="btn btn-outline-dark rounded-circle">
                →
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="col-md-7">
            <div className="p-4 rounded-4 border shadow-sm">
              <span style={{ fontSize: "40px", color: "#aaa" }}>“</span>
              <p className="mb-4">
                I was shocked at how much consultancies charge—almost as much as tuition!
                This course gave me everything I needed at just 6500. From university
                shortlisting to visa processing, every step was crystal clear. Thanks to
                this, I secured my admission to a top German public university!
              </p>

              {/* User */}
              <div className="d-flex align-items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg" // replace with actual
                  alt="Rohan Monohar"
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="fw-bold mb-0">Rohan Monohar</h6>
                  <small className="text-muted">German University of Sciences</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Logos */}
        <div className="text-center mt-5">
          <h5 className="fw-bold mb-4">
            Join a community of achievers at leading global institutions!
          </h5>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0b/Trinity_College_Dublin.png" alt="Trinity" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1a/Emlyon_business_school_logo.png" alt="emlyon" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f5/University_of_Bristol_logo.png" alt="Bristol" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/CentraleNantes_logo.png" alt="Centrale Nantes" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0b/HEC_Paris_logo.png" alt="HEC Paris" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/UCD_logo.png" alt="UCD" height="60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
``
