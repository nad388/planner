import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'
import './globals.scss'

// noto sans

const zen = Zen_Kaku_Gothic_Antique({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: 'Planner',
	description: 'The best planner'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={zen.className}>{children}</body>
		</html>
	)
}
