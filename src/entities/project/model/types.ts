import type { Technology } from '@/entities/tecnology';

export type Feature = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	color: string;
	lead: string;
	bullets: string[];
};

export type Project = {
	id: string;
	slug: string;
	title: string;
	date: string;
	description: string;
	img: string;
	techs: Technology[];
	git: string;
	link: string;
	status: string;
	target: string;
	solution: string;
	gallery: string[];
	galleryM?: string[];
	features: Feature[];
	previous: string;
	next: string;
};
