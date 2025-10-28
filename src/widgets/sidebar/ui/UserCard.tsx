import { useStore } from '@/app/providers';
import { Avatar } from '@/shared/content';
import { ImageViewer } from '@/shared/ui';

export const UserCard = () => {
	const { modalStore } = useStore();

	return (
		<div className="flex flex-col gap-3">
			<div className="group relative cursor-pointer p-2">
				<div className="absolute inset-0 rounded-full bg-linear-to-r from-(--accent-primary-op) to-(--accent-primary-hover-op) opacity-0 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
				<img
					alt="Фотография"
					className="mx-auto max-h-[25svh] rounded-full border-2 border-solid border-(--border-color) shadow-lg transition-transform duration-500 group-hover:scale-[1.02] md:max-h-full"
					decoding="async"
					loading="lazy"
					src={Avatar}
					onClick={() => modalStore.setModal(<ImageViewer src={Avatar} />)}
				/>
			</div>
			<div className="flex cursor-default flex-col items-center justify-center leading-4">
				<span className="text-2xl font-bold">Евгений Летунов</span>
				<span className="text-lg text-(--color-tertiary)">Frontend Developer</span>
			</div>
		</div>
	);
};
