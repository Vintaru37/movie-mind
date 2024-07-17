'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
	useEffect(() => {
		console.log(error);
	}, [error]);
	return (
		<div className='text-center mt-10'>
			<h1>Something went wrong. Please try again later.</h1>
            <button className='mt-4 py-2 px-4 border rounded-md border-gray-700 dark:border-gray-300 hover:text-amber-400 dark:hover:border-amber-400 dark:hover:bg-slate-700 duration-150' onClick={reset}>Try again</button>
		</div>
	);
}
