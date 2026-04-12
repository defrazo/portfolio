import React from 'react';

import { PROJECTS } from '@/entities/project';
import { cn } from '@/shared/lib/utils';
import { Button, Divider, Link } from '@/shared/ui';

import { SectionTitle } from '.';

export const TabProjects = () => {
	return (
		<>
			<SectionTitle title="Проекты" />
			<div className="flex flex-col gap-4">
				{PROJECTS.map(({ slug, title, date, description, img, git, link }, idx) => (
					<React.Fragment key={slug}>
						{idx > 0 && <Divider />}
						<div
							className={cn(
								'flex flex-col items-center gap-2 lg:flex-row lg:gap-4',
								idx !== PROJECTS.length - 1 && 'mb-2'
							)}
						>
							<div className="flex-1 overflow-hidden rounded-4xl border border-solid border-(--border-color) bg-(--bg-primary)">
								<Link className="bg-black" to={`/projects/${slug}`} variant="custom">
									<img
										alt={`Иллюстрация: главный экран ${title}`}
										className="no-touch-callout aspect-(490/277) scale-130 object-cover transition-transform duration-500 hover:scale-110"
										height={277}
										loading="eager"
										src={img}
										width={490}
									/>
								</Link>
							</div>
							<div className="flex flex-col gap-3 lg:flex-1 lg:justify-between lg:gap-2 xl:gap-4">
								<div className="border-solid border-(--accent-secondary) lg:border-b lg:pb-1.5">
									<h2 className="text-2xl leading-tight font-bold text-(--accent-secondary) lg:text-(--color-primary) xl:text-3xl xl:leading-normal">
										{title}
										<span className="ml-1.5 align-super text-xs font-normal text-(--color-disabled) xl:text-sm">
											{date}
										</span>
									</h2>
								</div>
								<p className="-mt-2 text-justify text-sm xl:mt-0 xl:text-base">{description}</p>
								<div className="flex flex-col justify-between gap-2 md:flex-row">
									<Link
										className="flex-1 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
										size="custom"
										to={`/projects/${slug}`}
										variant="accent"
									>
										Подробнее
									</Link>
									<div className="flex gap-2">
										<Button
											className="min-w-28 flex-1 shrink-0 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
											href={link}
											rel="noopener noreferrer"
											size="custom"
											target="_blank"
											variant="outline"
										>
											Live Demo
										</Button>
										<Button
											className="min-w-28 flex-1 shrink-0 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
											href={git}
											rel="noopener noreferrer"
											size="custom"
											target="_blank"
											variant="outline"
										>
											GitHub
										</Button>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</>
	);
};
