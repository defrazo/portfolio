import { ABOUT_BADGES, KEY_AREAS } from '../../model';
import { SectionTitle } from '..';
import { AboutBadge, Education, Experience } from '.';

const Tag = ({ children }: { children: React.ReactNode }) => (
	<span className="rounded-4xl border border-solid border-transparent bg-(--bg-secondary) px-2.5 py-1 text-xs hover:border-(--accent-primary-hover) hover:text-(--color-accent) md:text-sm">
		{children}
	</span>
);

export const TabAbout = () => {
	return (
		<>
			<SectionTitle title="Обо мне" />
			<div className="flex flex-col gap-4">
				<div className="mx-auto flex flex-col items-center md:gap-4">
					<h2 className="text-2xl leading-4 font-bold md:text-5xl md:leading-tight">Евгений Летунов</h2>
					<div className="flex items-center gap-3">
						<div className="h-px w-10 bg-linear-to-l from-(--color-accent) to-transparent md:w-16" />
						<h3 className="my-2 font-light text-nowrap text-(--color-secondary) md:text-2xl">
							Frontend Developer
						</h3>
						<div className="h-px w-10 bg-linear-to-r from-(--color-accent) to-transparent md:w-16" />
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p className="-mt-3 text-justify text-base leading-snug md:text-lg">
						Создаю веб-интерфейсы на стыке технологий и эстетики. Научный бэкграунд научил меня системному
						мышлению: взвешивать решения, продумывать детали и создавать по-настоящему функциональные
						решения.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
					{ABOUT_BADGES.map(({ icon, title, href, content }) => (
						<AboutBadge key={title} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-sm tracking-wider text-(--color-secondary) uppercase">Ключевые области</h4>
					<div className="flex flex-wrap gap-2">
						{KEY_AREAS.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
			</div>
			<Experience />
			<Education />
		</>
	);
};
