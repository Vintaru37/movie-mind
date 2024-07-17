import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Movie Mind',
	description: "The only movie website you'll ever need!",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header />
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
