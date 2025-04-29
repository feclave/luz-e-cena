import { useEffect, useState } from "react"
import { Movie } from "../types";

const useFilterMovies = (movies: Movie[]) => {
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    useEffect(() => {
        setFilteredMovies(movies) //quando a página for recarregada ele irá setar movies como filtered movies
    }, [movies]) //useEffect recebe um array de dependências

    const handleSearch = () => {
        const filtered = movies.filter((movie) => (
            movie.titulo.toLowerCase().includes(searchTerm.toLowerCase()) //filtered inlcui os filmes que possuem os termos buscados em seu titulo
        )); //função de seta com parênteses para retornar algo imediato
        setFilteredMovies(filtered) //filtered será o valor de setFilteredMovies
    };

    return {searchTerm, setSearchTerm, filteredMovies, handleSearch}
}

export default useFilterMovies

//toLowerCase: função para não receber erros de 'case sensitive'