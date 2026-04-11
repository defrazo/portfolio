import type { RouteObject } from 'react-router-dom';

import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import { ProjectPage } from '@/pages/project';
import { Layout } from '@/shared/layouts';
import { Sidebar } from '@/widgets/sidebar';

export const routes: RouteObject[] = [
	{
		path: '/projects/:slug',
		element: <ProjectPage />,
	},
	{
		path: '/',
		element: (
			<Layout hideRightOnMobile rightSide={<Sidebar />}>
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
