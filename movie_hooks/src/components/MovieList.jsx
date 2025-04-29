import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'
import { moviesData } from '../data'


/**
 * MovieList component
 * This component renders a list of movies with a filter component above it.
 * The filter component allows users to filter the list of movies by title and/or rating.
 * The list of movies is fetched from the moviesData array in the data file.
 */
const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    // set the movies state with the moviesData array
    setMovies(moviesData)
  }, [])

  const handleFilter = (filter) => {
    // filter the movies array based on the filter object
    const filtered = movies.filter((movie) => {
      // if the title filter is not empty and the movie title includes the filter title, return true
      if(filter.title && movie.title.toLowerCase().includes(filter.title.toLowerCase())) return true 
      // if the rating filter is not empty and the movie rating is greater than or equal to the filter rating, return true
      if (filter.rating && movie.rating >= filter.rating) return true;
      // otherwise return false
      return false;
    })
    // set the filteredMovies state with the filtered array
    setFilteredMovies(filtered);
  }
  return (
    <div className="flex flex-col items-center p-8 bg-gray-900">
      <h1 className="text-4xl font-bold p-4 text-neutral-200">Movie List</h1>
      {/* render the filter component and pass the handleFilter function as a prop */}
      <Filter onFilter={handleFilter} className="mt-4" />
      {/* render the list of movies */}
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 p-8 max-w-7xl mx-auto">
        {filteredMovies.map((movie) => (
          <li key={movie.title} className="bg-white rounded-lg shadow-md p-4">
            {/* render a MovieCard component for each movie in the filtered array */}
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList

