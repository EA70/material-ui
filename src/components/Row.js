import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './data/requests';
import "./Row.scss" ;

const Row = ({title, fecthUrl, isPoster}) => {

    const [movies, setMovies] = useState([]);

    axios
        .get(requests.test)
        .then(
            res => {
                //console.log(res.data.results);
                //setMovies(res.data.results)
            }
        )
        useEffect( () => {

            async function fetchData() {
                const request = await axios.get(fecthUrl);
                setMovies(request.data.results);
            }
            // On joue la fonction !
            fetchData();

        }, [fecthUrl] ) ;

        //console.log(movies);

    return (
        <div className='row'>
            <h2 className="row__title"> {title} </h2>
            <div className="row__images">
                {movies.map((movie) => (
                    <div key={movie.id} >
                        {
                            isPoster ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                    alt="" 
                                    className="row__image" 
                                />
                            ) : (
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                                    alt="" 
                                    className="row__image" 
                                />
                            )
                        }
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Row;