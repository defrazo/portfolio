import { CONTACTS_BADGES } from '../../model';
import { SectionTitle } from '..';
import { ContactsBadge, MapSection } from '.';

export const TabContacts = () => {
	return (
		<>
			<SectionTitle title="Контакты" />
			<MapSection />
			<div className="flex flex-col gap-4">
				<div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
					{CONTACTS_BADGES.map(({ id, title, content, href, icon }) => (
						<ContactsBadge key={id} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
			</div>
		</>
	);
};
