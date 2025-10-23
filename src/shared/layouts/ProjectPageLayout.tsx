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
		<div className="core-base core-border hide-scrollbar relative mx-auto my-12 flex flex-1 cursor-default flex-col gap-4 overflow-auto rounded-xl shadow-(--shadow) select-none xl:max-w-6xl">
			{children}
			<ScrollToTop />
		</div>
	);
};
