import Header from "../../components/Header";
import Movie from "../../components/Movie";
import "./style.css";
import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    const BASE_URL = process.env.REACT_APP_API_TMDB_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_TMDB_KEY;
    const settings = {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    };

    async function addMovie(){
        const response = await fetch(`${BASE_URL}/movie/popular`, settings);

        const data = await response.json();
        
        //Inserindo o retorno da resposta da API no state movies.
        setMovies([...data.results, ...movies]);
    }

 /*    let [cart, setCart] = useState(0)

    function addCart(){
        setCart(cart += 1)
    }

    function removeCart(){
        setCart(cart -= 1)
    }
 */
    return (
        <div>
            <Header />
            <main className="movies">
                {/* <p>Qtd de itens no carrinho: {cart}</p>
                <button onClick={addCart}>Adicionar itens</button>
                <button onClick={removeCart}>Remover itens</button> */}
                <div className="movies-list">
                    <button onClick={addMovie}>Add Filme</button>
                    {movies.map((movie) => {
                        return(
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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