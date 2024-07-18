import { Suspense } from 'react';
import NavbarItem from './NavbarItem';
import SearchBox from './SearchBox';

export default function Navbar() {
	return (
		<Suspense>
			<div className=' dark:bg-gray-600 bg-amber-400 py-4 lg:text-lg'>
				<div className='max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-6'>
					<div className='flex gap-4'>
						<NavbarItem title='Trending' param='fetchTrending' />
						<NavbarItem title='Top Rated' param='fetchTopRated' />
					</div>
					<SearchBox />
				</div>
			</div>
		</Suspense>
	);
}
