import { Lightbulb, Target } from 'lucide-react';

interface TargetSolutionProps {
	target: string;
	solution: string;
}

export const TargetSolution = ({ target, solution }: TargetSolutionProps) => {
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
		<div className="flex flex-col gap-4 md:flex-row">
			{INFO_BLOCKS.map(({ label, value, Icon, bg, color }) => (
				<div
					key={label}
					className="group rounded-2xl border border-(--accent-primary-hover-op) bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--accent-primary-hover-op) md:border-transparent"
				>
					<div className="mb-3 flex items-center gap-3">
						<div className={`flex size-8 items-center justify-center rounded-xl ${bg}`}>
							<Icon
								className={`size-4 transition-transform duration-500 group-hover:scale-125 ${color}`}
							/>
						</div>
						<h3 className={`text-lg font-semibold md:text-xl ${color}`}>{label}</h3>
					</div>
					<p className="text-sm leading-tight text-(--color-secondary) transition-colors group-hover:text-(--color-primary) md:text-base md:leading-snug">
						{value}
					</p>
				</div>
			))}
		</div>
	);
};
