import type { FC, ReactNode, SVGProps } from 'react';

interface SkillBageProps {
	label: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	value: number;
	color: string;
}

export const SkillBage = ({ label, icon, value, color }: SkillBageProps) => {
	const Icon = icon;
	return (
		<div className="core-border core-base grid h-fit origin-center transform-gpu grid-cols-[auto_1fr] items-center gap-x-2 bg-[var(--bg-primary)] p-3 shadow-[var(--shadow)] transition-transform duration-500 will-change-transform select-none hover:z-10 hover:scale-[1.10]">
			<div className="row-span-2 flex size-10 items-center justify-center rounded-xl bg-[var(--bg-primary)]">
				<Icon className="aspect-square size-6" />
			</div>
			<h2 className="text-base leading-4 font-bold">{label}</h2>
			<div className="col-start-2 flex items-center gap-2">
				<div className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-disabled)]">
					<div
						className="h-full bg-[var(--accent-default)] transition-all duration-700"
						style={{ backgroundColor: color, width: `${value}%` }}
					/>
				</div>
				<span style={{ color: color }} className="font-semibold whitespace-nowrap text-[var(--text-primary)]">
					{value}%
				</span>
			</div>
		</div>
	);
};
