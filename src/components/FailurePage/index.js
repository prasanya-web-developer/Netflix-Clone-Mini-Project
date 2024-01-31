import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import './index.css'

const FailurePage = props => {
  const {tryAgain} = props

  const onTryAgain = () => {
    tryAgain()
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <>
      <NavBar />
      <div className="failure-view-container">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706190121/Background-Complete_m9odqs.png"
          alt="failure view"
          className="failure-image"
        />
        <p className="failure-view-content">
          Something went wrong. Please try again
        </p>
        <button className="failure-button" type="button" onClick={onTryAgain}>
          Try Again
        </button>
      </div>
    </>
  )
}

export default FailurePage
