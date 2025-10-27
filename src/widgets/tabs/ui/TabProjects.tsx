import React from 'react';
import { ExternalLink, SquareMousePointer } from 'lucide-react';

import { PROJECTS } from '@/entities/project';
import { useDeviceType } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
import { Button, Divider, Link } from '@/shared/ui';

import { SectionTitle } from '.';

export const TabProjects = () => {
	const device = useDeviceType();

	return (
		<>
			<SectionTitle title="Проекты" />
			<div className="flex flex-col gap-4">
				{PROJECTS.map((project, idx) => (
					<React.Fragment key={project.id}>
						{idx > 0 && <Divider />}
						<div
							className={cn(
								'flex flex-col items-center gap-4 md:flex-row',
								idx !== PROJECTS.length - 1 && 'mb-2'
							)}
						>
							<div className="flex-1 overflow-hidden rounded-4xl border border-solid border-(--border-color) bg-(--bg-primary)">
								<Link className="bg-black" to={`/project/${project.id}`} variant="custom">
									<img
										alt={`Иллюстрация: главный экран ${project.title}`}
										className="scale-135 transition-transform duration-500 hover:scale-110"
										height={277}
										loading="lazy"
										src={project.img}
										width={490}
									/>
								</Link>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-4">
								<div className="border-b border-solid border-(--accent-secondary) pb-1.5">
									<h2 className="text-2xl font-bold md:text-3xl">
										{project.title}
										<span className="ml-1.5 align-super text-xs text-(--color-disabled) md:text-sm">
											{project.date}
										</span>
									</h2>
								</div>
								<p className="text-justify text-sm md:text-base">{project.description}</p>
								<div className="flex justify-between gap-2">
									<Link
										className="flex-1 px-3 py-2 text-xs md:px-4 md:text-sm"
										rightIcon={device !== 'mobile' && <SquareMousePointer className="size-5" />}
										size="custom"
										to={`/project/${project.id}`}
										variant="accent"
									>
										Подробнее
									</Link>
									<Button
										className="shrink-0 px-3 py-2 text-xs md:px-4 md:text-sm"
										href={project.link}
										rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
										size="custom"
										variant="outline"
									>
										Live Demo
									</Button>
									<Button
										className="shrink-0 px-3 py-2 text-xs md:px-4 md:text-sm"
										href={project.git}
										rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
										size="custom"
										variant="outline"
									>
										GitHub
									</Button>
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</>
	);
};
