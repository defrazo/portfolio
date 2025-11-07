import type { ReactNode } from 'react';

import { useDeviceType, useOrientation, usePageTitle } from '@/shared/lib/hooks';
import { ScrollToTop } from '@/shared/ui';

export const ProjectPageLayout = ({ children, title }: { children: ReactNode; title: string }) => {
	usePageTitle(title);
	const device = useDeviceType();
	const orientation = useOrientation();

	return (
		<div
			className={`mx-auto min-h-svh w-full p-2 lg:px-4 lg:py-12 xl:max-w-6xl ${(device === 'mobile' || device === 'tablet') && orientation === 'landscape' ? 'px-[20dvw] lg:px-[5dvw]' : ''}`}
		>
			<div className="core-border hide-scrollbar flex flex-1 cursor-default flex-col overflow-auto rounded-xl bg-(--bg-secondary) shadow-(--shadow) select-none">
				<div className="relative flex flex-1 flex-col gap-4">{children}</div>
				<ScrollToTop />
			</div>
		</div>
	);
};
