import { Movie } from '../../types';
import CardMovie from '../CardMovie'
import styles from './MovieList.module.css'


interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => { //movies é um array de vários movie
  return (
    <ul className={styles.lista}>
        {movies.map((movie) => <CardMovie key={movie.id} {...movie} />)}
    </ul>
  )
}

export default MovieList

// movies.map: função callback que renderiza um CardMovie para cada movie.
// Movie[]: tipagem de um array