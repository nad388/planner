import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export type TypeIconName = keyof typeof dynamicIconImports

interface IconProps extends LucideProps {
	name: TypeIconName
}

export const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name])

	return <LucideIcon {...props} />
}
