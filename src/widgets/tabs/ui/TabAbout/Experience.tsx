import { Divider } from '@/shared/ui';

import { WORK_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			{WORK_HISTORY.map(({ id, role, company, period, bullets }) => (
				<article
					key={id}
					className="flex flex-col gap-1.5 rounded-2xl border border-(--accent-primary-hover-op) bg-(--bg-accent) p-3 transition hover:border-(--accent-primary-hover-op) md:border-transparent md:p-4"
				>
					<header className="flex flex-col gap-2 md:gap-0">
						<div className="flex flex-col items-baseline gap-2 md:flex-row">
							<h3 className="text-lg leading-tight font-semibold md:leading-normal">{role}</h3>
							<time className="text-xs text-(--color-secondary) md:text-sm">({period})</time>
						</div>
						<div className="flex text-sm text-(--color-accent) md:text-base">{company}</div>
					</header>

					<Divider />

					<ul className="text-(--color-secondary)">
						{bullets.map((bullet, idx) => (
							<li key={idx} className="relative pl-4 text-justify text-sm md:text-left md:text-base">
								<span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-(--color-accent)" />
								{bullet}
							</li>
						))}
					</ul>
				</article>
			))}
		</div>
	);
};
