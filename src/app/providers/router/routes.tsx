import type { RouteObject } from 'react-router-dom';

import { PROJECTS } from '@/entities/project';
import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import { OnematePage, PortfolioPage } from '@/pages/projects';
import { Layout, ProjectPageLayout } from '@/shared/layouts';
import Sidebar from '@/widgets/sidebar';

export const routes: RouteObject[] = [
	{
		path: '/project/onemate',
		element: (
			<ProjectPageLayout title={PROJECTS[0].title}>
				<OnematePage />
			</ProjectPageLayout>
		),
	},
	{
		path: '/project/portfolio',
		element: (
			<ProjectPageLayout title={PROJECTS[1].title}>
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
