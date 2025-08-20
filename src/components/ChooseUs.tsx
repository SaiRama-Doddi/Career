const WhyChooseUs = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        {/* Tagline */}
        <div className="mb-3">
          <span
            className="px-4 py-1 rounded-pill text-white fw-semibold"
            style={{ backgroundColor: "#9b59b6", fontSize: "14px" }}
          >
            THE TRUSTED PARTNER FOR STUDY ABROAD & AVIATION TRAINING
          </span>
        </div>

        {/* Heading */}
        <h2 className="fw-bold display-5">Why you should choose us?</h2>
        <p className="text-muted mb-5" style={{ fontSize: "18px" }}>
          No two journeys are the same — that’s why we provide tailored, personalized
          support to help you <span className="text-success">succeed</span> with confidence.
        </p>

        {/* Content Row */}
        <div className="row align-items-center justify-content-center g-4">
          {/* Left - Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-photo/group-young-tourists-city_329181-14293.jpg"
              alt="Students"
              className="img-fluid rounded-3 shadow"
            />
          </div>

          {/* Right - Card */}
          <div className="col-md-6">
            <div className="p-4 rounded-4 shadow-sm text-start bg-white">
              {/* Small Badge */}
              <span
                className="badge rounded-pill mb-3"
                style={{ backgroundColor: "#2ecc71", fontSize: "12px" }}
              >
                PREMIUM GUIDANCE GUARANTEED
              </span>

              {/* Title */}
              <h3 className="fw-bold mb-3">
                Made Simple & <br /> Affordable ✨
              </h3>

              {/* Paragraph */}
              <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
                We cut through the noise, crush the confusion, and deliver honest,
                affordable, effective guidance for your global dreams.
              </p>

              {/* Button */}
              <button className="btn btn-dark fw-semibold px-4 py-2 rounded-pill">
                Get Started Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
