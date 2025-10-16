import type { RouteObject } from 'react-router-dom';

import NotFoundPage from '@/pages/not-found';

import { OnematePage } from '@/pages/projects';
import MainPage from '@/pages/main';
import Sidebar from '@/widgets/sidebar';
import { Layout, ProjectPageLayout } from '@/shared/layouts';

export const routes: RouteObject[] = [
	{
		path: '/project/onemate',
		element: (
			<ProjectPageLayout title="OneMate">
				<OnematePage />
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
