import { Divider } from '@/shared/ui';

import type { TechGroup } from '../../../model';
import { TechCard } from '.';

export const TechSection = ({ group }: { group: TechGroup }) => {
	const { skills, title, icon: Icon, color } = group;

	return (
		<div className="flex flex-col gap-2">
			<div className={`flex items-center gap-2 text-[${color}]`}>
				<Icon />
				<h3 className="text-xl whitespace-nowrap md:text-2xl">{title}</h3>
				<Divider className="w-full" />
			</div>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
				{skills.map((tech) => (
					<TechCard key={tech.label} tech={tech} />
				))}
			</div>
		</div>
	);
};
