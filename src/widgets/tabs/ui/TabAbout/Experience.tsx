import { Divider } from '@/shared/ui';

import type { WorkItem } from '../../model';
import { SectionTitle } from '..';

const workHistory: WorkItem[] = [
	{
		role: 'Frontend-разработчик',
		company: 'Личный проект',
		period: 'Январь 2025 – по настоящее время',
		bullets: [
			'Спроектировал приложение по Feature-Sliced Design, вынес состояние в MobX',
			'Интегрировал Supabase (Auth/DB), сделал адаптив и микровзаимодействия',
			'Разбивка по чанкам + lazy routes → TTI –35%',
		],
	},
	{
		role: 'Бригадир-инструктор территориального уровня',
		company: 'Управление Федеральной службы государственной статистики по Свердловской обл. и Курганской обл.',
		period: 'Июль 2020 – Ноябрь 2022',
		bullets: [
			'Координировал сбор и валидацию данных сельскохозяйственной микропереписи',
			'Создал шаблоны отчётности и автоматизированные таблицы → время подготовки –40%',
			'Готовил графики и визуализации для публичных отчётов',
		],
	},
	{
		role: 'Менеджер по закупкам и логистике',
		company: 'ООО «АМ ГЛОБАЛ»',
		period: 'Июнь 2018 – Июнь 2019',
		bullets: [
			'Оптимизировал цепочку поставок → срок поставки –2–3 дня',
			'Перевёл операционку в табличные модели и дашборды для контроля KPI',
		],
	},
];

export const Experience = () => {
	return (
		<div className="flex flex-col gap-4">
			<SectionTitle title="Опыт работы" />
			{workHistory.map(({ role, company, period, bullets }, idx) => (
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
