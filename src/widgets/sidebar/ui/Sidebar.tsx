import { observer } from 'mobx-react-lite';

import { cn } from '@/shared/lib/utils';
import { Button, Divider, ZoomOnHover } from '@/shared/ui';

import Avatar from '@/entities/avatar';
import type { NavButton } from '../model';
import { useStore } from '@/app/providers';
import { useSearchParams } from 'react-router-dom';
import { TabId } from '@/shared/stores';
import ThemeSwitcher from '@/features/theme-switcher/ui/ThemeSwitcher';

const tabs: NavButton[] = [
	{ id: 'home', title: 'Главная' },
	{ id: 'about', title: 'Обо мне' },
	{ id: 'skills', title: 'Навыки' },
	{ id: 'projects', title: 'Проекты' },
	{ id: 'contacts', title: 'Контакты' },
];

const Sidebar = observer(() => {
	const { tabsStore } = useStore();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleTabClick = (tab: TabId) => {
		tabsStore.setTab(tab);
		setSearchParams({ tab });
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="core-base core-border sticky top-4 flex h-[536px] w-full flex-col justify-evenly gap-4 p-4 shadow-[var(--shadow)] select-none">
				<div className="flex flex-col items-center gap-4">
					<ZoomOnHover>
						<Avatar className="size-36 rounded-full border-2 border-transparent transition-all duration-300 hover:border-[var(--accent-default)]" />
					</ZoomOnHover>
					<div className="flex cursor-default flex-col items-center justify-center gap-2 leading-4">
						<span className="text-2xl font-bold">Евгений Летунов</span>
						<span className="text-lg text-[var(--color-disabled)]">Frontend Developer</span>
					</div>
				</div>
				<Divider />
				<div className="flex flex-col gap-2">
					{tabs.map((item) => {
						return (
							<Button
								key={item.id}
								className={cn(
									'core-border transition-all duration-200 hover:translate-x-1 hover:shadow-md',
									tabsStore.tab === item.id && 'bg-[var(--accent-default)] text-[var(--accent-text)]'
								)}
								onClick={() => handleTabClick(item.id)}
							>
								{item.title}
							</Button>
						);
					})}
				</div>
			</div>
			<ThemeSwitcher className="ml-auto" />
		</div>
	);
});
export default Sidebar;
