
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          style={{ fontSize: "48px", color: "#e0e0e0" }}
        >
          FAQ'S
        </h2>

        <div className="accordion" id="faqAccordion">
          {/* Question 1 */}
          <div className="accordion-item border-0 mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: "#9b4dff",
                  borderRadius: "8px",
                }}
              >
                What does WingsToWits Do?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                WingsToWits is a consultancy focused on helping students achieve
                their dreams. We offer expert guidance for study abroad, career
                counseling, and CPL training to ensure your success.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item border-0 mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bold text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "8px",
                }}
              >
                What study abroad services does Wings To Wits provide?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We provide services such as university applications, visa
                guidance, SOP/LOR assistance, and pre-departure training.
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item border-0 mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bold text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "8px",
                }}
              >
                How long does it take to complete the CPL Ground Classes?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                CPL Ground Classes usually take 6–8 months depending on the
                schedule and student progress.
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="accordion-item border-0 mb-3">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed fw-bold text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "8px",
                }}
              >
                What can I expect from a Counseling session with Wings To Wits?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our counseling sessions help you identify the best career and
                study abroad options tailored to your profile.
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="accordion-item border-0 mb-3">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed fw-bold text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "8px",
                }}
              >
                I have more queries on Study Abroad/Flight Training.
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can always reach out to us for personalized guidance on
                study abroad and aviation training.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
