import { useSearchParams } from 'react-router-dom';

import { useStore } from '@/app/providers';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';
import type { TabId } from '@/widgets/tabs';

const TABS: ReadonlyArray<{ id: TabId; title: string }> = [
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
		setSearchParams({ tab }, { replace: true });
		onTabClick?.();
	};

	return (
		<>
			<div className="flex flex-col gap-3">
				{TABS.map(({ id, title }) => {
					return (
						<Button
							key={id}
							className={cn(
								'rounded-xl border border-solid border-transparent bg-(--bg-secondary) transition-all duration-300 ease-in-out hover:translate-x-1 hover:border-(--accent-primary-hover) hover:text-(--color-accent) hover:shadow-md md:rounded-4xl',
								tabsStore.tab === id &&
									'bg-(--accent-primary) text-(--text-accent) hover:text-(--text-accent)'
							)}
							variant="custom"
							onClick={() => handleClick(id)}
						>
							{title}
						</Button>
					);
				})}
			</div>
		</>
	);
};
