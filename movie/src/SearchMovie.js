import "./SearchMovie.css"
import React, {useState} from "react"

export default function SearchMovie() {
     
    const [query, setQuery]  = useState('')
    const [array, setArr] = useState([])

    const findMovie = async(e) => {
        
        e.preventDefault();
    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c9ef9b62e247c18b62a6338c7d557b3a&language=en-US&query=${query}&page=1&include_adult=false`;

        console.log(url);

        const res = await fetch(url);
        const data = await res.json();
        //console.log(data.results)
        setArr(data.results)

        console.log(data);
       console.log({array})
    }
    
    
    return(
        <div>
            <form className="form" onSubmit={findMovie}>
                <br />
                <br />
                <br />
                <input type="text" placeholder="Movie Name" name="moviename" value={query} onChange={(e)=> setQuery(e.target.value)} required></input>
                <button type="submit" className="button">&nbsp;&nbsp; Search &nbsp;&nbsp;</button>
            </form>
            <div className="movie-list">
                {array.filter(element => element.poster_path).map(element => (

                    <div className="card" key={element.id}>
                        
                        <img className="card-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`} />
                        <div className="card-content">
                            <h1>{element.title}</h1>
                            <p>Ratings : {element.vote_average}</p>
                            <p>Release Date : {element.release_date}</p>
                            <h5>{element.overview}</h5>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>

    )

}