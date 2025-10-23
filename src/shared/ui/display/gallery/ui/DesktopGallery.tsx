import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

interface DesktopGalleryProps {
	images: string[];
	className?: string;
}

export const DesktopGallery = ({ images, className }: DesktopGalleryProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState<number>(0);
	const [autoscroll, setAutoscroll] = useState<boolean>(true);

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
	const toogleScroll = () => setAutoscroll((prev) => !prev);

	useEffect(() => {
		if (autoscroll) {
			const interval = setInterval(next, 5000);
			return () => clearInterval(interval);
		}
	}, [autoscroll]);

	return (
		<>
			<div
				ref={containerRef}
				className={cn('relative aspect-video overflow-hidden rounded-2xl', className)}
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
			>
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((img, idx) => (
						<img key={idx} alt={`Slide ${idx}`} className="shrink-0 object-cover" src={img} />
					))}
				</div>
				<Button
					centerIcon={autoscroll ? <Pause className="size-6" /> : <Play className="size-6" />}
					className="absolute top-6 right-1 -translate-y-1/2 px-2 py-1 text-(--color-secondary) opacity-70 hover:text-(--color-accent)"
					size="custom"
					variant="mobile"
					onClick={toogleScroll}
				/>
				<Button
					centerIcon={<IconBack className="size-6" />}
					className="absolute top-1/2 left-0 -translate-y-1/2 px-2 py-1 text-(--color-secondary) opacity-70 hover:text-(--color-accent)"
					size="custom"
					variant="mobile"
					onClick={prev}
				/>
				<Button
					centerIcon={<IconForward className="size-6" />}
					className="absolute top-1/2 right-0 -translate-y-1/2 px-2 py-1 text-(--color-secondary) opacity-70 hover:text-(--color-accentt)"
					size="custom"
					variant="mobile"
					onClick={next}
				/>
				<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 opacity-50 duration-500 group-hover:opacity-100">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={cn(
								'size-3 cursor-pointer rounded-full hover:bg-(--color-accent)',
								idx === current ? 'bg-(--color-accent)' : 'bg-(--color-secondary)'
							)}
							onClick={() => setCurrent(idx)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
