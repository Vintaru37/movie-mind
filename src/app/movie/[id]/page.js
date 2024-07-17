import Image from 'next/image';

import { FaStar } from 'react-icons/fa';


import iso6391 from 'iso-639-1';
import BackButton from '@/components/BackButton';
export default async function MoviePage({ params }) {
	const movieId = params.id;
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
	);
	const movie = await res.json();
	console.log(movie);
	const releaseDate =
		movie.release_date?.slice(0, 4) || result.first_air_date?.slice(0, 4);
	const languageCode = movie.original_language;
	const languageName = iso6391.getName(languageCode);
	return (
		<div className='flex flex-col items-center gap-4 p-4 pt-8 max-w-7xl mx-auto lg:flex-row '>
			<Image
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				width={500}
				height={200}
				className='rounded-3xl'
			/>
			<div className='space-y-3 text-justify'>
				<h2 className='text-2xl font-bold text-center dark:text-amber-300'>
					{movie.title || movie.name} <span>({releaseDate})</span>
				</h2>
				<h3 className='text-center text-lg font-bold'>{movie.tagline}</h3>
				<h3 className='text-xl font-bold'>Overview</h3>
				<p>{movie.overview}</p>
				<h3 className='text-xl font-bold pt-2'>Rating:</h3>
				<p className='flex items-center gap-1 text-lg'>
					<FaStar className='text-amber-400' />
					{movie.vote_average.toFixed(2)} / 10
					<span className='text-base'>({movie.vote_count} votes)</span>
				</p>
				<h3 className='text-xl font-bold pt-2'>Movie information:</h3>
				<p>Runtime: <span>{movie.runtime} minutes</span></p>
				<p>Release date: <span>{movie.release_date}</span></p>
				<p>Original language: <span>{languageName}</span></p>
				<div className='mb-16'>
					<h3 className='text-xl font-bold pt-2 mb-3'>
						Production Companies:
					</h3>
                    <div className='flex flex-wrap gap-2'>
					{movie.production_companies.length > 0 ? (
                        movie.production_companies.map((company) => {
                            return <span className='p-2 border'>{company.name}</span>;
						})
					) : (
                        <span className='p-2 border'>
							Unknown production companies
						</span>
					)}
                    </div>
				</div>
                <br />
            <BackButton />
			</div>
		</div>
	);
}
