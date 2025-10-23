import { Divider } from '@/shared/ui';

import { WORK_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			{WORK_HISTORY.map(({ role, company, period, bullets }, idx) => (
				<div
					key={idx}
					className="flex flex-col gap-1.5 rounded-2xl border border-transparent bg-(--bg-accent) p-4 transition hover:border-(--accent-primary-hover)"
				>
					<div className="flex flex-col">
						<div className="flex items-baseline gap-2">
							<h3 className="text-lg font-semibold">{role}</h3>
							<span className="text-sm text-(--color-secondary)">({period})</span>
						</div>
						<div className="flex text-(--color-accent)">{company}</div>
					</div>
					<Divider />
					<ul className="text-(--color-secondary)">
						{bullets.map((bullet, idx) => (
							<li key={idx} className="relative pl-4">
								<span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-(--color-accent)" />
								{bullet}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};
