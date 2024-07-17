import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
	return (
		<div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
			<div className='flex gap-4'>
				<MenuItem title='home' address='/' Icon={AiFillHome} />
				<MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
			</div>
			<div className='flex items-center gap-4'>
				<DarkModeSwitch />
				<Link href={'/'} className='flex gap-1 items-center'>
					<span className='text-2xl text-gray-800 font-bold bg-amber-400 py-1 px-2 rounded-lg'>Movie Mind</span>
				</Link>
			</div>
		</div>
	);
}
