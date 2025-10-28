import { CheckCircle2 } from 'lucide-react';

import { PROJECTS } from '@/entities/project';
import { DashboardMob } from '@/shared/content';
import { Divider, MobileGallery } from '@/shared/ui';
import { ProjectFooter, ProjectHeader, ProjectMain } from '@/widgets/project';

import { FEATURES } from '../model';

export const OnematePage = () => {
	const galleryMobile = [DashboardMob, DashboardMob, DashboardMob, DashboardMob, DashboardMob, DashboardMob];

	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[0].link} linkGit={PROJECTS[0].link} />
			<div className="flex flex-col gap-6 px-4 md:px-12">
				<ProjectMain
					date={PROJECTS[0].date}
					demoLink={PROJECTS[0].link}
					description={PROJECTS[0].description}
					gallery={PROJECTS[0].gallery}
					solution={PROJECTS[0].solution}
					status={PROJECTS[0].status}
					statusLink={PROJECTS[0].git}
					target={PROJECTS[0].target}
					techs={PROJECTS[0].techs}
					title={PROJECTS[0].title}
				/>
				<div className="flex flex-col justify-between gap-4 md:flex-row">
					<div className="flex flex-1 flex-col gap-4">
						<h2 className="text-2xl leading-5 font-bold md:text-3xl md:leading-normal">
							Ключевые возможности
						</h2>
						<div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
							{FEATURES.map(({ title, icon: Icon, lead, bullets }) => (
								<div
									key={title}
									className="group flex flex-col justify-between rounded-2xl border border-solid border-(--accent-primary-hover-op) bg-(--bg-accent) p-3 shadow-(--shadow) transition-colors hover:border-(--accent-primary-hover-op) md:border-transparent md:p-4"
								>
									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-2">
											<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-(--bg-secondary)">
												<Icon className="size-4 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125" />
											</div>
											<h4 className="w-full text-lg leading-4 font-semibold text-(--color-primary) group-hover:text-(--color-accent) md:text-xl">
												{title}
											</h4>
										</div>
										<p className="-mt-1 text-xs text-(--color-secondary) md:text-sm">{lead}</p>
										<Divider />
										{bullets && (
											<ul className="space-y-1">
												{bullets.map((bullet, idx) => (
													<li
														key={idx}
														className="flex gap-2 text-sm leading-relaxed text-(--color-secondary) hover:text-(--color-primary) md:text-base"
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
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold md:text-3xl">Мобильная версия</h2>
						<MobileGallery images={galleryMobile} />
					</div>
				</div>
			</div>
			<ProjectFooter next="portfolio" previous="portfolio" />
		</>
	);
};
