import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import { Movie } from '../../types'
import { getMovies } from '../../api'
import { useEffect, useState } from 'react'


const MovieSection = () => {
    const [movies, setMovies] = useState<Movie[]>([]); //useState tipado só aceitará uma lista de filmes

    const fetchMovies = async () => { //função assíncrona para chamar os filmes na api
        try{
            const movies = await getMovies(); //função assíncrona para pegar os filmes no db
            setMovies(movies);
        }catch(err) {
            console.error("Erro ao buscar filmes" + err)
        }
    };

    useEffect(() => {
        fetchMovies();
    })

  return (
    <main>
        <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText placeholder='Buscar filmes'/>
                <Button variant='icon'>
                    <FaSearch/>
                </Button>
            </Fieldset>
            <h1 className={styles.titulo}> Em cartaz </h1>
            <MovieList movies={movies}/>
        </section>
    </main>
  )
}

export default MovieSection