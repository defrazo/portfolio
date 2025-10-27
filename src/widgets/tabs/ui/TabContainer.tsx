import { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';

import { TabAbout, TabContacts, TabHome, TabProjects, TabSkills } from '.';

const TabContainer = observer(() => {
	const { tabsStore } = useStore();

	const tabComponents: Record<string, () => JSX.Element> = {
		home: TabHome,
		about: TabAbout,
		skills: TabSkills,
		projects: TabProjects,
		contacts: TabContacts,
	};
	const CurrentTab = tabComponents[tabsStore.tab];

	return (
		<div className="core-base hide-scrollbar core-border flex min-h-[600px] cursor-default flex-col gap-4 overflow-auto p-3 shadow-(--shadow) md:p-6">
			<section className="flex flex-1 flex-col gap-4">
				<CurrentTab />
			</section>
		</div>
	);
});

export default TabContainer;
