import { type ComponentType, JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';

import type { TabId } from '../model';
import { TabAbout, TabContacts, TabHome, TabProjects, TabSkills } from '.';

const TabContainer = observer(() => {
	const { tabsStore } = useStore();

	const TAB_COMPONENTS: Record<TabId, ComponentType> = {
		home: TabHome,
		about: TabAbout,
		skills: TabSkills,
		projects: TabProjects,
		contacts: TabContacts,
	};

	const CurrentTab = TAB_COMPONENTS[tabsStore.tab as TabId] as () => JSX.Element;

	return (
		<div className="hide-scrollbar core-border flex min-h-svh cursor-default flex-col gap-4 overflow-auto bg-(--bg-secondary) p-3 shadow-(--shadow) md:min-h-[600px] md:p-6">
			<section className="flex flex-1 flex-col gap-4">
				<CurrentTab />
			</section>
		</div>
	);
});

export default TabContainer;
