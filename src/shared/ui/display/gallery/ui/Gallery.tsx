import { useEffect, useRef, useState } from 'react';

import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/inputs';

interface GalleryProps {
	images: string[];
	className?: string;
}

export const Gallery = ({ images, className }: GalleryProps) => {
	const [current, setCurrent] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);

	// Свайпы
	const startX = useRef<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (startX.current === null) return;
		const diff = startX.current - e.changedTouches[0].clientX;
		if (diff > 50) next();
		else if (diff < -50) prev();
		startX.current = null;
	};

	const next = () => setCurrent((prev) => (prev + 1) % images.length);
	const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

	// Автопрокрутка
	useEffect(() => {
		const interval = setInterval(next, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div
				ref={containerRef}
				className={cn('group relative mx-auto aspect-video w-full overflow-hidden rounded-lg', className)}
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
			>
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((img, i) => (
						<img key={i} alt={`Slide ${i}`} className="w-full shrink-0 object-cover" src={img} />
					))}
				</div>
				<Button
					centerIcon={<IconBack className="size-6" />}
					className="absolute top-1/2 left-0 -translate-y-1/2 transform px-2 py-1 text-(--accent-text) opacity-70 hover:text-(--accent-default)"
					size="custom"
					variant="mobile"
					onClick={prev}
				/>
				<Button
					centerIcon={<IconForward className="size-6" />}
					className="absolute top-1/2 right-0 -translate-y-1/2 transform px-2 py-1 text-(--accent-text) opacity-70 hover:text-(--accent-default)"
					size="custom"
					variant="mobile"
					onClick={next}
				/>
			</div>
			<div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 transform gap-2 transition-all duration-500 ease-in-out group-hover:-bottom-6">
				{images.map((_, i) => (
					<span
						key={i}
						className={`h-3 w-3 rounded-full ${i === current ? 'bg-white' : 'bg-gray-400'}`}
						onClick={() => setCurrent(i)}
					/>
				))}
			</div>
		</>
	);
};
