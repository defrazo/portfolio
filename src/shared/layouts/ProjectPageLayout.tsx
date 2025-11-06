import type { ReactNode } from 'react';

import { usePageTitle } from '@/shared/lib/hooks';
import { ScrollToTop } from '@/shared/ui';

export const ProjectPageLayout = ({ children, title }: { children: ReactNode; title: string }) => {
	usePageTitle(title);

	return (
		<div className="mx-auto min-h-svh w-full p-2 lg:px-4 lg:py-12 xl:max-w-6xl">
			<div className="core-border hide-scrollbar flex flex-1 cursor-default flex-col overflow-auto rounded-xl bg-(--bg-secondary) shadow-(--shadow) select-none">
				<div className="relative flex flex-1 flex-col gap-4">{children}</div>
				<ScrollToTop />
			</div>
		</div>
	);
};
