import { CheckCircle2 } from 'lucide-react';

import { FEATURES_KANBAN, PROJECTS } from '@/entities/project';
import { Divider } from '@/shared/ui';
import { ProjectFooter, ProjectHeader, ProjectMain } from '@/widgets/project';

export const KanbanPage = () => {
	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[2].link} linkGit={PROJECTS[2].git} />
			<div className="flex flex-col gap-2 px-4 lg:px-12 xl:gap-6">
				<ProjectMain
					date={PROJECTS[2].date}
					demoLink={PROJECTS[2].link}
					description={PROJECTS[2].description}
					gallery={PROJECTS[2].gallery}
					galleryM={PROJECTS[2].galleryM}
					solution={PROJECTS[2].solution}
					status={PROJECTS[2].status}
					statusLink={PROJECTS[2].git}
					target={PROJECTS[2].target}
					techs={PROJECTS[2].techs}
					title={PROJECTS[2].title}
				/>
				<div className="flex flex-1 flex-col gap-2 lg:gap-4">
					<h2 className="project-header">Ключевые возможности</h2>
					<div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4">
						{FEATURES_KANBAN.map(({ title, icon: Icon, color, lead, bullets }) => (
							<div key={title} className="group card-surface flex flex-col justify-between">
								<div className="flex flex-col gap-2">
									<div className="flex items-center gap-2">
										<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bg-secondary) shadow-(--shadow)">
											<Icon
												className={`size-5 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125 ${color}`}
											/>
										</div>
										<div className="flex flex-col leading-snug">
											<h4 className="w-full text-base font-semibold text-(--color-primary) group-hover:text-(--color-accent) md:text-lg lg:text-xl">
												{title}
											</h4>
											<p className="text-xs text-(--color-secondary) lg:text-sm">{lead}</p>
										</div>
									</div>
									<Divider />
									{bullets && (
										<ul className="space-y-1">
											{bullets.map((bullet, idx) => (
												<li
													key={idx}
													className="flex items-center gap-2 text-sm leading-relaxed text-(--color-secondary) hover:text-(--color-primary) lg:text-base"
												>
													<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-(--accent-secondary)" />
													{bullet}
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<ProjectFooter next="onemate" previous="portfolio" />
		</>
	);
};
