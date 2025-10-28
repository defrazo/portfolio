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
		<div className="core-border hide-scrollbar relative m-2 flex flex-1 cursor-default flex-col gap-4 overflow-auto rounded-xl bg-(--bg-secondary) shadow-(--shadow) select-none md:mx-auto md:my-12 xl:max-w-6xl">
			{children}
			<ScrollToTop />
		</div>
	);
};
