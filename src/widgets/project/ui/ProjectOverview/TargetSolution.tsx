import { Lightbulb, Target } from 'lucide-react';

export const TargetSolution = ({ target, solution }: { target: string; solution: string }) => {
	const INFO_BLOCKS = [
		{
			label: 'Задача',
			value: target,
			Icon: Target,
			bg: 'bg-(--accent-secondary-dark)',
			color: 'text-(--accent-secondary)',
		},
		{
			label: 'Решение',
			value: solution,
			Icon: Lightbulb,
			bg: 'bg-(--accent-primary-dark)',
			color: 'text-(--color-accent)',
		},
	];

	return (
		<div className="flex flex-col gap-2 lg:gap-4">
			<h2 className="project-header">Что сделано</h2>
			{INFO_BLOCKS.map(({ label, value, Icon, bg, color }) => (
				<div key={label} className="group card-surface flex-1">
					<div className="mb-3 flex items-center gap-3">
						<div className={`flex size-8 items-center justify-center rounded-xl shadow-(--shadow) ${bg}`}>
							<Icon
								className={`size-4 transition-transform duration-500 group-hover:scale-125 ${color}`}
							/>
						</div>
						<h3 className={`text-lg font-semibold lg:text-xl ${color}`}>{label}</h3>
					</div>
					<p className="text-justify text-sm leading-tight text-(--color-secondary) transition-colors group-hover:text-(--color-primary) md:text-base lg:leading-snug">
						{value}
					</p>
				</div>
			))}
		</div>
	);
};
