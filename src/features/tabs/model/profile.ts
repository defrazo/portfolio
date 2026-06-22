import { BriefcaseBusiness } from 'lucide-react';

import { USER_PROFILE } from '@/entities/user';
import { IconEmail, IconGit, IconMax, IconTG, IconVK } from '@/shared/assets/icons';

import type { ProfileCard } from '.';

export const ABOUT_CARDS: ProfileCard[] = [
	{
		id: 'email',
		title: 'Email',
		content: USER_PROFILE.contacts.email.value,
		href: USER_PROFILE.contacts.email.href,
		icon: USER_PROFILE.contacts.email.icon,
	},
	{
		id: 'telegram',
		title: 'Telegram',
		content: USER_PROFILE.contacts.telegram.value,
		href: USER_PROFILE.contacts.telegram.href,
		icon: USER_PROFILE.contacts.telegram.icon,
	},
	{
		id: 'location',
		title: 'Локация',
		content: USER_PROFILE.contacts.location.value,
		icon: USER_PROFILE.contacts.location.icon,
	},
	{
		id: 'status',
		title: 'Статус',
		content: 'Открыт к предложениям',
		icon: BriefcaseBusiness,
		withIndicator: true,
	},
];

export const CONTACTS_CARDS: ProfileCard[] = [
	{
		id: 'email',
		title: 'Email',
		content: USER_PROFILE.contacts.email.value,
		href: USER_PROFILE.contacts.email.href,
		icon: USER_PROFILE.contacts.email.icon,
	},
	{
		id: 'telegram',
		title: 'Telegram',
		content: USER_PROFILE.contacts.telegram.value,
		href: USER_PROFILE.contacts.telegram.href,
		icon: USER_PROFILE.contacts.telegram.icon,
	},
	{
		id: 'vcard',
		title: 'vCard',
		content: USER_PROFILE.contacts.vcard.value,
		href: USER_PROFILE.contacts.vcard.href,
		icon: USER_PROFILE.contacts.vcard.icon,
	},
	{
		id: 'max',
		title: 'MAX',
		content: USER_PROFILE.contacts.max.value,
		href: USER_PROFILE.contacts.max.href,
		icon: USER_PROFILE.contacts.max.icon,
	},
];

export const SOCIAL_BUTTONS = [
	{ id: 'vk', href: USER_PROFILE.contacts.vk.href, icon: IconVK },
	{ id: 'tg', href: USER_PROFILE.contacts.telegram.href, icon: IconTG },
	{ id: 'max', href: USER_PROFILE.contacts.max.href, icon: IconMax },
	{ id: 'email', href: USER_PROFILE.contacts.email.href, icon: IconEmail },
	{ id: 'git', href: USER_PROFILE.contacts.git.href, icon: IconGit },
];

const COORD = { lat: 56.8389, lon: 60.6057 };

export const MAP_LINKS = [
	{
		id: 'yandex',
		title: 'Открыть в Яндекс.Картах',
		link: `https://yandex.ru/maps/?pt=${COORD.lon},${COORD.lat}&z=14&l=map`,
	},
	{
		id: 'google',
		title: 'Открыть в Google Maps',
		link: `https://www.google.com/maps?q=${COORD.lat},${COORD.lon}&z=14`,
	},
	{ id: 'gis', title: 'Открыть в 2GIS', link: `https://2gis.ru/?m=${COORD.lon},${COORD.lat},14` },
];
