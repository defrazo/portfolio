import type { Technology } from '@/entities/tecnology';

import { getSkillLevel } from '../../../model';

export const TechCard = ({ tech }: { tech: Technology }) => {
	const { label, icon: Icon, skill } = tech;

	const level = getSkillLevel(skill);

	return (
		<div className="flex w-full items-center justify-between gap-3 rounded-xl bg-(--bg-secondary) px-3 py-1.5 shadow-(--shadow) transition-transform duration-500 select-none hover:z-10 hover:scale-110">
			<Icon className="aspect-square size-10" />
			<div className="flex flex-1 flex-col gap-1">
				<h2 className="font-bold">{label}</h2>
				<div className="flex items-center gap-2">
					{Array.from({ length: 5 }).map((_, index) => {
						const isActive = index < skill;
						return (
							<div
								key={index}
								className="size-2.5 rounded-full"
								style={{ backgroundColor: isActive ? level.color : 'rgba(156, 163, 175, 0.25)' }}
							/>
						);
					})}
					<span className="ml-auto text-sm" style={{ color: level.color }}>
						{level.label}
					</span>
				</div>
			</div>
		</div>
	);
};
