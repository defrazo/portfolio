import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';
import ThemeSwitcher from '@/features/theme-switcher';
import { Avatar } from '@/shared/content';
import { cn } from '@/shared/lib/utils';
import { Button, ImageViewer } from '@/shared/ui';
import type { TabId } from '@/widgets/tabs/model';

import type { NavButton } from '../model';
const tabs: NavButton[] = [
	{ id: 'home', title: 'Главная' },
	{ id: 'about', title: 'Обо мне' },
	{ id: 'skills', title: 'Навыки' },
	{ id: 'projects', title: 'Проекты' },
	{ id: 'contacts', title: 'Контакты' },
];

const Sidebar = observer(() => {
	const { modalStore, tabsStore } = useStore();
	const [_, setSearchParams] = useSearchParams();

	const handleTabClick = (tab: TabId) => {
		tabsStore.setTab(tab);
		setSearchParams({ tab });
	};

	return (
		<div className="sticky top-4">
			<div className="core-base core-border flex h-[600px] flex-col justify-between p-4 shadow-(--shadow) select-none">
				<div className="flex flex-col gap-3">
					<div className="group relative p-2">
						<div className="absolute inset-0 rounded-full bg-linear-to-r from-(--accent-default-op) to-(--accent-hover-op) opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg" />
						<img
							alt="Фотография"
							className="rounded-full border-2 border-solid border-(--border-color) shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
							src={Avatar}
							onClick={() => modalStore.setModal(<ImageViewer src={Avatar} />)}
						/>
					</div>
					<div className="flex cursor-default flex-col items-center justify-center leading-4">
						<span className="text-2xl font-bold">Евгений Летунов</span>
						<span className="text-lg text-(--color-tertiary)">Frontend Developer</span>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					{tabs.map((item) => {
						return (
							<Button
								key={item.id}
								className={cn(
									// 'rounded-2xl transition-all duration-300 hover:translate-x-1 hover:shadow-md',
									'rounded-4xl border border-solid border-transparent bg-(--bg-secondary) transition-all duration-300 ease-in-out hover:translate-x-1 hover:border-(--border-accent-op) hover:text-(--color-accent) hover:shadow-md',
									tabsStore.tab === item.id &&
										'bg-sky-600 text-(--text-accent) hover:text-(--text-accent)'
								)}
								variant="custom"
								onClick={() => handleTabClick(item.id)}
							>
								{item.title}
							</Button>
						);
					})}
				</div>
			</div>
			<ThemeSwitcher />
		</div>
	);
});

export default Sidebar;
