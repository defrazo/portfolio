import { useEffect, useRef, useState } from 'react';

export const useGallery = ({ images }: { images: number }) => {
	const [current, setCurrent] = useState<number>(0);
	const [active, setActive] = useState<boolean>(false);
	const [autoscroll, setAutoscroll] = useState<boolean>(false);
	const startX = useRef<number | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const next = () => setCurrent((p) => (p + 1) % images);
	const prev = () => setCurrent((p) => (p - 1 + images) % images);
	const toggleScroll = () => setAutoscroll((prev) => !prev);

	const touchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
	const touchEnd = (e: React.TouchEvent) => {
		if (startX.current === null) return;

		const diff = startX.current - e.changedTouches[0].clientX;
		if (diff > 50) next();
		else if (diff < -50) prev();
		startX.current = null;
	};

	useEffect(() => {
		if (!active) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') next();
			if (e.key === 'ArrowLeft') prev();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [active]);

	useEffect(() => {
		if (autoscroll) {
			const interval = setInterval(next, 5000);
			return () => clearInterval(interval);
		}
	}, [autoscroll]);

	return { current, setCurrent, setActive, containerRef, autoscroll, toggleScroll, touchStart, touchEnd, next, prev };
};
