import { useRef, useState } from 'react';

import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

interface MobileGalleryProps {
	images: string[];
	className?: string;
}

export const MobileGallery = ({ images, className }: MobileGalleryProps) => {
	const [current, setCurrent] = useState<number>(0);
	const startX = useRef<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
	const handleTouchEnd = (e: React.TouchEvent) => {
		if (startX.current === null) return;

		const diff = startX.current - e.changedTouches[0].clientX;
		if (diff > 50) next();
		else if (diff < -50) prev();
		startX.current = null;
	};

	const next = () => setCurrent((prev) => (prev + 1) % images.length);
	const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

	return (
		<div className={cn('relative flex flex-col items-center gap-3 rounded-2xl bg-(--bg-secondary) p-3', className)}>
			<div
				className="project-scroll max-h-[500px] max-w-xs overflow-x-hidden overscroll-contain scroll-auto"
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
			>
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((img, idx) => (
						<img
							key={idx}
							alt={`Slide ${idx}`}
							className="core-border w-full object-contain"
							loading="lazy"
							src={img}
						/>
					))}
				</div>
			</div>
			<div className="flex w-full items-center justify-between gap-2 px-2 py-1">
				<Button
					centerIcon={<IconBack className="size-5" />}
					className="pr-2 text-(--color-secondary) hover:text-(--color-accent)"
					size="custom"
					variant="mobile"
					onClick={prev}
				/>
				<div className="flex gap-1">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={cn(
								'mr-2 size-3 cursor-pointer rounded-full hover:bg-(--color-accent)',
								idx === current ? 'bg-(--color-accent)' : 'bg-(--color-secondary)'
							)}
							onClick={() => setCurrent(idx)}
						/>
					))}
				</div>
				<Button
					centerIcon={<IconForward className="size-5" />}
					className="pl-2 text-(--color-secondary) hover:text-(--color-accent)"
					size="custom"
					variant="mobile"
					onClick={next}
				/>
			</div>
		</div>
	);
};
