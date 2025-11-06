import type { Skill } from '../../model';
import { SkillBadge } from '.';

export const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="mx-auto flex items-center gap-3">
				<div className="h-px w-16 bg-linear-to-l from-(--color-accent) to-transparent" />
				<h3 className="text-xl font-bold md:text-2xl">{title}</h3>
				<div className="h-px w-16 bg-linear-to-r from-(--color-accent) to-transparent" />
			</div>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
				{skills.map(({ label, color, icon, value }) => (
					<SkillBadge key={label} color={color} icon={icon} label={label} value={value} />
				))}
			</div>
		</div>
	);
};
