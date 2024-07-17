import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Card({ result }) {
    const releaseDate = result.release_date?.slice(0,4) || result.first_air_date?.slice(0,4)
    let voteCount;
    if(result.vote_count < 1000000 && result.vote_count >= 1000){
        voteCount = (result.vote_count / 1000).toFixed(1) + "K"
    } else {
        voteCount = result.vote_count
    }
	return <div
    className="group">
        <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${ result.poster_path}`}
        width={200}
        height={300}
        className="sm:rounded-lg group-hover:opacity-75 all duration-300 hover:bg-opacity-75 w-full"
        />
        <div className="flex items-center gap-1">
            <h2 className="text-lg font-bold truncate text-center">{result.title || result.name}</h2>
            <p className="text-center">({releaseDate})</p>
            <p className="flex items-center gap-1 ml-auto text-sm"><FaStar className="text-amber-400" />{result.vote_average.toFixed(1)}</p>
            <p className="text-sm">({voteCount})</p>
        </div>

        </Link>
    </div>;
}
