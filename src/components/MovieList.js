import React from 'react'
import { MovieCard } from './MovieCard'

const MoviesList = ({movies}) => {
  console.log(movies)
  return (
    <div>
        {movies.map((movie)=>(
          <MovieCard  movie={movie} key={movie.id} />
        ))}
    </div>
  )
}

export default MoviesList