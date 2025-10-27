import { CONTACTS_BAGES } from '../../model';
import { SectionTitle } from '..';
import { ContactsBage, MapSection } from '.';

export const TabContacts = () => {
	return (
		<>
			<SectionTitle title="Контакты" />
			<MapSection />
			<div className="flex flex-col gap-4">
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
					{CONTACTS_BAGES.map(({ id, title, content, href, icon }) => (
						<ContactsBage key={id} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
			</div>
		</>
	);
};
