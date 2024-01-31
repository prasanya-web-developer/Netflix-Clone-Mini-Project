import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import MoviesItems from '../MovieItems'
import NavBar from '../NavBar'

import './index.css'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  Failure: 'FAILURE',
}

class TopRatedMovie extends Component {
  state = {
    topRatedMoviesList: [],
    apiStatus: apiConstant.initial,
  }

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const topRatedApiUrl = 'https://apis.ccbp.in/movies-app/top-rated-movies'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(topRatedApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const fetchTopRatedMovie = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
        overview: eachMovie.overview,
      }))
      this.setState({
        apiStatus: apiConstant.success,
        topRatedMoviesList: fetchTopRatedMovie,
      })
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  onTryAgainTopRated = () => {
    this.getTopRatedMovies()
  }

  renderLoaderView = () => (
    <div className="loader-thumbnail-container">
      <div className="thumbnail-loading-container">
        <div className="loader-container-thumb" testid="loader">
          <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
        </div>
      </div>
    </div>
  )

  renderSuccessView = () => {
    const {topRatedMoviesList} = this.state
    return (
      <div className="top-rated-movie-container">
        <ul className="top-movie-un-list">
          {topRatedMoviesList.map(eachMovie => (
            <li key={eachMovie.id}>
              <MoviesItems eachMovie={eachMovie} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFailureView = () => (
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
        <button
          className="failure-button"
          type="button"
          onClick={this.onTryAgainTopRated}
        >
          Try Again
        </button>
      </div>
    </>
  )

  renderTopRatedApi = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoaderView()
      case apiConstant.success:
        return this.renderSuccessView()
      case apiConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderTopRatedApi()}</>
  }
}

export default TopRatedMovie
