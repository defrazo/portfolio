import { FC, JSX, SVGProps } from 'react';

export type TabId = 'home' | 'about' | 'skills' | 'projects' | 'contacts';
export type Tab = {
	id: TabId;
	title: string;
};

export type AboutBage = {
	id: string;
	title: string;
	content: string | JSX.Element;
	href?: string;
	icon: JSX.Element;
};

export type WorkItem = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
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

export type ContactsBage = {
	id: string;
	title: string;
	content: string;
	href: string;
	icon: JSX.Element;
};
