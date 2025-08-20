import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div  style={{
    background: "linear-gradient(to bottom, #e5d9ea, #ffffff)",
    height: "100vh", // optional: adjust height as needed
    width: "100%",   // optional: adjust width as needed
  }}>
      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
           <span
  className="badge mb-3 px-3 py-2"
  style={{
    backgroundColor: "#a855f7",
    border: "1px solid #9b59b6",
    color: "white",
  }}
>
  🎓 Chosen by Over 1000+ Students
</span>

              <h1 className="fw-bold mb-3">
                Your Trusted Partner to Global <br />
                <span style={{color:"black",fontSize:"32px"}}>Study Abroad & Aviation Careers</span>
              </h1>
              <p className="mb-3 text-muted">
                Study at Top Global Universities or Train to Become a Commercial
                Pilot — with guaranteed support, exclusive scholarships, and
                proven success stories.
              </p>
              <p className="mb-4 text-muted">
                Navigating Success & Inspiring Journeys — Across the Globe
              </p>

              {/* Flags Row */}
              <div className="mb-4 d-flex justify-content-center justify-content-lg-start flex-wrap">
                <img src="https://flagcdn.com/w20/us.png" alt="USA" className="me-2 mb-2" />
                <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="me-2 mb-2" />
                <img src="https://flagcdn.com/w20/ca.png" alt="Canada" className="me-2 mb-2" />
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="me-2 mb-2" />
                <img src="https://flagcdn.com/w20/au.png" alt="Australia" className="me-2 mb-2" />
                <span className="fw-bold">& more...</span>
              </div>

              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
               <button
  className="btn me-sm-3 mb-3 mb-sm-0"
  style={{ backgroundColor: "#a855f7", borderColor: "#9b59b6",color: "white" }}
>
  Book a Free Consulting Session
</button>

                <button className="btn btn-outline-[#9b59b6]"   style={{borderColor: "#9b59b6",color: "#9b59b6" }}>
                  Know More about Us
                </button>
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
                    width: "70%",
                    height: "200px",
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

     {/* Features Section */}
<section className="py-5">
  <div className="container">
    <div className="row text-center">
      
      {/* Feature 1 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
          {/* Left Side Image */}
          <img 
            src="https://via.placeholder.com/60" 
            alt="Aviation Training" 
            className="me-3 rounded"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          {/* Right Side Content */}
          <div>
            <h5 className="fw-bold mb-1">✈️ Aviation Training</h5>
            <p className="text-muted mb-0">
              Master the skies with professional Aviation Training for a soaring career.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
          <img 
            src="https://via.placeholder.com/60" 
            alt="Study Abroad" 
            className="me-3 rounded"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h5 className="fw-bold mb-1">🌍 Study Abroad</h5>
            <p className="text-muted mb-0">
              Streamlining operations with reliable and efficient admin support.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
          <img 
            src="https://via.placeholder.com/60" 
            alt="Career Counseling" 
            className="me-3 rounded"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h5 className="fw-bold mb-1">🎯 Career Counseling</h5>
            <p className="text-muted mb-0">
              Unlock your potential with personalized career counseling.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
