import {Link} from 'react-router-dom'
import './index.css'

const MovieItems = props => {
  const {eachMovie} = props
  const {posterPath, id, title} = eachMovie

  return (
    <Link to={`/movies/${id}`}>
      <li className="movie-card-items">
        <img src={posterPath} alt={title} className="movie-card-img" />
      </li>
    </Link>
  )
}

export default MovieItems
