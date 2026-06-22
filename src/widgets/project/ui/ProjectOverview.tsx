import { ExternalLink } from 'lucide-react';

import { useStore } from '@/app/providers';
import type { Project } from '@/entities/project';
import { ImageViewer } from '@/features/modal';
import { useDeviceType } from '@/shared/lib/hooks';
import { Button, DesktopGallery, MobileGallery } from '@/shared/ui';

import { Features, StatusPanel, TargetSolution, Technologies } from './components';

export const ProjectOverview = ({ project }: { project: Project }) => {
	const { title, role, date, description, techs, git, link, status, target, solution, gallery, galleryM, features } =
		project;

	const device = useDeviceType();

	const { modalStore } = useStore();

	return (
		<div className="flex flex-col gap-2 px-4 text-center md:gap-4 lg:px-12 xl:gap-6">
			<div className="flex flex-col gap-1.5 lg:gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight md:text-3xl xl:text-5xl">{title}</h1>
				<div className="mx-auto h-1 w-16 animate-pulse rounded-full bg-linear-to-r from-(--accent-primary) to-(--color-accent) lg:w-24" />
			</div>
			<p className="mx-auto max-w-4xl text-justify leading-tight md:text-center md:text-lg xl:text-xl">
				{description}
			</p>
			<StatusPanel date={date} role={role} status={status} statusLink={git} />
			<div className="group relative">
				<DesktopGallery
					className="rounded-2xl border border-solid border-(--border-color) transition-transform duration-500"
					images={gallery}
					onImageClick={(image) => modalStore.setModal(<ImageViewer src={image} />)}
				/>
			</div>
			{link && (
				<div className="mx-auto flex items-center gap-3">
					<div className="h-px w-10 bg-linear-to-l from-(--color-accent) to-transparent md:w-16" />
					<Button
						className="text-sm leading-tight font-semibold shadow-(--shadow) md:text-base md:leading-normal"
						href={link}
						rel="noopener noreferrer"
						rightIcon={device !== 'mobile' && <ExternalLink className="size-5" />}
						target="_blank"
						variant="accent"
					>
						Открыть {title}
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
			{features && <Features features={features} />}
		</div>
	);
};
