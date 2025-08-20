const CTABanner = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white p-4 rounded-3 shadow"
          style={{
            background: "linear-gradient(rgba(72,61,139,0.95), rgba(72,61,139,0.95)), url('https://img.freepik.com/free-photo/businessman-back_23-2147776292.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Content */}
          <div className="mb-3 mb-md-0">
            <h4 className="fw-bold mb-2">
              Global Careers Made Simple. <br />
              Get Your Profile Evaluated for Free!
            </h4>
            <p className="mb-0" style={{ maxWidth: "600px", fontSize: "15px" }}>
              Join the thousands of students and aspiring pilots who trusted us — 
              Personalized Guidance, Proven Strategies, and a Clear Path to Success.
            </p>
          </div>

          {/* Right Button */}
          <div>
            <button
              className="btn fw-semibold px-4 py-2"
              style={{
                backgroundColor: "#a855f7",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Book Your Free Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
