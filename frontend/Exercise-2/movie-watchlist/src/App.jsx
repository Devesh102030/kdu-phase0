import { useState } from 'react'
import './App.css'
import { Film} from 'lucide-react';
import { Trash } from 'lucide-react';
import { Star } from "lucide-react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [filterList, setFilteredList] = useState([]);

  function addToWatchlist(){
    if(!movieName){
      alert("Enter the movie name.")
      return;
    }

    if(!movieRating){
      alert("Enter the movie rating.")
      return;
    }

    let trimName = movieName.trim();
    trimName = trimName[0].toUpperCase() + trimName.slice(1);

    const findMovie = watchlist.find((m) => m.name === trimName);

    if(findMovie){
      alert("Movie already in watchlist");
      return;
    }

    const newList = [...watchlist,{
      name: trimName,
      rating: movieRating
    }];

    setWatchlist(newList);
    setFilteredList(newList);

    setMovieName("");
    setMovieRating("");
  }

  function deleteMovie(name){
    const newList = watchlist.filter((m)=> m.name != name);
    setWatchlist(newList);
    setFilteredList(newList);
  }

  function findMovies(e){
    const val = e.target.value;
    const query = val.trim().toLowerCase();
    
    if(!query){
      setFilteredList(watchlist);
      return;
    }

    setFilteredList(watchlist.filter((m) => m.name.toLowerCase().includes(query)));
  }

  function clearWatchlist(){
    setWatchlist([]);
    setFilteredList([]);
  }

  return (
    <>
      <div className='bg-gradient-to-br from-teal-50 via-stone-50 to-white min-h-screen flex flex-col items-center gap-8 py-16'>

        <div className='flex items-center gap-4 w-full max-w-4xl'>
          <div className='bg-emerald-100 p-2 border-2 border-emerald-200 rounded-2xl shadow-sm'> 
            <Film className='h-10 w-10 text-emerald-700'/> 
          </div>
          <div>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600 text-3xl font-semibold'>My Watchlist</p>
            <p className='text-stone-600 text-lg'>Keep track of movies to watch</p>
          </div>
        </div>


        <div className='flex gap-10 p-6 bg-white w-fit rounded-2xl border-2 border-gray-200 w-full max-w-4xl shadow-md'>
          <div className='flex-1'>
            <input type='text' placeholder='Enter movie name' onChange={(e)=>setMovieName(e.target.value)} value={movieName}
            className='w-full border-1 border-gray-200 rounded-lg p-2 focus:outline-gray-200 focus:outline-4'></input>
          </div>

          <div>
            <select name='movie-rating' onChange={(e)=>setMovieRating(e.target.value)} value={movieRating}
              className={`border-1 border-gray-200 rounded-lg p-2 focus:outline-1 focus:outline-green-300 min-w-[160px]
              ${movieRating != "" ? "text-yellow-400" : "text-gray-500"}`}>
              <option value="" disabled selected>Add Rating</option>
              <option value="5" className='text-yellow-400 bg-teal-50'>★★★★★</option>
              <option value="4" className='text-yellow-400 bg-teal-50'>★★★★</option>
              <option value="3" className='text-yellow-400 bg-teal-50'>★★★</option>
              <option value="2" className='text-yellow-400 bg-teal-50'>★★</option>
              <option value="1" className='text-yellow-400 bg-teal-50'>★</option>
            </select>
          </div>

          <button onClick={addToWatchlist} className='bg-gradient-to-r from-teal-500 via-teal-400 to-sky-300 text-white font-semibold px-2 rounded-lg cursor-pointer'>
            + Add to Watchlist
          </button>
        </div>


        <div className='flex items-center gap-4 w-full max-w-4xl'>
          <div className='flex-1 bg-white'>
            <input type='text' placeholder='Search Movies..' onChange={(e)=>findMovies(e)}
            className='w-full border-1 border-gray-200 rounded-lg p-2 focus:outline-gray-200 focus:outline-4'></input>
          </div>
          <div className='flex justify-center items-center gap-1 py-2 px-4 bg-orange-100 rounded-xl border-2 border-orange-200 shadow-sm'>
            <span className='text-lg'> Total:</span><span className='text-red-600 font-semibold text-lg'>{watchlist.length}</span>
          </div>

          {watchlist.length > 0 && (
            <div className='text-lg text-rose-600 hover:bg-rose-50 rounded-xl border-2 border-rose-300 shadow-sm'>
              <button className='cursor-pointer py-2 px-4' onClick={clearWatchlist}>Clear All</button> 
            </div>
          )}

        </div>


        {!watchlist.length ? (
          <div className='flex justify-center min-h-[300px] bg-white border-dashed border-2 border-gray-300 rounded-2xl w-full max-w-4xl'>
            <div className='flex flex-col gap-4 justify-center items-center'> 
              <div className='bg-teal-100 p-4 rounded-full'><Film className='text-green-500 w-12 h-12'/></div>
              <div className='text-lg text-neutral-500'>Your watchlist is empty. Add your first movie!</div>
            </div>
          </div>
        ) : (
            <div className='flex flex-col gap-2 w-full max-w-4xl'>
              {filterList.map((movie)=>(
                <div className='flex flex-1 gap-4 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 hover:border-2 hover:border-green-300'>
                  <div className='flex-1'>
                    <p className='text-gray-900 font-semibold text-xl mb-2'>{movie.name}</p>
                    <p className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={i < movie.rating ? "text-yellow-400 w-4 h-5" : "text-gray-300 w-4 h-5"}
                          fill={i < movie.rating ? "currentColor" : "none"}
                        />
                      ))}
                  </p>
                  </div>
                  <div className='flex'>
                    <button onClick={()=>deleteMovie(movie.name)}
                     className='cursor-pointer p-3 rounded-xl hover:bg-gray-100' > 
                      <Trash className='text-neutral-600'/> 
                    </button>
                  </div>
                </div>
              ))}
            </div>
         )}
      </div>
    </>
  )
}




export default App
