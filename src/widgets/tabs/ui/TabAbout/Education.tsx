import type { EducationItem } from '../../model';
import { SectionTitle } from '..';

const educationHistory: EducationItem[] = [
	{
		degree: 'Аспирантура',
		period: '2020 – 2023',
		major: '41.06.01 Политические науки и регионоведение',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Исследовательская методология, визуализация данных, преподавание',
	},
	{
		degree: 'Магистратура',
		period: '2018 – 2020',
		major: '40.04.01 Юриспруденция',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Нормативные требования, работа с документами',
	},
	{
		degree: 'Бакалавриат',
		period: '2014 – 2018',
		major: '09.03.03 Прикладная информатика в экономике',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Основы программирования, базы данных, анализ данных',
	},
];

export const Education = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Образование" />
			<p className="text-justify text-lg leading-snug">
				Сочетание IT-образования, юридической подготовки и научного опыта позволяет мне подходить к
				фронтенд-разработке взвешенно: решать задачи с учетом технических ограничений, формальных требований и
				того, как интерфейс воспринимает пользователь.
			</p>
			<div className="flex flex-col gap-4">
				{educationHistory.map(({ degree, period, major, university, focus }, idx) => (
					<div
						key={idx}
						className="flex flex-col gap-1.5 rounded-2xl border border-transparent bg-(--bg-accent) p-4 transition hover:border-(--accent-primary-hover)"
					>
						<div className="flex items-baseline gap-2">
							<h3 className="text-lg font-semibold">{degree}</h3>
							<span className="text-sm text-(--color-secondary)">({period})</span>
						</div>
						<div className="flex flex-col">
							<p className="text-(--color-accent)">{major}</p>
							<p className="text-(--color-secondary)">{university}</p>
						</div>
						{focus && <p>{focus}</p>}
					</div>
				))}
			</div>
		</div>
	);
};
