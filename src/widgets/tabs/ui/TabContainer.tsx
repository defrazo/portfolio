import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';

import { JSX } from 'react';
import { TabHome } from './TabHome';
import { TabAbout } from './TabAbout/TabAbout';
import { TabProjects } from './TabProjects';
import { TabContacts } from './TabContacts';
import { TabSkills } from './TabSkills';

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
		<div className="core-base core-border hide-scrollbar flex cursor-default flex-col gap-4 overflow-auto rounded-xl p-6 shadow-[var(--shadow)] select-none">
			{targetTab}
		</div>
	);
});

export default TabContainer;
