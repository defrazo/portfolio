// import { Download, Printer } from 'lucide-react';
import { Button } from '@/shared/ui';

import { SOCIAL_BUTTONS } from '../model';

const SocialButtons = SOCIAL_BUTTONS.map(({ id, icon: Icon }) => (
	<Button
		key={id}
		centerIcon={<Icon className="size-5 md:size-7" />}
		className="rounded-full p-4"
		variant="outline"
	/>
));

export const TabHome = () => {
	return (
		<>
			<div className="flex flex-1 flex-col items-center justify-center gap-4 select-none">
				<h1 className="text-4xl font-semibold tracking-widest md:text-6xl md:tracking-[0.2em]">
					L E T U N O V
				</h1>
				<h2 className="text-xl text-(--color-tertiary) md:text-3xl">Frontend Developer</h2>
				<div className="h-1 w-32 animate-pulse rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary)" />
				<div className="flex gap-4 md:gap-6">{SocialButtons}</div>
			</div>
			{/* <div className="flex justify-between">
				<Button leftIcon={<Download className="size-8" />} variant="outline">
					Скачать резюме
				</Button>
				<Button leftIcon={<Printer className="size-8" />} variant="outline">
					Распечатать резюме
				</Button>
			</div> */}
		</>
	);
};
