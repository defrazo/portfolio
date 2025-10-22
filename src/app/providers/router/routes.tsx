import type { RouteObject } from 'react-router-dom';

import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import { OnematePage, PortfolioPage } from '@/pages/projects';
import { Layout, ProjectPageLayout } from '@/shared/layouts';
import Sidebar from '@/widgets/sidebar';
import { projects } from '@/widgets/tabs/lib';

export const routes: RouteObject[] = [
	{
		path: '/project/onemate',
		element: (
			<ProjectPageLayout
				linkDemo={projects[0].link}
				linkGH={projects[0].git}
				next="portfolio"
				previous="portfolio"
				title={projects[0].title}
			>
				<OnematePage />
			</ProjectPageLayout>
		),
	},
	{
		path: '/project/portfolio',
		element: (
			<ProjectPageLayout
				linkDemo={projects[1].link}
				linkGH={projects[1].link}
				next="onemate"
				previous="onemate"
				title={projects[1].title}
			>
				<PortfolioPage />
			</ProjectPageLayout>
		),
	},
	{
		path: '/',
		element: (
			<Layout rightSide={<Sidebar />}>
				<MainPage />
			</Layout>
		),
	},
	{
		path: '*',
		element: (
			<Layout>
				<NotFoundPage />
			</Layout>
		),
	},
];
