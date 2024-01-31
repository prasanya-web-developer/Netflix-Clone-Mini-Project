import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Footer from '../Footer'

import './index.css'

const isAccount = true

const AccountSection = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <NavBar isAccount={isAccount} />
      <div className="account-section-container">
        <h1 className="account-heading">Account</h1>
        <hr className="horizontal-line" />
        <div className="membership-container">
          <p className="text">Member ship</p>
          <div className="name-password-container">
            <p className="user-name-text">saira@gmail.com</p>
            <p className="password-text">
              Password : <span className="span-password">**********</span>
            </p>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="plan-container">
          <p className="text">Plan details</p>
          <p className="user-premium">Premium</p>
          <p className="hd-text">Ultra HD</p>
        </div>
        <hr className="horizontal-line" />
        <button className="logout-button" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  )
}

export default AccountSection
