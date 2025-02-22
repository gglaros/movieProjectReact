import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"
function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "thor", release_date: "2018" },
        { id: 3, title: "iron-man", release_date: "2022" },
        { id: 4, title: "venom", release_date: "2024" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="search for movies.."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                    (<MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>

        </div>
    );
}

export default Home