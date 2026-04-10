import { WORK_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			<div className="flex flex-col gap-2 lg:gap-4">
				{WORK_HISTORY.map(({ id, role, company, period, summary, highlights }) => (
					<article key={id} className="card-surface flex flex-col gap-3 p-6!">
						<header className="flex flex-col gap-3 lg:gap-3">
							<div className="flex flex-col items-baseline gap-2 xl:flex-row">
								<h3 className="text-2xl leading-tight font-semibold lg:leading-4">{role}</h3>
							</div>
							<div className="flex items-center gap-3 text-sm lg:text-base">
								<span className="text-lg font-semibold text-(--color-accent)">{company}</span>
								<span className="mt-1 size-1 rounded-full bg-(--color-secondary)" />
								<span className="text-(--color-secondary)">{period}</span>
							</div>
						</header>
						<div className="rounded-2xl border border-solid border-(--accent-primary-hover-op) bg-(--bg-secondary) px-4 py-3 text-justify">
							{summary}
						</div>
						<h2 className="text-lg font-semibold text-(--color-accent)">Ключевые результаты:</h2>
						<ul className="space-y-4">
							{highlights.map((highlight, idx) => (
								<li key={idx} className="relative pl-4 text-justify text-sm leading-4 lg:text-base">
									<span className="absolute top-2 left-0 size-1 rounded-full bg-(--color-accent)" />
									<span className="font-semibold">{highlight.title}</span>
									<span className="text-(--color-secondary)"> — </span>
									<span className="text-(--color-secondary)">{highlight.desc}</span>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</div>
	);
};
