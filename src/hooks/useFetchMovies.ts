import { useEffect, useState } from "react";
import { Movie } from "../types";
import { getMovies } from "../api";

const useFetchMovies = () => {
  
    const [movies, setMovies] = useState<Movie[]>([]); //useState tipado só aceitará uma lista de filmes
    const [isLoading, setIsLoading] = useState<boolean>(false); //mostra que a requisição está sendo feita
    const [error, setError] = useState<string | null>(null); //exibe erros caso ocorram

    const fetchMovies = async () => { //função assíncrona para chamar os filmes na api
        
        setIsLoading(true)
        setError(null)
        try{
            const movies = await getMovies(); //função assíncrona para pegar os filmes no db
            setMovies(movies);
        }catch(err) {
            setError("Erro ao buscar filmes. Tente novamente")
            console.error(err)
        } finally{
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchMovies();
    });
  
    return { movies, isLoading, error}
}

export default useFetchMovies