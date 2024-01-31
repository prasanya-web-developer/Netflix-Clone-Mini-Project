import {Component} from 'react'
import {format} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import NavBar from '../NavBar'
import Footer from '../Footer'
import MovieItems from '../MovieItems'
import FailurePage from '../FailurePage'

import './index.css'

const isMovieDetails = true

const apiConstant = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const GenreList = props => {
  const {eachGenre} = props
  const {name} = eachGenre

  return (
    <li className="listItems">
      <p>{name}</p>
    </li>
  )
}

const AvailableLanguage = props => {
  const {eachLan} = props
  const {englishName} = eachLan

  return (
    <li className="listItems">
      <p>{englishName}</p>
    </li>
  )
}

class MovieDetails extends Component {
  state = {
    moviesDetailsList: [],
    apiStatus: apiConstant.initial,
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const movieApiUrl = `https://apis.ccbp.in/movies-app/movies/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(movieApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedGenreList = data.movie_details.genres.map(eachGenre => ({
        id: eachGenre.id,
        name: eachGenre.name,
      }))

      const updatedSimilarMovies = data.movie_details.similar_movies.map(
        eachMovie => ({
          backdropPath: eachMovie.backdrop_path,
          id: eachMovie.id,
          posterPath: eachMovie.poster_path,
          title: eachMovie.title,
        }),
      )

      const updatedAvailableLanguage = data.movie_details.spoken_languages.map(
        eachLanguage => ({
          id: eachLanguage.id,
          englishName: eachLanguage.english_name,
        }),
      )

      const updatedData = {
        adult: data.movie_details.adult,
        backdropPath: data.movie_details.backdrop_path,
        budget: data.movie_details.budget,
        genres: updatedGenreList,
        id: data.movie_details.id,
        overview: data.movie_details.overview,
        posterPath: data.movie_details.poster_path,
        releaseDate: data.movie_details.release_date,
        runtime: data.movie_details.runtime,
        similarMovies: updatedSimilarMovies,
        spokenLanguages: updatedAvailableLanguage,
        title: data.movie_details.title,
        voteAverage: data.movie_details.vote_average,
        voteCount: data.movie_details.vote_count,
      }
      this.setState({
        moviesDetailsList: updatedData,
        apiStatus: apiConstant.success,
      })
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  onTryAgainMovieDetails = () => {
    this.getMovieDetails()
  }

  renderLoaderView = () => (
    <>
      <NavBar />
      <div className="loader-container-movie" testid="loader">
        <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
      </div>
    </>
  )

  renderFailureView = () => (
    <>
      <NavBar />
      <FailurePage tryAgain={this.onTryAgainMovieDetails} />
    </>
  )

  renderSuccessView = () => {
    const {moviesDetailsList} = this.state
    const {
      adult,
      backdropPath,
      budget,
      genres,
      overview,
      releaseDate,
      spokenLanguages,
      runtime,
      similarMovies,
      title,
      voteAverage,
      voteCount,
    } = moviesDetailsList

    const movieInHour = Math.floor(runtime / 60)
    const movieInMinutes = runtime % 60
    const runtimeInHoursAndMinutes = `${movieInHour}h ${movieInMinutes}m`
    const movieCertificate = adult ? 'A' : 'U/A'
    const releasedYear = format(new Date(releaseDate), 'yyyy')
    const releasedDateFormate = format(new Date(releaseDate), 'do MMMM yyyy')

    return (
      <>
        <div
          style={{backgroundImage: `url(${backdropPath})`}}
          className="movie-details-page-container"
        >
          <NavBar isMovieDetails={isMovieDetails} />
          <div className="movie-details-content-container">
            <h1 className="movie-title">{title}</h1>
            <div className="runtime-certificate-container">
              <p className="runtime">{runtimeInHoursAndMinutes}</p>
              <p className="movie-certificate">{movieCertificate}</p>
              <p className="released-year">{releasedYear}</p>
            </div>
            <p className="movie-description">{overview}</p>
            <button className="movie-details-play-btn" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="more-movie-information-container">
          <div className="genre-lan-budget-container">
            <div className="info-container">
              <h1 className="heading">Genres</h1>
              <ul className="list">
                {genres.map(eachGenre => (
                  <GenreList eachGenre={eachGenre} key={eachGenre.id} />
                ))}
              </ul>
            </div>

            <div className="info-container">
              <h1 className="heading">Audio Available</h1>
              <ul className="list">
                {spokenLanguages.map(eachLan => (
                  <AvailableLanguage eachLan={eachLan} key={eachLan.id} />
                ))}
              </ul>
            </div>

            <div className="info-container">
              <h1 className="heading">Rating Count</h1>
              <p className="movie-count-text">{voteCount}</p>
              <h1 className="heading">Rating Average</h1>
              <p className="movie-count-text">{voteAverage}</p>
            </div>

            <div className="info-container">
              <h1 className="heading">Budget</h1>
              <p className="movie-count-text">{budget}</p>
              <h1 className="heading">Release Date</h1>
              <p className="movie-count-text">{releasedDateFormate}</p>
            </div>
          </div>
          <div className="more-like-this-container">
            <h1 className="more-like-heading">More like this</h1>
            <ul className="more-like-movie-list">
              {similarMovies.map(eachMovie => (
                <MovieItems eachMovie={eachMovie} key={eachMovie.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderApiView = () => {
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
    return (
      <>
        {this.renderApiView()}
        <Footer />
      </>
    )
  }
}

export default withRouter(MovieDetails)
