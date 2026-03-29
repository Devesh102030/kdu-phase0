import { Film } from 'lucide-react';

export default function Header() {
  return (
    <div className='flex items-center gap-4 w-full max-w-4xl'>
      <div className='bg-emerald-100 p-2 border-2 border-emerald-200 rounded-2xl shadow-sm'>
        <Film className='h-10 w-10 text-emerald-700' />
      </div>
      <div>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600 text-3xl font-semibold'>
          My Watchlist
        </p>
        <p className='text-stone-600 text-lg'>
          Keep track of movies to watch
        </p>
      </div>
    </div>
  );
}
