import type { LucideIcon } from 'lucide-react';

export type UserProfile = {
	contacts: Contacts;
	vcard: VCard;
};

type Contacts = {
	email: {
		value: string;
		icon: LucideIcon;
		href: string;
	};
	telegram: {
		value: string;
		icon: LucideIcon;
		href: string;
	};
	location: {
		value: string;
		icon: LucideIcon;
	};
	site: {
		value: string;
		icon: LucideIcon;
		href: string;
	};
};

type VCard = {
	label: string;
	icon: LucideIcon;
	href: string;
};
