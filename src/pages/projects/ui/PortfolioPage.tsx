import { FEATURES_PORTFOLIO, PROJECTS } from '@/entities/project';
import { ProjectFooter, ProjectHeader, ProjectOverview } from '@/widgets/project';

export const PortfolioPage = () => {
	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[1].link} linkGit={PROJECTS[1].git} />
			<ProjectOverview features={FEATURES_PORTFOLIO} project={PROJECTS[1]} />
			<ProjectFooter next="kanban" previous="onemate" />
		</>
	);
};
