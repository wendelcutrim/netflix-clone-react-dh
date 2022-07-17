import "./style.css";
import Header from "../../components/Header";
import Movie from "../../components/Movie";
import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    const BASE_URL = process.env.REACT_APP_API_TMDB_EDNPOINT;
    const API_KEY = process.env.REACT_APP_API_TMDB_KEY;
    const settings = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    };

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
                <button onClick={addMovie}>Listar filmes Populares</button>
                    {movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                poster={`${process.env.REACT_APP_API_TMDB_IMG_ENDPOINT}${movie.poster_path}`}
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