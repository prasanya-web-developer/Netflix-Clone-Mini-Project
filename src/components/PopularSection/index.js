import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import Footer from '../Footer'
import MovieItems from '../MovieItems'
import FailurePage from '../FailurePage'

import './index.css'

const isPopular = true

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class PopularSection extends Component {
  state = {
    popularMoviesList: [],
    apiStatus: apiConstant.initial,
  }

  componentDidMount() {
    this.getPopularMoviesList()
  }

  getPopularMoviesList = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const popularMovieApiUrl = 'https://apis.ccbp.in/movies-app/popular-movies'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(popularMovieApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const fetchData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
        overview: eachMovie.overview,
      }))
      this.setState({
        popularMoviesList: fetchData,
        apiStatus: apiConstant.success,
      })
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  onTryAgainPopularMovie = () => {
    this.getPopularMoviesList()
  }

  renderPopularSuccessView = () => {
    const {popularMoviesList} = this.state

    return (
      <ul className="popular-movie-list-container">
        {popularMoviesList.map(eachMovie => (
          <li key={eachMovie.id}>
            <MovieItems eachMovie={eachMovie} />
          </li>
        ))}
      </ul>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <FailurePage tryAgain={this.onTryAgainPopularMovie} />
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoaderView()
      case apiConstant.success:
        return this.renderPopularSuccessView()
      case apiConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar isPopular={isPopular} />
        <div className="popular-pg-container">{this.renderApiStatus()}</div>
        <Footer />
      </>
    )
  }
}

export default PopularSection
