import type { FC, SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';

import type { Technology } from '@/entities/tecnology';

export type ExperienceType = 'fullstack' | 'frontend' | 'other';

export type WorkHistoryItem = {
	id: string;
	role: string;
	type: ExperienceType;
	company: string;
	period: string;
	summary: string;
	highlights: { title: string; desc: string }[];
};

export type TechGroup = {
	id: string;
	title: string;
	skills: Technology[];
	icon: FC<SVGProps<SVGSVGElement>>;
	color: string;
};

export type ProfileCard = {
	id: string;
	title: string;
	content: string;
	href?: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	withIndicator?: boolean;
};
