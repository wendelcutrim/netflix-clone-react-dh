import "./style.css";
import Header from "../../components/Header";
import Movie from "../../components/Movie";
import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    const BASE_URL = "https://api.themoviedb.org/3"
    const API_KEY = ""
    const settings = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    }

    async function addMovie(){
        const response = await fetch(`${BASE_URL}/movie/popular`, settings);
        const data = await response.json();

        // console.log(data);
        setMovies([...data.results, ...movies]);
    }

return (
    <div>
        <Header />
        <main id="movies">
            <div className="movies-list">
                <button onClick={addMovie}>Adicionar filme</button>
                    {movies.map((movie) => {
                        return (
                            <Movie 
                                title={movie.title}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                date={movie.release_date}
                                votes={movie.vote_average}
                            />
                        );
                    })}
            </div>
        </main>
    </div>
);
}