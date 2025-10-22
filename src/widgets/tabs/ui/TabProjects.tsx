import React from 'react';
import { ExternalLink, SquareMousePointer } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Button, Divider, Link } from '@/shared/ui';

import { projects } from '../lib';
import { SectionTitle } from '.';

export const TabProjects = () => {
	return (
		<>
			<SectionTitle title="Проекты" />
			<div className="flex flex-col gap-4">
				{projects.map((project, idx) => (
					<React.Fragment key={project.id}>
						<div className={cn('flex items-center gap-4', idx !== projects.length - 1 && 'mb-2')}>
							<div className="flex-1 overflow-hidden rounded-4xl bg-(--bg-primary)">
								<Link className="bg-black" to={`/project/${project.id}`} variant="custom">
									<img
										alt={`Иллюстрация: главный экран ${project.title}`}
										className="scale-130 transition-transform duration-500 hover:scale-110"
										src={project.img}
									/>
								</Link>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-4">
								<div className="border-b border-solid border-(--accent-secondary) pb-1.5">
									<h2 className="text-3xl font-bold">
										{project.title}
										<span className="ml-1.5 align-super text-sm text-(--color-disabled)">
											{project.date}
										</span>
									</h2>
								</div>
								<p className="text-justify">{project.description}</p>
								<div className="flex justify-between gap-2">
									<Link
										className="flex-1 px-4 py-2 text-sm"
										rightIcon={<SquareMousePointer className="size-5" />}
										size="custom"
										to={`/project/${project.id}`}
										variant="accent"
									>
										Подробнее
									</Link>
									<Button
										className="shrink-0 px-3 py-1.5 text-sm"
										rightIcon={<ExternalLink className="size-5" />}
										size="custom"
										variant="outline"
									>
										<a href={project.link}>Live Demo</a>
									</Button>
									<Button
										className="shrink-0 px-3 py-1.5 text-sm"
										rightIcon={<ExternalLink className="size-5" />}
										size="custom"
										variant="outline"
									>
										<a href={project.git}>GitHub</a>
									</Button>
								</div>
							</div>
						</div>
						{idx !== projects.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</div>
		</>
	);
};
