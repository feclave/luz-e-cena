import axios from "axios";
import { Movie } from "../types";

const BASE_URL = "http://localhost:3001"

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`)
    return response.data;
};

//a promessa é tipada e o get também, então só poderão receber um array de movies