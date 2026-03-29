import { Film } from 'lucide-react';
import WatchlistItem from './WatchlistItem';

export default function Watchlist({ watchlist, filterList, deleteMovie }) {
  if (!watchlist.length) {
    return (
      <div className='flex justify-center min-h-[300px] bg-white border-dashed border-2 border-gray-300 rounded-2xl w-full max-w-4xl'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <Film className='w-12 h-12 text-green-500' />
          <p>Your watchlist is empty. Add your first movie!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2 w-full max-w-4xl'>
      {filterList.map((movie) => (
        <WatchlistItem
          key={movie.name}
          movie={movie}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}
