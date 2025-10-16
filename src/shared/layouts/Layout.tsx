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
		// <div className="relative mx-auto flex min-h-svh text-sm xl:max-w-6xl xl:text-base">
		// 	{/* <div className="m-auto my-12 flex h-full min-h-[600px] w-full items-center text-sm xl:max-w-6xl xl:text-base"> */}
		// 	<div className="absolute top-1/2 left-0 max-h-[90vh] w-full -translate-y-1/2 transform">
		// 		<div
		// 			className={cn(
		// 				'grid h-fit min-h-[600px] w-full gap-4 py-[10vh]',
		// 				left && right
		// 					? 'grid-cols-[250px_1fr_250px]'
		// 					: left
		// 						? 'grid-cols-[250px_1fr]'
		// 						: right
		// 							? 'grid-cols-[1fr_250px]'
		// 							: '',
		// 				orientation === 'landscape' ? 'px-[25dvw] md:px-[10dvw] lg:px-0' : ''
		// 			)}
		// 		>
		// 			{left && <aside className="flex">{left}</aside>}
		// 			<main className="flex">{children}</main>
		// 			{right && <aside className="flex">{right}</aside>}
		// 		</div>
		// 	</div>
		// </div>

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
				<main className="flex min-h-[600px]">{children}</main>
				{right && <aside className="flex">{right}</aside>}
			</div>
		</div>
	);
}
