import { useState } from 'react';
import { moviesData } from './Data';
import './App.css';
import MoviesList from './components/MovieList';

function App() {
const [movies,setMovie] = useState(moviesData)
  return (
    <div>
      <MoviesList movies={movies} />

    </div>
  );
}

export default App;
