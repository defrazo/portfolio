import { Divider } from '@/shared/ui';

import { CONTACTS_BADGES } from '../../model';
import { SectionTitle } from '..';
import { ContactsBadge, MapSection } from '.';

export const TabContacts = () => {
	return (
		<>
			<SectionTitle title="Контакты" />
			<MapSection />
			<Divider className="-mt-2 bg-(--accent-secondary)" />
			<div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
				{CONTACTS_BADGES.map(({ id, title, content, href, icon }) => (
					<ContactsBadge key={id} content={content} href={href} icon={icon} title={title} />
				))}
			</div>
		</>
	);
};
