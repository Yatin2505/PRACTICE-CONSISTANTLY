
import React from 'react'

const MovieCard = ({title, rating, genre, releaseYear, isHit}) => {
  return (
  <div style={{border:"2px solid red" , borderRadius : " 10%", padding : "10px", margin:"10px" }}>
          
            <h1> MOVIE : {title}</h1>
            <h2> RATING : {rating}</h2>
            <h3> RELEASE ON  : {releaseYear}</h3>
            <h3> TYPE : {genre}</h3>
            <p> <b>Popularity : {isHit ? "SuperHit":"Average"}</b></p>
    </div>
  )
}

export default MovieCard