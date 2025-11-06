import { ExternalLink } from 'lucide-react';

import type { Technology } from '@/entities/tecnology';
import { useDeviceType } from '@/shared/lib/hooks';
import { Button, DesktopGallery, MobileGallery } from '@/shared/ui';

import { StatusPanel, TargetSolution, Technologies } from '.';

interface ProjectMainProps {
	title: string;
	description: string;
	date: string;
	status: string;
	statusLink?: string;
	gallery: string[];
	galleryM?: string[];
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
	galleryM,
	demoLink,
	target,
	solution,
	techs,
}: ProjectMainProps) => {
	const device = useDeviceType();

	return (
		<div className="flex flex-col gap-2 text-center md:gap-4 lg:gap-6">
			<div className="flex flex-col gap-1.5 lg:gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-5xl">{title}</h1>
				<div className="mx-auto h-1 w-16 animate-pulse rounded-full bg-linear-to-r from-(--accent-primary) to-(--color-accent) lg:w-24" />
			</div>
			<p className="mx-auto max-w-4xl leading-tight md:text-lg lg:text-xl">{description}</p>
			<StatusPanel date={date} status={status} statusLink={statusLink} />
			<div className="group relative">
				<div className="absolute -inset-3 rounded-2xl bg-linear-to-r from-(--accent-primary-op) to-(--accent-primary-op) opacity-0 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
				<DesktopGallery
					className="rounded-2xl border border-solid border-(--border-color) transition-transform duration-500 group-hover:scale-[1.025]"
					images={gallery}
				/>
			</div>
			{demoLink && (
				<div className="mx-auto flex items-center gap-3">
					<div className="h-px w-10 bg-linear-to-l from-(--color-accent) to-transparent md:w-16" />
					<Button
						className="text-sm leading-tight font-semibold shadow-(--shadow) md:text-base md:leading-normal"
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
			<div
				className={`grid grid-rows-[auto_1fr] gap-2 lg:gap-4 ${galleryM ? 'grid-cols-1 md:grid-cols-[auto_1fr]' : 'grid-cols-2'} `}
			>
				<TargetSolution solution={solution} target={target} />
				{galleryM && (
					<div className="row-span-2 hidden flex-col gap-2 md:flex lg:gap-4">
						<h2 className="project-header">Мобильная версия</h2>
						<MobileGallery images={galleryM} />
					</div>
				)}
				<Technologies techs={techs} />
			</div>
		</div>
	);
};
