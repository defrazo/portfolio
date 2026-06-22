import type { FC, SVGProps } from 'react';

export type Technology = {
	label: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	description?: string;
	skill: number;
};
