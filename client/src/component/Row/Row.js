import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";
import movieTrailer from 'movie-trailer'
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/w200";

function Row({ title, fetchUrl, isLarge, theEnd }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [show, setShow] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:3333/api/${fetchUrl}`);
      console.log(request)
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  
  console.log(movies)
const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
};
  const handleClick = (singleMovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setShow(false);
    } else {
      movieTrailer(
        singleMovie?.title || singleMovie?.name || singleMovie?.original_name
      )
        .then((url) => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams)
          setTrailerUrl(urlParams.get("v"));
          setShow(true);
          
        })
        .catch((err) => console.log(err));
      
    }
  };
  console.log(trailerUrl);
  return (
   
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies?.map((singleMovie) => (
          <img
          onClick={()=>handleClick(singleMovie)}
            src={`${base_url}${
              isLarge ? singleMovie.poster_path : singleMovie.backdrop_path
            }`}
            alt={singleMovie.name}
            className="row__poster"
            style={isLarge ? { maxHeight: "250px" } : { maxHeight: "150px" }}
          />

          // <img src={`${base_url}${singleMovie.poster_path}`} alt={singleMovie.name} className={isLarge?"another classname":"row__poster"}/>

          // <img src={`${base_url}${singleMovie.poster_path}`} alt={singleMovie.name} className={`row__poster ${isLarge && "row__posterLarge"}`}/>
        ))}
      </div>
      <div style={{padding:"40px"}} id = "toggle" className={show? "show":"row__trailer"}>
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
      {theEnd && <div style={{marginTop: "30px", textAlign: "center", padding: "10px 0"}}>
        <img src="https://dx35vtwkllhj9.cloudfront.net/netflix/bookmarks/images/legal-logos.png" alt="" />
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp_still/25e43992558297.5e51672e972e6.gif" alt="" />
      </div>}
    </div>
  );
}

export default Row;
