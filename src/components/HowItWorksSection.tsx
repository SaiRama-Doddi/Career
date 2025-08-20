const HowItWorksSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="https://img.freepik.com/free-photo/smiling-woman-talking-phone_23-2147656740.jpg" // replace with your image
              alt="Student Guidance"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          {/* Right Side - Steps */}
          <div className="col-md-6">
            <div className="p-4 rounded-4 shadow-sm border">
              {/* Badge */}
              <span
                className="badge bg-light text-dark mb-3"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                See How it Works
              </span>

              {/* Steps */}
              <div className="mb-3">
                <p className="fw-bold mb-1">1. Get Started with Expert Guidance</p>
                <p className="text-muted">
                  We start with a one-on-one consultation to understand your goals and guide you on the right path.
                </p>
              </div>

              <div className="mb-3">
                <p className="fw-bold mb-1">2. Your Personalized Action Plan</p>
                <p className="text-muted">
                  We design a clear, customized roadmap tailored to your aspirations, timelines, and needs.
                </p>
              </div>

              <div className="mb-3">
                <p className="fw-bold mb-1">3. Get Best-in-Class Trainings and Applications Secured</p>
                <p className="text-muted">
                  From applications to world-class training, we handle it all — so your journey stays smooth and stress-free.
                </p>
              </div>

              <div className="mb-4">
                <p className="fw-bold mb-1">4. Set your Success Journey Ready to Take Off</p>
                <p className="text-muted">
                  We prepare you for success — be it your academic journey or aviation training — with confidence.
                </p>
              </div>

              {/* CTA Button */}
              <button className="btn btn-dark fw-bold px-4">
                Get Started Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
