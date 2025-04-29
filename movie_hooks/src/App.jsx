import { BrowserRouter, Routes, Route } from "react-router";; // Import BrowserRouter, Route components from React Router
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MovieList/>} /> // Route for the home page
        <Route path="/movies/:id" element={<MovieDetails />} /> // Route for the movie details page
      </Routes>
    
  )
}

export default App
