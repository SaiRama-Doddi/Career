const UnderstandingSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="p-4 rounded-3 shadow-sm border">
              {/* Tag */}
              <span
                className="badge bg-light text-dark mb-3"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                Full Clarity. Zero Confusion.
              </span>

              {/* Heading */}
              <h2 className="fw-bold mb-3">
                Total Understanding, <br /> Guaranteed 💡
              </h2>

              {/* Paragraph */}
              <p className="text-muted mb-4">
                We strongly believe every student’s journey MUST be guided with clarity,
                simplicity, and complete transparency at every step
              </p>

              {/* Progress Bars */}
              <div className="mb-3">
                <p className="fw-semibold mb-1">Via Other Consultancies</p>
                <div className="progress" style={{ height: "12px", borderRadius: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "25%", borderRadius: "8px" }}
                  >
                    25%
                  </div>
                </div>
              </div>

              <div>
                <p className="fw-semibold mb-1">With WingsToWits</p>
                <div className="progress" style={{ height: "12px", borderRadius: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "95%", borderRadius: "8px" }}
                  >
                    95%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://www.cae.com/media/xeqlty3n/academy-classroom-training.jpg" // replace with your image
              alt="Classroom Training"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
