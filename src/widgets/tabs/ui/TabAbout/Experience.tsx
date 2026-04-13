import { WORK_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			<div className="flex flex-col gap-2 lg:gap-4">
				{WORK_HISTORY.map(({ id, role, company, period, summary, highlights }) => (
					<article key={id} className="card-surface flex flex-col gap-3 lg:p-6!">
						<header className="flex flex-col gap-2 lg:gap-3">
							<div className="flex flex-col items-baseline gap-2 xl:flex-row">
								<h3 className="text-xl leading-tight font-semibold lg:text-2xl lg:leading-4">{role}</h3>
							</div>
							<div className="flex flex-col gap-0.5 text-sm lg:flex-row lg:items-center lg:gap-3 lg:text-base">
								<span className="text-lg font-semibold text-(--color-accent)">{company}</span>
								<span className="mt-1 hidden size-1 rounded-full bg-(--color-secondary) lg:inline-block" />
								<span className="text-(--color-secondary)">{period}</span>
							</div>
						</header>
						<div className="rounded-2xl bg-(--bg-secondary) px-3 py-2 text-justify text-sm lg:px-4 lg:py-3 lg:text-base xl:border xl:border-solid xl:border-(--accent-primary-hover-op)">
							{summary}
						</div>
						<h2 className="text-lg leading-4 font-semibold text-(--color-accent)">Ключевые результаты:</h2>
						<ul className="space-y-4">
							{highlights.map((highlight, idx) => (
								<li key={idx} className="relative pl-4 text-sm leading-4 lg:text-justify lg:text-base">
									<span className="absolute top-2 left-0 size-1 rounded-full bg-(--color-accent)" />
									<div className="flex flex-col gap-0.5 lg:flex-row">
										<span className="font-semibold">{highlight.title}</span>
										<span className="hidden text-(--color-secondary) lg:inline-block">—</span>
										<span className="text-(--color-secondary)">{highlight.desc}</span>
									</div>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</div>
	);
};
