import { Download, Printer } from 'lucide-react';

import { IconEmail, IconGit, IconTG, IconVK } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';

const socialButtons = [
	{ id: 'home', icon: IconVK },
	{ id: 'about', icon: IconTG },
	{ id: 'projects', icon: IconEmail },
	{ id: 'contacts', icon: IconGit },
];

export const TabHome = () => {
	return (
		<>
			<div className="flex flex-1 flex-col items-center justify-center gap-4 select-none">
				<h1 className="text-6xl font-semibold tracking-[0.2em]">L E T U N O V</h1>
				<h2 className="text-3xl text-(--color-tertiary)">Frontend Developer</h2>
				<div className="h-1 w-32 animate-pulse rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary)" />
				<div className="flex gap-6">
					{socialButtons.map(({ id, icon }) => {
						const Icon = icon;
						return (
							<Button
								key={id}
								centerIcon={<Icon className="size-7" />}
								className="rounded-full p-4"
								variant="outline"
							/>
						);
					})}
				</div>
			</div>
			<div className="flex justify-between">
				<Button leftIcon={<Download className="size-8" />} variant="outline">
					Скачать резюме
				</Button>
				<Button leftIcon={<Printer className="size-8" />} variant="outline">
					Распечатать резюме
				</Button>
			</div>
		</>
	);
};
