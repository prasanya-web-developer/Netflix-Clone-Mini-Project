import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Loader from 'react-loader-spinner'

import NavBar from '../NavBar'
import Footer from '../Footer'
import MovieItems from '../MovieItems'
import TopRatedMovie from '../TopRatedMovie'
import './index.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

const isHome = true

const apiConstantOriginal = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const apiConstantTrending = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomePage extends Component {
  state = {
    apiStatusOriginal: apiConstantOriginal.initial,
    apiStatusTrending: apiConstantTrending.initial,
    randomMovie: [],
    originalMoviesList: [],
    trendingMoviesList: [],
  }

  componentDidMount() {
    this.getOriginalMoviesList()
    this.getTrendingMoviesList()
  }

  getOriginalMoviesList = async () => {
    this.setState({
      apiStatusOriginal: apiConstantOriginal.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const apiOriginalUrl = 'https://apis.ccbp.in/movies-app/originals'
    const response = await fetch(apiOriginalUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        overview: eachMovie.overview,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
      }))
      const randomNumber = Math.floor(Math.random() * updatedData.length)
      const randomMovie = updatedData[randomNumber]

      this.setState({
        originalMoviesList: updatedData,
        apiStatusOriginal: apiConstantOriginal.success,
        randomMovie,
      })
    } else {
      this.setState({apiStatusOriginal: apiConstantOriginal.failure})
    }
  }

  getTrendingMoviesList = async () => {
    this.setState({apiStatusTrending: apiConstantTrending.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiTrendingUrl = 'https://apis.ccbp.in/movies-app/trending-movies'
    const response = await fetch(apiTrendingUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        overview: eachMovie.overview,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
      }))
      this.setState({
        apiStatusTrending: apiConstantTrending.success,
        trendingMoviesList: updatedData,
      })
    } else {
      this.setState({apiStatusTrending: apiConstantTrending.failure})
    }
  }

  onRetryOriginalMovie = () => {
    this.getOriginalMoviesList()
  }

  onRetryTrendingMovie = () => {
    this.getTrendingMoviesList()
  }

  renderBannerSuccessView = () => {
    const {randomMovie} = this.state
    const {title, overview, backdropPath} = randomMovie

    return (
      <div
        style={{backgroundImage: `url(${backdropPath})`}}
        className="home-page-container"
      >
        <NavBar isHome={isHome} />
        <div className="banner-container">
          <h1 className="banner-movie-name">{title}</h1>
          <p className="overview-content">{overview}</p>
          <button type="button" className="play-button">
            Play
          </button>
        </div>
      </div>
    )
  }

  renderOriginalSuccessView = () => {
    const {originalMoviesList} = this.state
    return (
      <div className="movies-list-page">
        <Slider {...settings}>
          {originalMoviesList.map(eachMovie => (
            <MovieItems eachMovie={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    )
  }

  renderTrendingSuccessView = () => {
    const {trendingMoviesList} = this.state
    return (
      <div className="movies-list-page">
        <Slider {...settings}>
          {trendingMoviesList.map(eachMovie => (
            <MovieItems eachMovie={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    )
  }

  // <Slider className="slick" {...settings}></Slider> //

  renderBannerFailureView = () => (
    <>
      <NavBar isHome={isHome} />
      <div className="banner-failure-bg-container">
        <div className="banner-failure-content">
          <img
            src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706288817/alert-triangle_fwua6x.png"
            alt="failure view"
            className="warning-icon"
          />
          <p className="error-text">Something went wrong. Please try again</p>
          <button
            className="try-again-button"
            type="button"
            onClick={this.onRetryOriginalMovie}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  )

  renderOriginalFailureView = () => (
    <div className="banner-failure-bg-container">
      <div className="thumbnail-failure-content">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706288817/alert-triangle_fwua6x.png"
          alt="failure view"
          className="thumbnail-warning-icon"
        />
        <p className="thumbnail-error-text">
          Something went wrong. Please try again
        </p>
        <button
          className="thumbnail-try-again-button"
          type="button"
          onClick={this.onRetryOriginalMovie}
        >
          Try Again
        </button>
      </div>
    </div>
  )

  renderTrendingFailureView = () => (
    <div className="thumbnail-failure-bg-container">
      <div className="thumbnail-failure-content">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706288817/alert-triangle_fwua6x.png"
          alt="failure view"
          className="thumbnail-warning-icon"
        />
        <p className="thumbnail-error-text">
          Something went wrong. Please try again
        </p>
        <button
          className="thumbnail-try-again-button"
          type="button"
          onClick={this.onRetryTrendingMovie}
        >
          Try Again
        </button>
      </div>
    </div>
  )

  renderBannerLoader = () => (
    <>
      <NavBar isHome={isHome} />
      <div className="loader-main-container">
        <div className="banner-loading-container">
          <div className="loader-container" testid="loader">
            <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
          </div>
        </div>
      </div>
    </>
  )

  renderThumbnailLoader = () => (
    <div className="loader-thumbnail-container">
      <div className="thumbnail-loading-container">
        <div className="loader-container-thumb" testid="loader">
          <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
        </div>
      </div>
    </div>
  )

  renderBannerApiView = () => {
    const {apiStatusOriginal} = this.state
    switch (apiStatusOriginal) {
      case apiConstantOriginal.inProgress:
        return this.renderBannerLoader()
      case apiConstantOriginal.success:
        return this.renderBannerSuccessView()
      case apiConstantOriginal.failure:
        return this.renderBannerFailureView()
      default:
        return null
    }
  }

  renderOriginalApiView = () => {
    const {apiStatusOriginal} = this.state
    switch (apiStatusOriginal) {
      case apiConstantOriginal.inProgress:
        return this.renderThumbnailLoader()
      case apiConstantOriginal.success:
        return this.renderOriginalSuccessView()
      case apiConstantOriginal.failure:
        return this.renderOriginalFailureView()
      default:
        return null
    }
  }

  renderTrendingApiView = () => {
    const {apiStatusTrending} = this.state
    switch (apiStatusTrending) {
      case apiConstantTrending.inProgress:
        return this.renderThumbnailLoader()
      case apiConstantTrending.success:
        return this.renderTrendingSuccessView()
      case apiConstantTrending.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="home-page-main-container">
          {this.renderBannerApiView()}
          <div className="home-bg">
            <h1 className="trend-section-heading">Trending Now</h1>
            {this.renderTrendingApiView()}
            <h1 className="section-heading">Top Rated Movies</h1>
            <TopRatedMovie />
            <h1 className="section-heading">Originals</h1>
            {this.renderOriginalApiView()}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default HomePage
