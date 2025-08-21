import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div>
           {/* Features Section */}
<section className="py-5">
  <div className="container">
    <div className="row text-center">
      
      {/* Feature 1 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
          {/* Left Side Image */}
               <FontAwesomeIcon
    icon={faPlane}
    className="me-3 rounded"
    style={{ width: '60px', height: '60px', fontSize: '60px', color: '#a855f7', backgroundColor: 'rgb(235, 223, 246)', padding: '12px' }}
   
  />
          {/* Right Side Content */}
          <div>
            <h5 className="fw-bold mb-1"> Aviation Training</h5>
            <p className="text-muted mb-0">
              Master the skies with professional Aviation Training for a soaring career.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
              <FontAwesomeIcon
    icon={faGlobe}
    className="me-3 rounded"
    style={{ width: '60px', height: '60px', fontSize: '60px', color: '#a855f7', backgroundColor: 'rgb(235, 223, 246)', padding: '12px' }}
   
  />
          <div>
            <h5 className="fw-bold mb-1">Study Abroad</h5>
            <p className="text-muted mb-0">
              Streamlining operations with reliable and efficient admin support.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
           <FontAwesomeIcon
    icon={faGraduationCap}
    className="me-3 rounded"
    style={{ width: '60px', height: '60px', fontSize: '60px', color: '#a855f7', backgroundColor: 'rgb(235, 223, 246)', padding: '12px' }}
   
  />
          <div>
            <h5 className="fw-bold mb-1">Career Counseling</h5>
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
  )
}

export default Features
