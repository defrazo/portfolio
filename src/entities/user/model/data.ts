import { Globe, IdCard, Mail, MapPin, Send } from 'lucide-react';

import type { UserProfile } from '.';

export const USER_PROFILE: UserProfile = {
	contacts: {
		email: { value: 'defrazo@yandex.ru', icon: Mail, href: 'mailto:defrazo@yandex.ru' },
		telegram: { value: '@defrazo', icon: Send, href: 'https://t.me/defrazo' },
		location: { value: 'Екатеринбург, Россия', icon: MapPin },
		site: { value: 'letunoff.ru', icon: Globe, href: 'https://letunoff.ru/' },
	},
	vcard: { label: 'vCard', icon: IdCard, href: '#' },
};
