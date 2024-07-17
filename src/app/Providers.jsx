'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
	return (
		<ThemeProvider defaultTheme='dark' attribute='class'>
			<div className='text-gray-700 bg-gray-100 dark:text-gray-200 dark:bg-slate-800 min-h-screen select-none transition-colors duration-300'>
				{children}
			</div>
		</ThemeProvider>
	);
}
