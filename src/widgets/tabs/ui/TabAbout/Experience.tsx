import { Divider } from '@/shared/ui';

import { WORK_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			<div className="flex flex-col gap-2 lg:gap-4">
				{WORK_HISTORY.map(({ id, role, company, period, bullets }) => (
					<article key={id} className="card-surface flex flex-col gap-1.5">
						<header className="flex flex-col gap-2 lg:gap-0">
							<div className="flex flex-col items-baseline gap-2 lg:flex-row">
								<h3 className="text-lg leading-tight font-semibold lg:leading-normal">{role}</h3>
								<time className="text-xs text-(--color-secondary) lg:text-sm">({period})</time>
							</div>
							<div className="flex text-sm text-(--color-accent) lg:text-base">{company}</div>
						</header>
						<Divider />
						<ul className="space-y-1 text-(--color-secondary)">
							{bullets.map((bullet, idx) => (
								<li key={idx} className="relative pl-4 text-justify text-sm lg:text-left lg:text-base">
									<span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-(--color-accent)" />
									{bullet}
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</div>
	);
};
