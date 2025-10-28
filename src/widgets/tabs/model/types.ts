import { type FC, JSX, type SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export type TabId = 'home' | 'about' | 'skills' | 'projects' | 'contacts';

export type Tab = {
	id: TabId;
	title: string;
};

export type AboutBadge = {
	id: string;
	title: string;
	content: string | JSX.Element;
	href?: string;
	icon: LucideIcon;
};

export type Skill = {
	label: string;
	value: number;
	icon: FC<SVGProps<SVGSVGElement>>;
	color: string;
};

export type SkillGroup = {
	id: string;
	title: string;
	skills: Skill[];
};

export type WorkItem = {
	id: string;
	role: string;
	company: string;
	period: string;
	bullets: string[];
};

export type ContactsBadge = {
	id: string;
	title: string;
	content: string;
	href: string;
	icon: LucideIcon;
};
