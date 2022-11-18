import React, {useEffect, useState} from "react";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import axios from '../../axios'
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  let [movie, setMovie] = useState('')
  useEffect(() => {
    axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`).then((response) => {
      let random = Math.floor(Math.random() * 21);
      console.log(response.data.results[random]);
      setMovie(response.data.results[random]);
    })
  }, [])
  return (
    <div className="banner" style={{backgroundImage : `url(${imageUrl+movie.backdrop_path || imageUrl+movie.poster_path})` }}>
      <div className="banner-content">
        <h1 className="banner-title">{movie.title || movie.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button banner-button-play">
            <FaPlay /> Play
          </button>
          <button className="banner-button banner-button-info">
            <AiOutlineInfoCircle /> More Info
          </button>
        </div>
        <h1 className="banner-description">
          {movie.overview}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
