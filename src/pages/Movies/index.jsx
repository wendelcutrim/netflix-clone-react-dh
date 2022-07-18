import Header from "../../components/Header";
import Movie from "../../components/Movie";
import "./style.css";
import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
    ]);

    function addMovie(){
        const newMovie = {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Add com a função",
            date: "200",
            votes: "10",
        }

        setMovies([newMovie, ...movies])
    }

    return (
        <div>
            <Header />
            <main className="movies">
                <div className="movies-list">
                    <button onClick={addMovie}>Add Filme</button>
                    {movies.map((movie) => {
                        return(
                            <Movie 
                                title={movie.title}
                                poster={movie.poster}
                                date={movie.date}
                                votes={movie.votes}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}