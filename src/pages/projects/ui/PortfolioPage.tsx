import { PROJECTS } from '@/entities/project';
import { ProjectFooter, ProjectHeader, ProjectMain } from '@/widgets/project';

export const PortfolioPage = () => {
	return (
		<>
			<ProjectHeader linkDemo={PROJECTS[1].link} linkGit={PROJECTS[1].link} />
			<div className="flex flex-col gap-2 px-4 lg:gap-6 lg:px-12">
				<ProjectMain
					date={PROJECTS[1].date}
					demoLink={PROJECTS[1].link}
					description={PROJECTS[1].description}
					gallery={PROJECTS[1].gallery}
					solution={PROJECTS[1].solution}
					status={PROJECTS[1].status}
					statusLink={PROJECTS[1].git}
					target={PROJECTS[1].target}
					techs={PROJECTS[1].techs}
					title={PROJECTS[1].title}
				/>
			</div>
			<ProjectFooter next="onemate" previous="onemate" />
		</>
	);
};
