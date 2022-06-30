import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpIcon from '@mui/icons-material/Help';
import requests from './data/requests';
import axios from 'axios';
import QuickView from './QuickView';
import { Link } from 'react-router-dom';


const Banner = () => {



    const [movie, setMovie] = useState([]);
    const [popup, setPopup] = useState(false);

    const clickPopup = () => {
        popup ? setPopup (false) : setPopup(true) ;
    }

    axios
        .get("https://api.themoviedb.org/3/trending/all/week?api_key=acadce2268a0e1bcdd56b5e18e06c4ce")
        .then(
            res => {
                //console.log(res);
            }
        )
        useEffect( () => {

            async function fetchData() {
                const request = await axios.get(requests.fetchTrending);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length -1)
                    ]
                );
            }
            // On joue la fonction !
            fetchData();

        }, [] ) ;
        



    const bannerStyle = {
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }

    // console.log(movie);
    // console.log(popup);

    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title"> { movie?.title || movie?.original_title || movie?.name } </h1>
                <p className="banner__description"> {movie?.overview} </p>
                <div className="banner__buttons">
                    <Link to={ `/video/${movie?.id}` }>
                        <button className="banner__button banner__button--play"> < PlayArrowIcon /> Lecture</button>
                    </Link>
                    <button className="banner__button" onClick={clickPopup}  > < HelpIcon />  Plus d'info</button>
                </div>
            </div>
            < QuickView bannerStyle={bannerStyle} movie={movie} popup={clickPopup} popupStatut={popup} />
        </header>
    );
};

export default Banner;