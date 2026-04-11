import type { LucideIcon } from 'lucide-react';

export type UserProfile = { contacts: Contacts };

type Contacts = {
	email: { value: string; href: string; icon: LucideIcon };
	telegram: { value: string; href: string; icon: LucideIcon };
	location: { value: string; icon: LucideIcon };
	max: { value: string; href: string; icon: LucideIcon };
	vk: { value: string; href: string };
	git: { value: string; href: string };
	vcard: { value: string; href: string; icon: LucideIcon };
};
