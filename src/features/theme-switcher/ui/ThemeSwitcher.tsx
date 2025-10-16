import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';
import { cn } from '@/shared/lib/utils';
import { Moon, Sun } from 'lucide-react';

interface ThemeSwitcherProps {
	className: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { themeStore } = useStore();

	const isDark = themeStore.theme === 'dark';
	const handleToogle = () => themeStore.toggleTheme();

	return (
		<div
			onClick={handleToogle}
			className={cn(
				'group relative flex h-12 w-12 cursor-pointer items-center rounded-full p-1 transition-all duration-500 hover:w-24',
				isDark ? 'bg-gray-800' : 'bg-[var(--bg-primary)]',
				className
			)}
		>
			<Moon
				size={20}
				className={cn(
					'absolute left-3.5 transition-colors duration-500 group-hover:opacity-100',
					isDark ? 'z-10 text-blue-400' : 'text-blue-200/50 opacity-0'
				)}
			/>
			<Sun
				size={20}
				className={cn(
					'absolute right-3.5 transition-colors duration-500 group-hover:opacity-100',
					!isDark ? 'z-10 text-yellow-500' : 'text-yellow-300/50 opacity-0'
				)}
			/>
			<div
				className={cn(
					'h-10 w-10 transform rounded-full bg-[var(--bg-tertiary)] shadow-md transition-all duration-500',
					isDark
						? '-translate-y-0 translate-x-0 group-hover:translate-x-0'
						: '-translate-y-0 translate-x-0 group-hover:translate-x-12',
					'hover:scale-105'
				)}
			/>
		</div>
	);
};

export default observer(ThemeSwitcher);
