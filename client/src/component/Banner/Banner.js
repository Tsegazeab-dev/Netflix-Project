import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'

function Banner() {
    const [singleMovie, setSingleMovie] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(`http://localhost:3333/api/fetchNetflix`)
                setSingleMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("error",error);
            }
        })()
    }, []);
    console.log(singleMovie)
    function truncate(str, n){
return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
  return (
 <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}")`,

    }}>
    <div className='banner__contents'>
        <h1 className='banner__title'>
            {singleMovie?.title || singleMovie?.name || singleMovie?.original_name} 
        </h1>

        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h3 className='banner__description'>{truncate(singleMovie?.overview, 150)}</h3>
    </div>
    <div className='banner__fadeBottom'></div>
 </header>
  )
}

export default Banner;