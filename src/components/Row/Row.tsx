import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import YouTube from 'react-youtube';
import './Row.css';

//import movieTrailer from 'movie-trailer';
const movieTrailer = require('movie-trailer');

const base_url = "https://image.tmdb.org/t/p/original";

interface Props {
  title: string,
  fetchUrl: string,
  isLargeRow? : boolean
}

const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow}) => {

  const [movies, setMovies] = useState<any[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then((url: string) => {
          const urlParams: any = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error: string) => console.log(error));
    }
  }


  return(
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge" }`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl &&
        <div style={{ padding: "40px" }}>
        <YouTube
          className="row_youtube"
          videoId={trailerUrl}
        />
      </div>
      }

    </div>
  );
};

export default Row;
