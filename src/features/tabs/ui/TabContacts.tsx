import { Divider } from '@/shared/ui';

import { CONTACTS_CARDS } from '../model';
import { ContactsCard, MapSection } from './components/contacts';

export const TabContacts = () => {
	return (
		<>
			<MapSection />
			<Divider className="-mt-1.5 bg-(--accent-secondary) lg:-mt-2.5" />
			<div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
				{CONTACTS_CARDS.map((card) => (
					<ContactsCard key={card.id} card={card} />
				))}
			</div>
		</>
	);
};
