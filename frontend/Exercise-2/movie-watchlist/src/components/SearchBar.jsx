export default function SearchBar({
  findMovies,
  watchlist,
  clearWatchlist
}) {
  return (
    <div className='flex items-center gap-4 w-full max-w-4xl'>
      <input
        type='text'
        placeholder='Search Movies..'
        onChange={findMovies}
        className='flex-1 border-1 border-gray-200 rounded-lg p-2'
      />

      <div className='px-4 py-2 bg-orange-100 rounded-xl'>
        Total: <span className='text-red-600 font-semibold'>{watchlist.length}</span>
      </div>

      {watchlist.length > 0 && (
        <button
          onClick={clearWatchlist}
          className='px-4 py-2 text-rose-600 border-2 border-rose-300 rounded-xl'
        >
          Clear All
        </button>
      )}
    </div>
  );
}
