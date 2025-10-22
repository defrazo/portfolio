import { Button } from '@/shared/ui';

import { aboutBages } from '../../lib';
import { SectionTitle } from '..';
import { AboutBage, Education, Experience } from '.';

export const TabAbout = () => {
	const areas = [
		'React',
		'TypeScript',
		'Feature-Sliced Design',
		'Tailwind CSS',
		'State Management (MobX)',
		'Web Performance',
		'Clean Code',
		'Responsive Design',
		'Full-Cycle Frontend',
	];

	return (
		<>
			<SectionTitle title="Обо мне" />
			<div className="flex flex-col gap-4">
				<div className="mx-auto flex flex-col items-center gap-4">
					<h2 className="text-5xl leading-5 font-bold">Евгений Летунов</h2>
					<div className="flex items-center gap-3">
						<div className="h-px w-16 bg-linear-to-l from-(--color-accent) to-transparent" />
						<h3 className="my-2 text-xl font-light text-(--color-secondary) md:text-2xl">
							Frontend Developer
						</h3>
						<div className="h-px w-16 bg-linear-to-r from-(--color-accent) to-transparent" />
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p className="-mt-3 text-justify text-lg leading-snug">
						Создаю веб-интерфейсы на стыке технологий и эстетики. Научный бэкграунд научил меня системному
						мышлению: взвешивать решения, продумывать детали и создавать по-настоящему функциональные
						решения.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{aboutBages.map(({ icon, title, href, content }) => (
						<AboutBage key={title} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-sm tracking-wider text-(--color-secondary) uppercase">Ключевые области</h4>
					<div className="flex flex-wrap gap-2">
						{areas.map((tag) => (
							<Button className="cursor-default" size="sm" variant="outline">
								{tag}
							</Button>
						))}
					</div>
				</div>
			</div>
			<Experience />
			<Education />
		</>
	);
};
