import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

import '../Animation/animation.css'
import { useScrollAnimation } from '../Animation/useScrollAnimation';
const Features = () => {
 const feature1 = useScrollAnimation<HTMLDivElement>();
const feature2 = useScrollAnimation<HTMLDivElement>();
const feature3 = useScrollAnimation<HTMLDivElement>();


  return (
    <div>
           {/* Features Section */}
<section className="py-5">
  <div className="container">
    <div className="row text-center">
      
  {/* Feature 1 */}

          <div
            className={`col-md-4 mb-4 fade-up ${feature1.isVisible ? 'show' : ''}`}
            ref={feature1.ref}
          >
            <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
              <FontAwesomeIcon
                icon={faPlane}
                className="me-3 rounded"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '60px',
                  color: '#a855f7',
                  backgroundColor: 'rgb(235, 223, 246)',
                  padding: '12px'
                }}
              />
              <div>
                <h5 className="fw-bold mb-1">Aviation Training</h5>
                <p className="text-muted mb-0">Master the skies with professional Aviation Training.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className={`col-md-4 mb-4 fade-up ${feature2.isVisible ? 'show' : ''}`}
            ref={feature2.ref}
          >
            <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
              <FontAwesomeIcon
                icon={faGlobe}
                className="me-3 rounded"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '60px',
                  color: '#a855f7',
                  backgroundColor: 'rgb(235, 223, 246)',
                  padding: '12px'
                }}
              />
              <div>
                <h5 className="fw-bold mb-1">Study Abroad</h5>
                <p className="text-muted mb-0">Reliable and efficient support.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className={`col-md-4 mb-4 fade-up ${feature3.isVisible ? 'show' : ''}`}
            ref={feature3.ref}
          >
            <div className="p-4 border rounded-4 shadow-sm h-100 d-flex align-items-center text-start">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="me-3 rounded"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '60px',
                  color: '#a855f7',
                  backgroundColor: 'rgb(235, 223, 246)',
                  padding: '12px'
                }}
              />
              <div>
                <h5 className="fw-bold mb-1">Career Counseling</h5>
                <p className="text-muted mb-0">Unlock your potential with personalized counseling.</p>
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
