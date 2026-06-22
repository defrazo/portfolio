import { Chip } from '@/shared/ui';

import { ABOUT_CARDS, KEY_AREAS } from '../model';
import { AboutCard, Education, ExperienceSection } from './components/about';

export const TabAbout = () => {
	return (
		<>
			<div className="flex flex-col gap-4">
				<div className="mx-auto flex flex-col items-center">
					<h2 className="text-2xl leading-4 font-bold md:text-3xl xl:text-5xl xl:leading-tight">
						Евгений Летунов
					</h2>
					<div className="flex items-center gap-3">
						<div className="h-px w-10 bg-linear-to-l from-(--color-accent) to-transparent md:w-16" />
						<h3 className="my-2 font-light text-nowrap text-(--color-secondary) md:text-xl xl:text-2xl">
							Fullstack Developer
						</h3>
						<div className="h-px w-10 bg-linear-to-r from-(--color-accent) to-transparent md:w-16" />
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p className="-mt-3 text-justify text-base leading-snug xl:text-lg">
						Разрабатываю веб-приложения на React и Laravel – от пользовательских интерфейсов до серверной
						логики, баз данных и деплоя.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
					{ABOUT_CARDS.map((card) => (
						<AboutCard key={card.id} card={card} />
					))}
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-xs tracking-wider text-(--color-secondary) uppercase xl:text-sm">
						Ключевые области
					</h4>
					<div className="flex flex-wrap gap-2">
						{KEY_AREAS.map((tag) => (
							<Chip key={tag}>{tag}</Chip>
						))}
					</div>
				</div>
			</div>
			<ExperienceSection />
			<Education />
		</>
	);
};
