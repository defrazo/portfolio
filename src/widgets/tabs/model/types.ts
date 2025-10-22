import { FC, JSX, SVGProps } from 'react';

import type { Technology } from '@/entities/tecnology';

export type TabId = 'home' | 'about' | 'skills' | 'projects' | 'contacts';
export type Tab = {
	id: TabId;
	title: string;
};

export type Projects = {
	id: string;
	title: string;
	date: string;
	description: string;
	img: string;
	techs: (Technology | undefined)[];
	git: string;
	link: string;
};

export type AboutBageItem = {
	id: string;
	title: string;
	content: JSX.Element;
	href?: string;
	icon: JSX.Element;
};

export type WorkItem = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
};

export type EducationItem = {
	degree: string;
	period: string;
	major: string;
	university: string;
	focus: string;
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

export type MapButton = {
	id: string;
	title: string;
	link: string;
};
