import "./style.css";
import Header from "../../components/Header";
import Movie from "../../components/Movie";
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
    ]);

    function addMovie(){
        const newMovie = {
            poster: "https://media.fstatic.com/2JWKqhEL-9h1JlW47iYyCfygw2M=/290x478/smart/media/movies/covers/2020/08/the-boys-22.jpg",
            title: "Teste State",
            date: "2020",
            votes: "9.5",
        }

        setMovies([newMovie, ...movies])
    }

    /* let [count, setCount] = useState(0)
    function addCart(){
        setCount(count += 1);
    }

    function removeCart(){
        if(count > 0){
            setCount(count -= 1);
        }else{
            setCount(count = 0)
        }
    } */

return (
    <div>
        <Header />
        <main id="movies">
            <div className="movies-list">
                {/* <p>Qtd de itens no carrinho: {count}</p>
                <button onClick={addCart}>Adicionar ao carrinho</button>
                <button onClick={removeCart}>Remover do carrinho</button> */}
                <button onClick={addMovie}>Adicionar filme</button>
                    {movies.map((movie) => {
                        return (
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