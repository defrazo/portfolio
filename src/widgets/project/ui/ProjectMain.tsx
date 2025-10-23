import { Calendar, ExternalLink, Lightbulb, Target, User } from 'lucide-react';

import type { Technology } from '@/entities/tecnology';
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
	techs?: Technology[];
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
	return (
		<div className="flex flex-col gap-6 text-center">
			<h1 className="text-5xl font-bold tracking-tight">{title}</h1>
			<div className="mx-auto h-1 w-24 animate-pulse rounded-full bg-linear-to-r from-blue-500 to-cyan-500" />
			<p className="mx-auto max-w-4xl text-xl leading-tight">{description}</p>
			<div className="flex w-full items-center select-none">
				<div className="h-0.5 w-full bg-linear-to-l from-(--accent-secondary)" />
				<div className="flex shrink-0 flex-wrap items-center justify-center gap-6 rounded-full border-2 border-solid border-(--accent-secondary) bg-(--bg-secondary) px-4 py-2 text-sm">
					<div className="flex items-center gap-2">
						<User className="size-4" />
						<span>Frontend Developer</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar className="size-4" />
						<span>{date}</span>
					</div>
					<div className="rounded-full bg-green-500/10 px-3 py-1 font-medium text-green-600 dark:text-green-400">
						{statusLink ? (
							<a href={statusLink} rel="noopener noreferrer" target="_blank">
								{status}
							</a>
						) : (
							status
						)}
					</div>
				</div>
				<div className="h-0.5 w-full bg-linear-to-r from-(--accent-secondary)" />
			</div>
			<div className="group relative">
				<div className="absolute inset-0 rounded-2xl bg-linear-to-r from-(--accent-primary-op) to-(--accent-primary-op) opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
				<DesktopGallery
					className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.035]"
					images={gallery}
				/>
			</div>
			{demoLink && (
				<div className="mx-auto flex items-center gap-3">
					<div className="h-px w-16 bg-linear-to-l from-(--color-accent) to-transparent" />
					<Button rightIcon={<ExternalLink className="size-5" />} variant="accent">
						<a className="font-semibold" href={demoLink} rel="noopener noreferrer" target="_blank">
							Попробовать {title}
						</a>
					</Button>
					<div className="h-px w-16 bg-linear-to-r from-(--color-accent) to-transparent" />
				</div>
			)}
			<div className="flex gap-4">
				<div className="group rounded-2xl border border-transparent bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op)">
					<div className="mb-3 flex items-center gap-3">
						<div className="flex size-8 items-center justify-center rounded-xl bg-(--accent-secondary-dark)">
							<Target className="size-4 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125" />
						</div>
						<h3 className="text-xl font-semibold text-(--accent-secondary)">Задача</h3>
					</div>
					<p className="leading-relaxed text-(--color-secondary) transition-colors group-hover:text-(--color-primary)">
						{target}
					</p>
				</div>
				<div className="group rounded-2xl border border-transparent bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op)">
					<div className="mb-3 flex items-center gap-3">
						<div className="flex size-8 items-center justify-center rounded-xl bg-(--accent-primary-dark)">
							<Lightbulb className="size-4 text-(--accent-primary) transition-transform duration-500 group-hover:scale-125" />
						</div>
						<h3 className="text-xl font-semibold text-(--color-accent)">Решение</h3>
					</div>
					<p className="leading-relaxed text-(--color-secondary) transition-colors group-hover:text-(--color-primary)">
						{solution}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-left text-3xl font-bold">Технологии</h2>
				<div className="flex flex-wrap justify-between gap-4">
					{techs!.map((tech) => {
						const Icon = tech!.icon;
						return (
							<div
								key={tech!.name}
								className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-(--border-color) bg-(--bg-secondary) px-3 py-3 transition-all duration-700 hover:-translate-y-4 hover:border-(--accent-primary) hover:shadow-lg"
							>
								<Icon className="size-6 transition-transform duration-700 group-hover:scale-125" />
								<span className="w-fit font-medium">{tech!.name}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
