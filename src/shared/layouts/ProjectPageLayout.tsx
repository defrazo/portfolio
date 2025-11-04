import type { ReactNode } from 'react';

import { usePageTitle } from '@/shared/lib/hooks';
import { ScrollToTop } from '@/shared/ui';

interface ProjectPageLayoutProps {
	children: ReactNode;
	title: string;
}

export const ProjectPageLayout = ({ children, title }: ProjectPageLayoutProps) => {
	usePageTitle(title);

	return (
		<div className="mx-auto min-h-svh w-full p-2 md:px-4 md:py-12 xl:max-w-6xl">
			<div className="core-border hide-scrollbar flex flex-1 cursor-default flex-col overflow-auto rounded-xl bg-(--bg-secondary) shadow-(--shadow) select-none">
				<div className="relative flex flex-1 flex-col gap-4">{children}</div>
				<ScrollToTop />
			</div>
		</div>
	);
};
