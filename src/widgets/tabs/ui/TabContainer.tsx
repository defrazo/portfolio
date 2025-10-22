import { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';

import { TabAbout, TabContacts, TabHome, TabProjects, TabSkills } from '.';

const TabContainer = observer(() => {
	const { tabsStore } = useStore();

	const tabComponents: Record<string, JSX.Element> = {
		home: <TabHome />,
		about: <TabAbout />,
		skills: <TabSkills />,
		projects: <TabProjects />,
		contacts: <TabContacts />,
	};
	const targetTab = tabComponents[tabsStore.tab];

	return (
		<div className="core-base hide-scrollbar core-border flex min-h-[600px] cursor-default flex-col gap-4 overflow-auto p-6 shadow-(--shadow)">
			<section className="flex flex-1 flex-col gap-4">{targetTab}</section>
		</div>
	);
});

export default TabContainer;
