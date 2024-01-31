import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-found-heading">Lost Your Way</h1>
    <p className="not-found-content">
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>

    <button type="button" className="not-found-pg-btn">
      <Link to="/">Go To Home</Link>
    </button>
  </div>
)

export default NotFound
