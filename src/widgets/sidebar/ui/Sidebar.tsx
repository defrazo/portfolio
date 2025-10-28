import ThemeSwitcher from '@/features/theme-switcher';

import { TabsNav, UserCard } from '.';

export const Sidebar = () => {
	return (
		<div className="sticky top-4 select-none">
			<div className="core-border flex h-[600px] flex-col justify-between bg-(--bg-secondary) p-4 shadow-(--shadow)">
				<UserCard />
				<TabsNav />
			</div>
			<ThemeSwitcher />
		</div>
	);
};
