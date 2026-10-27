import type { ReactNode } from 'react';

import { useDeviceType, useOrientation } from '@/shared/lib/hooks';

import { cn } from '../lib/utils';

interface LayoutProps {
	rightSide?: ReactNode;
	hideRightOnMobile?: boolean;
	children: ReactNode;
}

export function Layout({ hideRightOnMobile = false, rightSide, children }: LayoutProps) {
	const device = useDeviceType();
	const orientation = useOrientation();

	const right = hideRightOnMobile && device === 'mobile' ? null : rightSide;

	return (
		<div
			className={cn(
				'mx-auto flex min-h-svh w-full flex-col p-4 md:pt-(--sidebar-top) md:[--sidebar-top:max(24px,calc((100svh-600px)/2))] xl:max-w-6xl xl:px-0',
				orientation === 'landscape' ? 'px-[20dvw] lg:px-[5dvw] xl:px-0' : ''
			)}
		>
			<div className="flex w-full flex-1 items-stretch gap-4">
				<main className="flex min-w-0 flex-1 flex-col">{children}</main>
				{right && <aside className="flex w-62.5 shrink-0 flex-col">{right}</aside>}
			</div>
		</div>
	);
}
