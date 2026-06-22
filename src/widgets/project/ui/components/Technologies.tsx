import type { Technology } from '@/entities/tecnology';

export const Technologies = ({ techs }: { techs: Technology[] }) => {
	return (
		<div className="flex flex-col gap-2 select-none lg:gap-4">
			<h2 className="project-header">Технологии</h2>
			<div className="grid grid-cols-1 justify-evenly gap-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3">
				{techs.map(({ label, icon: Icon, description }) => {
					return (
						<div
							key={label}
							className="md:hover:border-(--accent-primary-hover-op); group flex items-center gap-2 rounded-2xl bg-(--bg-accent) p-2 px-3 py-1.5 shadow-(--shadow) transition-transform duration-500 hover:z-10 hover:scale-105 md:border md:border-transparent"
						>
							<Icon className="aspect-square size-7" />
							<div className="flex flex-col items-start leading-snug">
								<h2 className="font-semibold">{label}</h2>
								<div className="text-sm text-(--color-secondary) group-hover:text-(--color-accent)">
									{description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
