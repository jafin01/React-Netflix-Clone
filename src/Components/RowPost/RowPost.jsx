import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response);
      setUrlId(response.data.results[0].key||'');
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleMovie(movie.id);
            }}
            className={
              props.isOriginals ? "row-poster-each" : "row-poster-each-small"
            }
            src={imageUrl + movie.backdrop_path}
            alt="poster"
          />
        ))}
      </div>
      { urlId && <Youtube opts = {opts} videoId={urlId} /> }
    </div>
  );
}

export default RowPost;
