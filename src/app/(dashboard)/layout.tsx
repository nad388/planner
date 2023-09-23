import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<div>Sidebar</div>
			<main>{children}</main>
		</div>
	)
}
