import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <img className="w-full h-120 object-cover object-bottom" src={movie.posterURL} alt={movie.title} />
      <p className="mt-4">{movie.description}</p>
      <p className="mt-2">Rating: {movie.rating}</p>
      <Link
        to={`/movies/${movie.id}`}
        className="mt-4 inline-block px-4 py-2 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  )
}

export default MovieCard

