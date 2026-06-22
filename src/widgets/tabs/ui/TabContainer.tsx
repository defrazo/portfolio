import type { ComponentType } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';
import { SectionTitle, TabAbout, TabContacts, TabHome, type TabId, TabProjects, TabSkills } from '@/features/tabs';
import { usePageTitle } from '@/shared/lib/hooks';

type TabConfig = { component: ComponentType; title: string };

const TabContainer = observer(() => {
	const { tabsStore } = useStore();

	const TABS: Record<TabId, TabConfig> = {
		home: { component: TabHome, title: 'Главная' },
		about: { component: TabAbout, title: 'Обо мне' },
		skills: { component: TabSkills, title: 'Навыки' },
		projects: { component: TabProjects, title: 'Проекты' },
		contacts: { component: TabContacts, title: 'Контакты' },
	};

	const activeTab = tabsStore.tab;
	const { component: TabComponent, title } = TABS[activeTab];

	usePageTitle(title);

	return (
		<div className="hide-scrollbar core-border flex min-h-0 flex-1 cursor-default flex-col gap-4 bg-(--bg-secondary) p-3 shadow-(--shadow) md:min-h-150 md:p-6">
			{activeTab !== 'home' && <SectionTitle title={title} />}
			<TabComponent />
		</div>
	);
});

export default TabContainer;
