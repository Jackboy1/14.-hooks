import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook from React Router
import { moviesData } from '../data'; // Import the movies data from the data file
import { Link } from 'react-router-dom'; // Import Link component for navigation


const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameter
  const movie = moviesData?.find((movie) => movie.id === parseInt(id)) || null; // Safely find the movie object with the matching ID

  if (!movie) {
    return <p>Movie not found</p>;
  }

  // Extract the YouTube video ID from the trailer link
  const videoId = new URL(movie.trailerLink).searchParams.get('v');

  return (
    <div className="p-8 bg-gray-800 h-screen text-neutral-200 ">
      <div className='md:max-w-4xl  mx-auto'>
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-lg mb-6">{movie.description}</p>
      <iframe 
        className="w-full h-130 mb-6"
        title={movie.title}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
    </div>
  );
};

export default MovieDetails;
