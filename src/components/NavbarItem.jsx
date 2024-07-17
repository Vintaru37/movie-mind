'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function NavbarItem({ title, param }) {
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');
	return (
		<Suspense>
		<div>
			<Link
				href={`/?genre=${param}`}
				className={`p-3 font-bold dark:bg-gray-700 border-0 border-gray-300 rounded-lg dark:hover:text-amber-400 dark:hover:bg-gray-900 hover:text-gray-100 duration-150 
                    ${genre === param
						? 'underline underline-offset-8 decoration-2 dark:decoration-amber-400 dark:bg-gray-900'
						: ''
				}`}>
				{title}
			</Link>
		</div>
		</Suspense>
	);
}
