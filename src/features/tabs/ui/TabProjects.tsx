import React from 'react';

import { PROJECTS } from '@/entities/project';
import { cn } from '@/shared/lib/utils';
import { Button, Divider, Link } from '@/shared/ui';

export const TabProjects = () => {
	return (
		<div className="flex flex-col gap-4">
			{PROJECTS.map(({ slug, title, description, img, link, status }, idx) => (
				<React.Fragment key={slug}>
					{idx > 0 && <Divider />}
					<div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
						<div className="h-full flex-1 overflow-hidden rounded-xl border border-solid border-(--border-color) bg-(--bg-tertiary) p-0.5 transition-transform duration-500 hover:scale-105 xl:min-h-52.5">
							<Link size="custom" to={`/projects/${slug}`} variant="custom">
								<img
									alt={`Иллюстрация: главный экран ${title}`}
									className="no-touch-callout rounded-lg object-cover"
									src={img}
								/>
							</Link>
						</div>
						<div className="flex flex-col gap-3 lg:flex-1 lg:justify-between lg:gap-2 xl:h-full xl:gap-3">
							<div className="border-solid border-(--accent-secondary) lg:border-b lg:pb-1.5">
								<h2 className="text-2xl leading-tight font-bold text-(--accent-secondary) lg:text-(--color-primary) xl:text-3xl xl:leading-normal">
									{title}
									<span
										className={cn(
											'trim ml-1.5 inline-block rounded-md px-2 py-1.5 align-super text-xs leading-none font-medium whitespace-nowrap',
											status === 'Завершено'
												? 'bg-(--tone-strong) text-(--color-secondary)'
												: 'bg-(--status-success-op) text-(--status-success)'
										)}
									>
										{status}
									</span>
								</h2>
							</div>
							<p className="text-justify text-sm xl:text-base">{description}</p>
							<div className="mt-auto flex flex-col justify-between gap-2 text-center lg:flex-row">
								<Link
									className="flex-1 px-3 py-2 text-xs shadow-(--shadow) md:px-4 xl:text-sm"
									size="custom"
									to={`/projects/${slug}`}
									variant="accent"
								>
									Подробнее
								</Link>
								<Button
									className="flex-1 px-3 py-2 text-xs whitespace-nowrap shadow-(--shadow) xl:px-4 xl:text-sm"
									href={link}
									rel="noopener noreferrer"
									size="custom"
									target="_blank"
									variant="outline"
								>
									Перейти на сайт
								</Button>
							</div>
						</div>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};
