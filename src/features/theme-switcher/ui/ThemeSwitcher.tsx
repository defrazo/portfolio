import { Moon, Sun } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';
import { cn } from '@/shared/lib/utils';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { themeStore } = useStore();

	const isDark = themeStore.theme === 'dark';
	const handleToogle = () => themeStore.toggleTheme();

	return (
		<div
			className={cn(
				'group absolute -bottom-14 flex size-10 cursor-pointer items-center rounded-full bg-(--bg-tertiary) p-0.5 transition-all duration-500 hover:w-20',
				className
			)}
			onClick={handleToogle}
		>
			<Moon
				className={cn(
					'absolute left-2.5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100',
					isDark ? 'z-10 text-[#7d6fe4]' : 'text-[#7d6fe480] opacity-0'
				)}
				size={20}
			/>
			<Sun
				className={cn(
					'absolute right-2.5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100',
					!isDark ? 'z-10 text-[#e18127]' : 'text-[#e1812780] opacity-0'
				)}
				size={20}
			/>
			<div
				className={cn(
					'size-9 transform rounded-full border border-solid border-transparent bg-(--bg-secondary) shadow-md transition-all duration-500 group-hover:border-(--border-color)',
					isDark
						? 'translate-x-0 translate-y-0 group-hover:translate-x-0'
						: 'translate-x-0 translate-y-0 group-hover:translate-x-10'
				)}
			/>
		</div>
	);
};

export default observer(ThemeSwitcher);
