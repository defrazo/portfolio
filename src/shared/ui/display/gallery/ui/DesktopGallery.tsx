import { Pause, Play } from 'lucide-react';

import { useStore } from '@/app/providers';
import { IconBack, IconForward } from '@/shared/assets/icons';
import { cn } from '@/shared/lib/utils';
import { Button, ImageViewer } from '@/shared/ui';

import { useGallery } from '../model';

export const DesktopGallery = ({ images, className }: { images: string[]; className?: string }) => {
	const { modalStore } = useStore();

	const { current, setCurrent, setActive, containerRef, autoscroll, toggleScroll, touchStart, touchEnd, next, prev } =
		useGallery({ images: images.length });

	return (
		<>
			<div
				ref={containerRef}
				className={cn('relative h-fit overflow-hidden rounded-2xl', className)}
				onMouseEnter={() => setActive(true)}
				onMouseLeave={() => setActive(false)}
				onTouchEnd={touchEnd}
				onTouchStart={touchStart}
			>
				<div
					className="flex max-h-[510px] transition-transform duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((img, idx) => (
						<img
							key={idx}
							alt={`Slide ${idx}`}
							className="shrink-0 cursor-zoom-in object-cover"
							decoding="async"
							loading="lazy"
							src={img}
							onClick={() => modalStore.setModal(<ImageViewer alt={`Slide ${idx}`} src={img} />)}
						/>
					))}
				</div>
				<Button
					centerIcon={autoscroll ? <Pause className="size-6" /> : <Play className="size-6" />}
					className={`absolute top-6 right-10 hidden -translate-y-1/2 px-2 py-1 ${autoscroll ? 'text-(--color-accent)' : 'text-(--color-secondary)'} opacity-50 hover:text-(--color-accent) hover:opacity-100 md:block`}
					size="custom"
					title="Включить автопрокрутку"
					variant="mobile"
					onClick={toggleScroll}
				/>
				<Button
					centerIcon={<IconBack className="size-6" />}
					className="absolute top-1/2 left-0 h-full -translate-y-1/2 transform-[translateZ(0)] px-2 py-1 text-(--color-secondary) opacity-70 hover:bg-(--accent-primary-dark) hover:text-(--color-accent)"
					size="custom"
					title="Предыдущий слайд"
					variant="mobile"
					onClick={prev}
				/>
				<Button
					centerIcon={<IconForward className="size-6" />}
					className="absolute top-1/2 right-0 h-full -translate-y-1/2 transform-[translateZ(0)] px-2 py-1 text-(--color-secondary) opacity-70 hover:bg-(--accent-primary-dark) hover:text-(--color-accent)"
					size="custom"
					title="Следующий слайд"
					variant="mobile"
					onClick={next}
				/>
				<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 opacity-50 duration-500 group-hover:opacity-100">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={cn(
								'size-1.5 cursor-pointer rounded-full transition-transform hover:scale-150 hover:bg-(--color-accent) md:size-2.5',
								idx === current ? 'size-3 bg-(--color-accent) md:size-3.5' : 'bg-(--color-secondary)'
							)}
							onClick={() => setCurrent(idx)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
