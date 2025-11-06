import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/utils';

export const PreloaderExt = () => {
	const [progress, setProgress] = useState<number>(0);
	const [isVisible, setIsVisible] = useState<boolean>(true);

	useEffect(() => {
		let current = 0;

		const interval = setInterval(() => {
			current += Math.max(1, Math.floor((100 - current) / 10));

			if (current >= 100) {
				current = 100;
				clearInterval(interval);
				setTimeout(() => setIsVisible(false), 300);
			}

			setProgress(current);
		}, 60);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={cn(
				'fixed inset-0 z-9999 flex flex-col items-center justify-center text-white transition-opacity duration-700',
				isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
			)}
		>
			<h1 className="mb-6 text-4xl font-semibold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] select-none md:text-5xl md:tracking-[0.5em] lg:text-6xl">
				L E T U N O V
			</h1>

			<div className="h-[3px] w-64 overflow-hidden rounded-full bg-(--bg-tertiary)">
				<div
					className="h-full bg-linear-to-r from-purple-400 via-pink-500 to-yellow-400 transition-all ease-out"
					style={{ width: `${progress}%` }}
				/>
			</div>
			<p className="mt-3 text-sm tracking-widest text-(--color-secondary)">{progress}%</p>
		</div>
	);
};
