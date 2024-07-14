import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
// import Logo from '@/assets/moviemind-logo.png'

export default function Header() {
	return (
		<div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
			<div className='flex gap-4'>
				<MenuItem title='home' address='/' Icon={AiFillHome} />
				<MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
			</div>
            <Link href={'/'} className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-400 py-1 px-2 rounded-lg'>Movie</span>
                <span className='text-2xl hidden sm:inline'>Mind</span>
            </Link>
		</div>
	);
}
