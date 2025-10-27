import { Calendar, ExternalLink, Lightbulb, Target, User } from 'lucide-react';

import type { Technology } from '@/entities/tecnology';
import { useDeviceType } from '@/shared/lib/hooks';
import { Button, DesktopGallery } from '@/shared/ui';

interface ProjectMainProps {
	title: string;
	description: string;
	date: string;
	status: string;
	statusLink?: string;
	gallery: string[];
	demoLink?: string;
	target: string;
	solution: string;
	techs: Technology[];
}

export const ProjectMain = ({
	title,
	description,
	date,
	status,
	statusLink,
	gallery,
	demoLink,
	target,
	solution,
	techs,
}: ProjectMainProps) => {
	const device = useDeviceType();

	return (
		<div className="flex flex-col gap-6 text-center">
			<div className="flex flex-col gap-2.5">
				<h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
				<div className="mx-auto h-1 w-24 animate-pulse rounded-full bg-linear-to-r from-(--accent-primary) to-(--color-accent)" />
			</div>
			<p className="mx-auto max-w-4xl leading-tight md:text-xl">{description}</p>
			<div className="flex w-full items-center select-none">
				<div className="h-0.5 bg-linear-to-l from-(--accent-secondary) md:w-full" />
				<div className="flex w-full shrink-0 flex-col flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-solid border-(--accent-secondary) bg-(--bg-secondary) px-4 py-2 text-sm md:w-fit md:flex-row md:gap-6 md:rounded-full">
					<div className="flex items-center gap-2">
						<User className="size-4" />
						<span>Frontend Developer</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar className="size-4" />
						<span>{date}</span>
					</div>
					<div className="rounded-full bg-(--status-success-op) px-3 py-1 font-medium text-[#05df72]">
						{statusLink ? (
							<a href={statusLink} rel="noopener noreferrer" target="_blank">
								{status}
							</a>
						) : (
							status
						)}
					</div>
				</div>
				<div className="h-0.5 bg-linear-to-r from-(--accent-secondary) md:w-full" />
			</div>
			<div className="group relative">
				<div className="absolute inset-0 rounded-2xl bg-linear-to-r from-(--accent-primary-op) to-(--accent-primary-op) opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
				<DesktopGallery
					className="rounded-2xl border border-solid border-(--border-color) transition-transform duration-500 group-hover:scale-[1.035]"
					images={gallery}
				/>
			</div>
			{demoLink && (
				<div className="mx-auto flex items-center gap-3">
					<div className="h-px w-10 bg-linear-to-l from-(--color-accent) to-transparent md:w-16" />
					<Button
						className="text-sm leading-tight font-semibold md:text-base md:leading-normal"
						href={demoLink}
						rel="noopener noreferrer"
						rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
						target="_blank"
						variant="accent"
					>
						Попробовать {title}
					</Button>
					<div className="h-px w-10 bg-linear-to-r from-(--color-accent) to-transparent md:w-16" />
				</div>
			)}
			<div className="flex flex-col gap-4 md:flex-row">
				<div className="group rounded-2xl border border-(--border-accent-op) bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op) md:border-transparent">
					<div className="mb-3 flex items-center gap-3">
						<div className="flex size-8 items-center justify-center rounded-xl bg-(--accent-secondary-dark)">
							<Target className="size-4 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125" />
						</div>
						<h3 className="text-lg font-semibold text-(--accent-secondary) md:text-xl">Задача</h3>
					</div>
					<p className="text-sm leading-tight text-(--color-secondary) transition-colors group-hover:text-(--color-primary) md:text-base md:leading-snug">
						{target}
					</p>
				</div>
				<div className="group rounded-2xl border border-(--accent-primary-hover) bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op) md:border-transparent">
					<div className="mb-3 flex items-center gap-3">
						<div className="flex size-8 items-center justify-center rounded-xl bg-(--accent-primary-dark)">
							<Lightbulb className="size-4 text-(--accent-primary) transition-transform duration-500 group-hover:scale-125" />
						</div>
						<h3 className="text-lg font-semibold text-(--color-accent) md:text-xl">Решение</h3>
					</div>
					<p className="text-sm leading-tight text-(--color-secondary) transition-colors group-hover:text-(--color-primary) md:text-base md:leading-snug">
						{solution}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-left text-2xl font-bold md:text-3xl">Технологии</h2>
				<div className="flex flex-wrap justify-evenly gap-2 md:gap-4">
					{techs.map(({ name, icon: Icon }) => {
						return (
							<Button
								key={name}
								className="group min-w-36 border border-solid border-(--accent-primary-hover) bg-(--bg-accent) px-4 py-2 text-sm transition-all duration-700 hover:-translate-y-4 hover:border-(--accent-primary-hover) hover:shadow-lg md:border-transparent md:px-6 md:py-3 md:text-base"
								leftIcon={
									<Icon className="size-6 transition-transform duration-700 group-hover:scale-125" />
								}
								size="custom"
								variant="outline"
							>
								{name}
							</Button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
