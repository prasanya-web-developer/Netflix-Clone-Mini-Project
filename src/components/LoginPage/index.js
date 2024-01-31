import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  getUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMsg,
    })
  }

  render() {
    const {username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-bg-container">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706175993/Group_7399_krpf7p.png"
          alt="login website logo"
          className="website-logo"
        />
        <div className="login-form-container">
          <h1 className="login-heading">Login</h1>
          <form onSubmit={this.onSubmitForm} className="login-form">
            <label htmlFor="usernameInput" className="label">
              USERNAME
            </label>
            <input
              id="usernameInput"
              value={username}
              placeholder="Username"
              onChange={this.getUserName}
              type="text"
              className="input-bar"
            />
            <label htmlFor="userPassword" className="label">
              PASSWORD
            </label>
            <input
              id="userPassword"
              value={password}
              placeholder="Password"
              onChange={this.getPassword}
              type="password"
              className="input-bar"
            />
            {errorMsg.length > 0 && <p className="error-msg">{errorMsg}</p>}
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
