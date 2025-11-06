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
				{PROJECTS.map(({ id, title, date, description, img, git, link }, idx) => (
					<React.Fragment key={id}>
						{idx > 0 && <Divider />}
						<div
							className={cn(
								'flex flex-col items-center gap-2 lg:flex-row lg:gap-4',
								idx !== PROJECTS.length - 1 && 'mb-2'
							)}
						>
							<div className="flex-1 overflow-hidden rounded-4xl border border-solid border-(--border-color) bg-(--bg-primary)">
								<Link className="bg-black" to={`/project/${id}`} variant="custom">
									<img
										alt={`Иллюстрация: главный экран ${title}`}
										className="no-touch-callout scale-[1.37] transition-transform duration-500 hover:scale-110"
										decoding="async"
										height={277}
										loading="lazy"
										src={img}
										width={490}
									/>
								</Link>
							</div>
							<div className="flex flex-col gap-3 lg:flex-1 lg:justify-between lg:gap-4">
								<div className="border-solid border-(--accent-secondary) lg:border-b lg:pb-1.5">
									<h2 className="text-2xl leading-tight font-bold text-(--accent-secondary) lg:text-3xl lg:leading-normal lg:text-(--color-primary)">
										{title}
										<span className="ml-1.5 align-super text-xs text-(--color-disabled) lg:text-sm">
											{date}
										</span>
									</h2>
								</div>
								<p className="-mt-2 text-justify text-sm lg:mt-0 lg:text-base">{description}</p>
								<div className="flex justify-between gap-2">
									<Link
										className="flex-1 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
										rightIcon={device !== 'mobile' && <SquareMousePointer className="size-5" />}
										size="custom"
										to={`/project/${id}`}
										variant="accent"
									>
										Подробнее
									</Link>
									<Button
										className="shrink-0 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
										href={link}
										rel="noopener noreferrer"
										rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
										size="custom"
										target="_blank"
										variant="outline"
									>
										Live Demo
									</Button>
									<Button
										className="shrink-0 px-3 py-2 text-xs shadow-(--shadow) md:px-4 md:text-sm"
										href={git}
										rel="noopener noreferrer"
										rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
										size="custom"
										target="_blank"
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
