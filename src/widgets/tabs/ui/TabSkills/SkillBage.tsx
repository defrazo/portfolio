import type { FC, SVGProps } from 'react';

interface SkillBageProps {
	label: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	value: number;
	color: string;
}

export const SkillBage = ({ label, icon, value, color }: SkillBageProps) => {
	const Icon = icon;

	return (
		<div className="core-base grid grid-cols-[auto_1fr] items-center gap-x-2 rounded-2xl p-3 shadow-(--shadow) transition-transform duration-500 select-none hover:z-10 hover:scale-[1.10]">
			<div className="row-span-2 flex size-12 items-center justify-center rounded-xl bg-(--bg-primary)">
				<Icon className="aspect-square size-6" />
			</div>
			<h2 className="font-bold">{label}</h2>
			<div className="flex items-center gap-2">
				<div className="h-1 w-full rounded-full bg-(--color-tertiary)">
					<div className="h-full" style={{ backgroundColor: color, width: `${value}%` }} />
				</div>
				<span className="font-semibold text-(--text-primary)" style={{ color: color }}>
					{value}%
				</span>
			</div>
		</div>
	);
};
