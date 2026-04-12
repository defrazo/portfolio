import type { ReactNode } from 'react';

import { useDeviceType, useOrientation } from '@/shared/lib/hooks';

interface LayoutProps {
	rightSide?: ReactNode;
	hideRightOnMobile?: boolean;
	children: ReactNode;
}

export function Layout({ hideRightOnMobile = false, rightSide, children }: LayoutProps) {
	const device = useDeviceType();
	const orientation = useOrientation();

	const right = hideRightOnMobile && device === 'mobile' ? null : rightSide;
	const capMin = 600;

	return (
		<div
			className={`mx-auto flex min-h-0 w-full flex-1 flex-col xl:max-w-6xl ${orientation === 'landscape' ? 'px-[20dvw] lg:px-[5dvw] xl:px-0' : 'px-4'}`}
			style={{ paddingBlock: `max(calc((100svh - ${capMin}px)/2), ${device === 'mobile' ? '40px' : '24px'})` }}
		>
			<div className="flex min-h-0 flex-1 gap-4">
				<main className="flex min-h-0 flex-1">{children}</main>
				{right && <aside className="w-62.5">{right}</aside>}
			</div>
		</div>
	);
}
