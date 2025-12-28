import { Trash, Star } from 'lucide-react';

export default function WatchlistItem({ movie, deleteMovie }) {
  return (
    <div className='flex gap-4 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4'>
      <div className='flex-1'>
        <p className='font-semibold text-xl'>{movie.name}</p>
        <div className='flex gap-1'>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={i < movie.rating ? "text-yellow-400" : "text-gray-300"}
              fill={i < movie.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      <button onClick={() => deleteMovie(movie.name)}>
        <Trash />
      </button>
    </div>
  );
}
