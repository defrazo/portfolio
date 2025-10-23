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
			<div className="flex flex-col gap-6 px-12">
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
				<div className="flex justify-between gap-4">
					<div className="flex flex-1 flex-col gap-4">
						<h2 className="text-3xl font-bold">Ключевые возможности</h2>
						<div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
							{FEATURES.map(({ title, icon: Icon, lead, bullets }) => (
								<div
									key={title}
									className="group flex flex-col justify-between rounded-2xl border border-solid border-transparent bg-(--bg-accent) p-4 text-sm shadow-(--shadow) transition-colors hover:border-(--border-accent-op)"
								>
									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-2">
											<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-(--bg-secondary)">
												<Icon className="size-4 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125" />
											</div>
											<h4 className="w-full text-lg leading-4 font-semibold text-(--color-primary) group-hover:text-(--color-accent)">
												{title}
											</h4>
										</div>
										<p className="-mt-1 text-sm text-(--color-secondary)">{lead}</p>
										<Divider />
										{bullets && (
											<ul className="space-y-2">
												{bullets.map((b, i) => (
													<li
														key={i}
														className="flex gap-2 leading-relaxed text-(--color-secondary) hover:text-(--color-primary)"
													>
														<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-secondary)" />
														<span>{b}</span>
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
						<h2 className="text-3xl font-bold">Мобильная версия</h2>
						<MobileGallery images={galleryMobile} />
					</div>
				</div>
			</div>
			<ProjectFooter next="portfolio" previous="portfolio" />
		</>
	);
};
