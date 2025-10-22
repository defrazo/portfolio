import type { ReactNode } from 'react';

import { useDeviceType, useOrientation } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';

interface LayoutProps {
	leftSide?: ReactNode;
	rightSide?: ReactNode;
	hideLeftOnMobile?: boolean;
	hideRightOnMobile?: boolean;
	children: ReactNode;
}

export function Layout({
	hideLeftOnMobile = false,
	hideRightOnMobile = false,
	leftSide,
	rightSide,
	children,
}: LayoutProps) {
	const device = useDeviceType();
	const orientation = useOrientation();

	const left = hideLeftOnMobile && device === 'mobile' ? null : leftSide;
	const right = hideRightOnMobile && device === 'mobile' ? null : rightSide;

	const capMin = 600;

	return (
		<div
			className={cn(
				'mx-auto min-h-svh w-full xl:max-w-6xl',
				orientation === 'landscape' ? 'px-[10dvw] lg:px-0' : 'px-4'
			)}
			style={{
				paddingBlock: `max(calc((100svh - ${capMin}px)/2), 24px)`,
			}}
		>
			<div
				className={cn(
					'grid w-full gap-4',
					left && right
						? 'grid-cols-[250px_1fr_250px]'
						: left
							? 'grid-cols-[250px_1fr]'
							: right
								? 'grid-cols-[1fr_250px]'
								: ''
				)}
			>
				{left && <aside className="flex">{left}</aside>}
				<main className="flex">{children}</main>
				{right && <aside>{right}</aside>}
			</div>
		</div>
	);
}
