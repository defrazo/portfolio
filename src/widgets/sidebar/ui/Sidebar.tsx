import { observer } from 'mobx-react-lite';

import ThemeSwitcher from '@/features/theme-switcher';

import { TabsNav } from './TabsNav';
import { UserCard } from './UserCard';

export const Sidebar = observer(() => {
	return (
		<div className="sticky top-4">
			<div className="core-base core-border flex h-[600px] flex-col justify-between p-4 shadow-(--shadow) select-none">
				<UserCard />
				<TabsNav />
			</div>
			<ThemeSwitcher />
		</div>
	);
});
