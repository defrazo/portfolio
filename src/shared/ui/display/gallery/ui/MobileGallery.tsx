import { useRef, useState } from 'react';

import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/inputs';

interface MobileGalleryProps {
	images: string[];
	className?: string;
}

export const MobileGallery = ({ images, className }: MobileGalleryProps) => {
	const [current, setCurrent] = useState(0);
	// const containerRef = useRef<HTMLDivElement>(null);

	const startX = useRef<number | null>(null);

	// Свайпы
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

	return (
		<div
			className={cn(
				'relative flex flex-col items-center gap-2 rounded-xl bg-(--bg-secondary) p-2 pr-1',
				className
			)}
		>
			<div
				className="project-scroll h-[500px] w-full max-w-xs overflow-x-hidden scroll-auto rounded-xs shadow-lg"
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
			>
				<div
					className="flex h-fit transition-transform duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((img, i) => (
						<img key={i} alt={`Mobile Screenshot ${i}`} className="w-full object-contain" src={img} />
					))}
				</div>
			</div>
			<div className="flex w-full items-center justify-between gap-2 py-1 pr-3 pl-2">
				<Button
					centerIcon={<IconBack className="size-4" />}
					className="transform text-(--accent-text) hover:text-(--accent-hover)"
					size="custom"
					variant="mobile"
					onClick={prev}
				/>
				<div className="flex gap-1">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={`h-3 w-3 cursor-pointer rounded-full hover:bg-(--accent-hover) ${idx === current ? 'bg-(--accent-default)' : 'bg-gray-400'}`}
							onClick={() => setCurrent(idx)}
						/>
					))}
				</div>
				<Button
					centerIcon={<IconForward className="size-4" />}
					className="transform text-(--accent-text) hover:text-(--accent-hover)"
					size="custom"
					variant="mobile"
					onClick={next}
				/>
			</div>
		</div>
	);
};
