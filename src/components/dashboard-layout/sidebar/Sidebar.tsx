import MenuItem from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside>
			{MENU.map(item => (
				<MenuItem
					item={item}
					key={item.link}
				/>
			))}
		</aside>
	)
}
