import { EDUCATION_HISTORY } from '../../model';
import { SectionTitle } from '..';

export const Education = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Образование" />
			<p className="text-justify text-base leading-snug md:text-lg">
				Сочетание IT-образования, юридической подготовки и научного опыта позволяет мне подходить к
				фронтенд-разработке взвешенно: решать задачи с учетом технических ограничений, формальных требований и
				того, как интерфейс воспринимает пользователь.
			</p>
			<div className="flex flex-col gap-4">
				{EDUCATION_HISTORY.map(({ id, degree, period, major, university, focus }) => (
					<article
						key={id}
						className="flex flex-col gap-1.5 rounded-2xl border border-(--accent-primary-hover-op) bg-(--bg-accent) p-3 transition hover:border-(--accent-primary-hover-op) md:border-transparent md:p-4"
					>
						<header className="flex items-baseline gap-2">
							<h3 className="text-lg font-semibold">{degree}</h3>
							<time className="text-xs text-(--color-secondary) md:text-sm">({period})</time>
						</header>
						<div className="flex flex-col text-sm leading-tight md:text-base md:leading-normal">
							<p className="text-(--color-accent)">{major}</p>
							<p className="leading-tight text-(--color-secondary)">{university}</p>
						</div>
						{focus && <p className="text-sm leading-tight md:text-base md:leading-normal">{focus}</p>}
					</article>
				))}
			</div>
		</div>
	);
};
