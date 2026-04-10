import { CheckCircle2 } from 'lucide-react';

import type { Feature } from '@/entities/project';
import { Divider } from '@/shared/ui';

export const Features = ({ features }: { features: Feature[] }) => {
	return (
		<div className="flex flex-1 flex-col gap-2 lg:gap-4">
			<h2 className="project-header">Ключевые особенности</h2>
			<div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4">
				{features.map(({ title, icon: Icon, color, lead, bullets }) => (
					<div key={title} className="group card-surface flex flex-col justify-between">
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bg-secondary) shadow-(--shadow)">
									<Icon
										className={`size-5 text-(--accent-secondary) transition-transform duration-500 group-hover:scale-125 ${color}`}
									/>
								</div>
								<div className="flex flex-col text-left leading-snug">
									<h4 className="w-full text-base font-semibold text-(--color-primary) group-hover:text-(--color-accent) md:text-lg lg:text-xl">
										{title}
									</h4>
									<p className="text-xs text-(--color-secondary) lg:text-sm">{lead}</p>
								</div>
							</div>
							<Divider />
							{bullets && (
								<ul className="space-y-1">
									{bullets.map((bullet, idx) => (
										<li
											key={idx}
											className="flex items-center gap-2 text-sm leading-relaxed text-(--color-secondary) hover:text-(--color-primary) lg:text-base"
										>
											<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-(--accent-secondary)" />
											{bullet}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
