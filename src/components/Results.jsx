import Card from './Card';

export default function Results({ results }) {
	return (
		<div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-8 md:p-4 gap-10'>
			{results.map((result) => (
				<Card key={result.id} result={result} />
			))}
		</div>
	);
}
