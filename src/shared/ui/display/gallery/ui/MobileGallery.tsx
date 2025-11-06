import { useEffect, useRef, useState } from 'react';

import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

export const MobileGallery = ({ images }: { images: string[] }) => {
	const [current, setCurrent] = useState<number>(0);
	const [active, setActive] = useState<boolean>(false);

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

	useEffect(() => {
		if (!active) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') next();
			if (e.key === 'ArrowLeft') prev();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [active]);

	return (
		<div className="relative flex flex-col items-center gap-3 rounded-2xl bg-(--bg-accent) p-3 shadow-(--shadow)">
			<div
				className="project-scroll aspect-9/16 w-full max-w-xs min-w-0 overflow-y-auto overscroll-contain md:min-w-80"
				onMouseEnter={() => setActive(true)}
				onMouseLeave={() => setActive(false)}
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
			>
				<img
					alt={`Slide ${current}`}
					className="core-border no-touch-callout w-full object-contain"
					decoding="async"
					loading="lazy"
					src={images[current]}
				/>
			</div>
			<div className="flex w-full items-center justify-between gap-1 px-2 py-1">
				<Button
					centerIcon={<IconBack className="size-5" />}
					className="pr-2 text-(--color-secondary) hover:text-(--color-accent)"
					size="custom"
					variant="mobile"
					onClick={prev}
				/>
				<div className="flex w-full items-center justify-between">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={cn(
								'size-1.5 cursor-pointer rounded-full transition-transform hover:scale-150 hover:bg-(--color-accent) md:size-2.5',
								idx === current
									? 'size-3 bg-(--color-accent) md:size-3.5'
									: 'bg-(--accent-primary-text-disabled)'
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
