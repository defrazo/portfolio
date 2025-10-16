import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

interface ZoomOnHoverProps {
	children: ReactNode;
	scale?: number;
	translate?: [number, number];
	className?: string;
}

const ZoomOnHover = ({ children, scale = 2, translate = [0, 0], className }: ZoomOnHoverProps) => {
	return (
		<div
			className={cn(
				'z-50 flex origin-center justify-center rounded-full transition-transform duration-700 hover:cursor-zoom-in',
				className
			)}
			onMouseEnter={(e) =>
				(e.currentTarget.style.transform = `scale(${scale}) translate(${translate[0]}px, ${translate[1]}px)`)
			}
			onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
		>
			{children}
		</div>
	);
};

export default ZoomOnHover;
