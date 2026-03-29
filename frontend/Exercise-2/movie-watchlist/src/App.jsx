import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddMovie from './components/AddMovie'
import SearchBar from './components/SearchBar'
import Watchlist from './components/Watchlist'

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [filterList, setFilteredList] = useState([]);

  function addToWatchlist() {
    if (!movieName) {
      alert("Enter the movie name.")
      return;
    }

    if (!movieRating) {
      alert("Enter the movie rating.")
      return;
    }

    let trimName = movieName.trim();
    trimName = trimName[0].toUpperCase() + trimName.slice(1);

    const findMovie = watchlist.find((m) => m.name === trimName);

    if (findMovie) {
      alert("Movie already in watchlist");
      return;
    }

    const newList = [...watchlist, {
      name: trimName,
      rating: movieRating
    }];

    setWatchlist(newList);
    setFilteredList(newList);
    setMovieName("");
    setMovieRating("");
  }

  function deleteMovie(name) {
    const newList = watchlist.filter((m) => m.name != name);
    setWatchlist(newList);
    setFilteredList(newList);
  }

  function findMovies(e) {
    const val = e.target.value;
    const query = val.trim().toLowerCase();

    if (!query) {
      setFilteredList(watchlist);
      return;
    }

    setFilteredList(
      watchlist.filter((m) =>
        m.name.toLowerCase().includes(query)
      )
    );
  }

  function clearWatchlist() {
    setWatchlist([]);
    setFilteredList([]);
  }

  return (
    <div className='bg-gradient-to-br from-teal-50 via-stone-50 to-white min-h-screen flex flex-col items-center gap-8 py-16'>
      <Header />

      <AddMovie
        movieName={movieName}
        setMovieName={setMovieName}
        movieRating={movieRating}
        setMovieRating={setMovieRating}
        addToWatchlist={addToWatchlist}
      />

      <SearchBar
        findMovies={findMovies}
        watchlist={watchlist}
        clearWatchlist={clearWatchlist}
      />

      <Watchlist
        watchlist={watchlist}
        filterList={filterList}
        deleteMovie={deleteMovie}
      />
    </div>
  )
}

export default App
