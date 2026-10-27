import ThemeSwitcher from '@/features/theme-switcher';

import { TabsNav, UserCard } from '.';

export const Sidebar = () => {
	return (
		<div className="sticky top-(--sidebar-top) flex flex-col gap-4 select-none">
			<div className="core-border flex h-140 flex-col justify-between bg-(--bg-secondary) p-4 shadow-(--shadow) 2xl:h-150">
				<UserCard />
				<TabsNav />
			</div>
			<ThemeSwitcher />
		</div>
	);
};
