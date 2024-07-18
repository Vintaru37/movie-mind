'use client';
import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search/${search}`);
	};
	return (
		<Suspense>
			<form className='flex items-center gap-2' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search for a movie...'
					className='p-2 rounded-lg outline-none focus:bg-gray-50 dark:focus:bg-slate-900'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					className='p-2.5 rounded-lg text-xl bg-gray-50 hover:bg-gray-200 dark:bg-slate-800 disabled:opacity-50 disabled:dark:hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors duration-150'
					disabled={search === ''}>
					<IoSearch />
				</button>
			</form>
		</Suspense>
	);
}
