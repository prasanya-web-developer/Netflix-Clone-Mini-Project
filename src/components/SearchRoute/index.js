import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import MovieItems from '../MovieItems'
import FailurePage from '../FailurePage'
import './index.css'

const searchRoute = true

const apiConstant = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchRoute extends Component {
  state = {
    searchInput: '',
    searchedMoviesList: [],
    apiStatus: apiConstant.initial,
  }

  getSearchMovieDetails = async searchInput => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const searchApiUrl = `https://apis.ccbp.in/movies-app/movies-search?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(searchApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const fetchSearchedMovieDetails = data.results.map(eachMovie => ({
        id: eachMovie.id,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
        backdropPath: eachMovie.backdrop_path,
      }))
      this.setState({
        searchedMoviesList: fetchSearchedMovieDetails,
        apiStatus: apiConstant.success,
        searchInput,
      })
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  renderNoSearchResultsFound = () => {
    const {searchInput} = this.state

    return (
      <div className="search-result-notfound">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1706190699/Group_7394_pucbha.png"
          alt="no movies"
          className="search-not-found"
        />
        <p className="search-not-found-text">
          Your search for {searchInput} did not find any matches.
        </p>
      </div>
    )
  }

  renderSearchSuccessView = () => {
    const {searchedMoviesList} = this.state
    return searchedMoviesList.length > 0 ? (
      <ul className="searched-movies-list">
        {searchedMoviesList.map(eachMovie => (
          <li key={eachMovie.id}>
            <MovieItems eachMovie={eachMovie} />
          </li>
        ))}
      </ul>
    ) : (
      this.renderNoSearchResultsFound()
    )
  }

  renderLoaderView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  onTryAgainSearch = () => {
    this.getSearchMovieDetails()
  }

  renderSearchFailureView = () => (
    <FailurePage tryAgain={this.getSearchMovieDetails} />
  )

  renderApiViewSearchResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoaderView()
      case apiConstant.success:
        return this.renderSearchSuccessView()
      case apiConstant.failure:
        return this.renderSearchFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar
          getSearchMovieDetails={this.getSearchMovieDetails}
          searchRoute={searchRoute}
        />
        <div className="search-result-container">
          {this.renderApiViewSearchResults()}
        </div>
      </>
    )
  }
}

export default SearchRoute
