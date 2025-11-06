import type { Technology } from '@/entities/tecnology';
import { cn } from '@/shared/lib/utils';

export const Technologies = ({ techs }: { techs: Technology[] }) => {
	return (
		<div className="flex flex-col gap-2 select-none lg:gap-4">
			<h2 className="project-header">Технологии</h2>
			<div className="grid grid-cols-1 justify-evenly gap-2 lg:grid-cols-2 lg:gap-4">
				{techs.map(({ name, icon: Icon, description }) => {
					return (
						<div
							key={name}
							className={cn(
								'card-surface group flex items-center gap-2 transition-transform! duration-500 hover:z-10 hover:scale-105'
							)}
						>
							<div className="flex size-10 items-center justify-center rounded-xl border border-(--border-light) bg-(--bg-secondary)">
								<Icon className="aspect-square size-5" />
							</div>
							<div className="flex flex-col items-start leading-snug">
								<h2 className="font-semibold">{name}</h2>
								<div className="text-(--color-secondary) group-hover:text-(--color-accent)">
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
