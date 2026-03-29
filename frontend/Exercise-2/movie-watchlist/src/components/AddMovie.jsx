export default function AddMovie({
  movieName,
  setMovieName,
  movieRating,
  setMovieRating,
  addToWatchlist
}) {
  return (
    <div className='flex gap-10 p-6 bg-white w-full max-w-4xl rounded-2xl border-2 border-gray-200 shadow-md'>
      <input
        type='text'
        placeholder='Enter movie name'
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className='flex-1 border-1 border-gray-200 rounded-lg p-2'
      />

      <select
        value={movieRating}
        onChange={(e) => setMovieRating(e.target.value)}
        className='border-1 border-gray-200 rounded-lg p-2 min-w-[160px]'
      >
        <option value="" disabled>Add Rating</option>
        <option value="5">★★★★★</option>
        <option value="4">★★★★</option>
        <option value="3">★★★</option>
        <option value="2">★★</option>
        <option value="1">★</option>
      </select>

      <button
        onClick={addToWatchlist}
        className='bg-gradient-to-r from-teal-500 to-sky-300 text-white font-semibold px-4 rounded-lg'
      >
        + Add to Watchlist
      </button>
    </div>
  );
}
