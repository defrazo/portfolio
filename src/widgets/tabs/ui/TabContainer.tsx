import type { ComponentType } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';
import { usePageTitle } from '@/shared/lib/hooks';

import type { TabId } from '../model';
import { TabAbout, TabContacts, TabHome, TabProjects, TabSkills } from '.';

const TAB_TITLES: Record<TabId, string> = {
	home: 'Главная',
	about: 'Обо мне',
	skills: 'Навыки',
	projects: 'Проекты',
	contacts: 'Контакты',
};

const TabContainer = observer(() => {
	const { tabsStore } = useStore();
	usePageTitle(TAB_TITLES[tabsStore.tab]);

	const TAB_COMPONENTS: Record<TabId, ComponentType> = {
		home: TabHome,
		about: TabAbout,
		skills: TabSkills,
		projects: TabProjects,
		contacts: TabContacts,
	};

	const TAB_ORDER: TabId[] = ['home', 'about', 'skills', 'projects', 'contacts'];

	return (
		<div className="hide-scrollbar core-border flex min-h-0 flex-1 cursor-default flex-col gap-4 bg-(--bg-secondary) p-3 shadow-(--shadow) md:min-h-150 md:p-6">
			{TAB_ORDER.map((tabId) => {
				const TabComponent = TAB_COMPONENTS[tabId];
				const isActive = tabsStore.tab === tabId;

				return (
					<section
						key={tabId}
						aria-hidden={!isActive}
						className={`min-h-0 flex-1 flex-col gap-4 ${isActive ? 'flex' : 'hidden'}`}
					>
						<TabComponent />
					</section>
				);
			})}
		</div>
	);
});

export default TabContainer;
