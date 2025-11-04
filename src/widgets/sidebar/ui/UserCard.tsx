import { useStore } from '@/app/providers';
import { ImageViewer } from '@/shared/ui';

export const UserCard = () => {
	const { modalStore } = useStore();

	return (
		<div className="flex flex-col gap-3">
			<div className="group relative mx-auto inline-flex size-52 cursor-pointer items-center justify-center">
				<div className="pointer-events-none absolute -inset-2 rounded-full bg-linear-to-r from-(--accent-primary-op) to-(--accent-primary-hover-op) opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />
				<div className="relative z-10 size-full overflow-hidden rounded-full border-2 border-solid border-(--border-color) shadow-lg">
					<img
						alt="Фотография"
						className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
						decoding="async"
						loading="lazy"
						src="/avatar.webp"
						onClick={() => modalStore.setModal(<ImageViewer src="/avatar.webp" />)}
					/>
				</div>
			</div>
			<div className="flex cursor-default flex-col items-center justify-center leading-4">
				<span className="text-2xl font-bold">Евгений Летунов</span>
				<span className="text-lg text-(--color-tertiary)">Frontend Developer</span>
			</div>
		</div>
	);
};
