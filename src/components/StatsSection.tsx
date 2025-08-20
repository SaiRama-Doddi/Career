import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StatsSection = () => {
  return (
    <div
      className="container-fluid py-5 d-flex justify-content-center"
      style={{ backgroundColor: "#f9f4ff", borderRadius: "20px" }}
    >
      <div className="row align-items-center w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Side Content */}
        <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
          <h2 className="fw-bold mb-5">
            Building Futures through{" "}
            <span
              style={{
                backgroundColor: "#9b4dff",
                color: "white",
                padding: "0 6px",
                borderRadius: "4px",
              }}
            >
              Expertise
            </span>{" "}
            and{" "}
            <span
              style={{
                backgroundColor: "#9b4dff",
                color: "white",
                padding: "0 6px",
                borderRadius: "4px",
              }}
            >
              Passion
            </span>
          </h2>

          {/* Admission Success */}
          <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-4">
            <h1 className="fw-bold display-4 me-3">95%</h1>
            <div>
              <p className="fw-semibold m-0">Successful Admissions</p>
              <p className="text-muted small m-0">
                Admissions to top universities with expert guidance.
              </p>
            </div>
          </div>

          {/* Pilot License */}
          <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-4">
            <h1 className="fw-bold display-4 me-3">92%</h1>
            <div>
              <p className="fw-semibold m-0">Pilot License Completion</p>
              <p className="text-muted small m-0">
                Structured training for confident, certified pilots.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Bar Graph */}
        <div className="col-md-6 text-center">
          <div
            className="d-flex justify-content-center align-items-end"
            style={{ height: "250px" }}
          >
            <div
              className="mx-2"
              style={{
                width: "50px",
                height: "80px",
                backgroundColor: "#d9b3ff",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="mx-2"
              style={{
                width: "50px",
                height: "130px",
                backgroundColor: "#c080ff",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="mx-2"
              style={{
                width: "50px",
                height: "180px",
                backgroundColor: "#a54dff",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="mx-2"
              style={{
                width: "50px",
                height: "220px",
                backgroundColor: "#8000ff",
                borderRadius: "8px",
              }}
            ></div>
          </div>
          <p className="fw-bold mt-3">30+ Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
