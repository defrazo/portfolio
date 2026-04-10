import { IdCard, Mail, MapPin, MessageCircleMore, Send } from 'lucide-react';

import type { UserProfile } from '.';

export const USER_PROFILE: UserProfile = {
	contacts: {
		email: { value: 'defrazo@yandex.ru', icon: Mail, href: 'mailto:defrazo@yandex.ru' },
		telegram: { value: '@defrazo', icon: Send, href: 'https://t.me/defrazo' },
		location: { value: 'Екатеринбург, Россия', icon: MapPin },
		max: {
			value: 'Связаться в Max',
			icon: MessageCircleMore,
			href: 'https://max.ru/u/f9LHodD0cOLpBe0tG99Ne63Vhm94iiUTZwbUkO2FEYcfVq-QW2gXG1lvHGs',
		},
		vk: { value: 'defrazo', href: 'https://vk.com/defrazo' },
		git: { value: 'defrazo', href: 'https://github.com/defrazo' },
	},
	vcard: { label: 'vCard', icon: IdCard, href: '#' },
};
