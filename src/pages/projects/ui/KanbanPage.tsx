import { FEATURES_KANBAN, PROJECTS } from '@/entities/project';
import { ProjectFooter, ProjectHeader, ProjectOverview } from '@/widgets/project';

export const KanbanPage = () => {
	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[2].link} linkGit={PROJECTS[2].git} />
			<ProjectOverview features={FEATURES_KANBAN} project={PROJECTS[2]} />
			<ProjectFooter next="onemate" previous="portfolio" />
		</>
	);
};
