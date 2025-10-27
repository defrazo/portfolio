import { useSearchParams } from 'react-router-dom';

import { useStore } from '@/app/providers';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';
import type { TabId } from '@/widgets/tabs';

const tabs = [
	{ id: 'home', title: 'Главная' },
	{ id: 'about', title: 'Обо мне' },
	{ id: 'skills', title: 'Навыки' },
	{ id: 'projects', title: 'Проекты' },
	{ id: 'contacts', title: 'Контакты' },
];

interface TabsNavProps {
	onTabClick?: () => void;
}

export const TabsNav = ({ onTabClick }: TabsNavProps) => {
	const { tabsStore } = useStore();
	const [_, setSearchParams] = useSearchParams();

	const handleClick = (tab: TabId) => {
		tabsStore.setTab(tab);
		setSearchParams({ tab });
		onTabClick?.();
	};

	return (
		<>
			<div className="flex flex-col gap-3">
				{tabs.map((item) => {
					return (
						<Button
							key={item.id}
							className={cn(
								'rounded-xl border border-solid border-transparent bg-(--bg-secondary) transition-all duration-300 ease-in-out hover:translate-x-1 hover:border-(--border-accent-op) hover:text-(--color-accent) hover:shadow-md md:rounded-4xl',
								tabsStore.tab === item.id &&
									'bg-sky-600 text-(--text-accent) hover:text-(--text-accent)'
							)}
							variant="custom"
							onClick={() => handleClick(item.id as TabId)}
						>
							{item.title}
						</Button>
					);
				})}
			</div>
		</>
	);
};
