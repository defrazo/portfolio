import { Navigate, useParams } from 'react-router-dom';

import { PROJECTS } from '@/entities/project';
import { useDeviceType, useOrientation, usePageTitle } from '@/shared/lib/hooks';
import { ScrollToTop } from '@/shared/ui';
import { ProjectFooter, ProjectHeader, ProjectOverview } from '@/widgets/project';

export const ProjectPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const project = PROJECTS.find((item) => item.slug === slug) ?? null;

	usePageTitle(project?.title);

	const device = useDeviceType();
	const orientation = useOrientation();

	if (!project) return <Navigate replace to="/404" />;

	return (
		<div
			className={`mx-auto min-h-svh w-full p-2 lg:px-4 lg:py-12 xl:max-w-6xl ${(device === 'mobile' || device === 'tablet') && orientation === 'landscape' ? 'px-[20dvw] lg:px-[5dvw]' : ''}`}
		>
			<div className="core-border hide-scrollbar flex flex-1 cursor-default flex-col overflow-auto rounded-xl bg-(--bg-secondary) shadow-(--shadow) select-none">
				<div className="relative flex flex-1 flex-col gap-4">
					<ProjectHeader linkDemo={project.link} linkGit={project.git} />
					<ProjectOverview project={project} />
					<ProjectFooter next={project.next} previous={project.previous} />
				</div>
				<ScrollToTop />
			</div>
		</div>
	);
};
