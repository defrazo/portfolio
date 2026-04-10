import { FEATURES_ONEMATE, PROJECTS } from '@/entities/project';
import { ProjectFooter, ProjectHeader, ProjectOverview } from '@/widgets/project';

export const OnematePage = () => {
	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[0].link} linkGit={PROJECTS[0].git} />
			<ProjectOverview features={FEATURES_ONEMATE} project={PROJECTS[0]} />
			<ProjectFooter next="portfolio" previous="kanban" />
		</>
	);
};
