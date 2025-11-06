import { ExternalLink } from 'lucide-react';

import { USER_PROFILE } from '@/entities/user';
import { Map } from '@/shared/assets/images';
import { Button } from '@/shared/ui';

import { MAP_LINKS } from '../../model';

export const MapSection = () => {
	return (
		<div className="relative justify-between overflow-hidden rounded-2xl">
			<div className="pointer-events-none absolute top-0 left-0 z-10 hidden gap-2 p-3 lg:flex">
				{MAP_LINKS.map(({ id, link, title }) => {
					return (
						<Button
							key={id}
							className="pointer-events-auto inline-flex items-center rounded-xl bg-(--bg-global-op) text-center text-xs hover:text-(--accent-secondary-text) xl:text-left xl:text-base"
							href={link}
							rel="noreferrer"
							rightIcon={<ExternalLink className="size-4" />}
							size="sm"
							target="_blank"
						>
							{title}
						</Button>
					);
				})}
			</div>
			<div className="relative w-full overflow-hidden rounded-2xl border border-(--border-light) shadow-(--shadow) lg:h-96">
				<a href={MAP_LINKS[1].link} rel="noopener noreferrer" target="_blank">
					<img
						alt="Пионерский район"
						className="no-touch-callout scale-110 rounded-2xl object-cover opacity-70 transition-all duration-500 hover:scale-100 hover:opacity-100"
						decoding="async"
						loading="lazy"
						src={Map}
					/>
				</a>
				<div className="pointer-events-none absolute top-1/2 left-1/2 flex size-5">
					<span className="absolute inline-flex size-full animate-ping rounded-full bg-(--accent-primary) opacity-75" />
					<span className="relative inline-flex size-5 rounded-full bg-(--accent-primary)" />
				</div>
			</div>
			<div className="flex flex-col justify-between gap-2 py-2 lg:flex-row lg:items-center lg:py-4">
				<div className="leading-tight">
					<div className="font-semibold">Екатеринбург</div>
					<div className="text-(--color-secondary)">Россия, Свердловская область</div>
				</div>
				<div className="flex justify-between gap-2">
					<Button
						className="w-full rounded-xl px-0.5 py-1.5 text-xs shadow-(--shadow) md:px-3 md:py-1.5 md:text-sm lg:w-fit"
						href={USER_PROFILE.contacts.telegram.href}
						size="custom"
						variant="accent"
					>
						Связаться в Telegram
					</Button>
					<Button
						className="w-full rounded-xl px-0.5 py-1.5 text-xs shadow-(--shadow) md:px-3 md:py-1.5 md:text-sm lg:w-fit"
						href={USER_PROFILE.contacts.email.href}
						size="custom"
						variant="outline"
					>
						Написать на e-mail
					</Button>
				</div>
			</div>
		</div>
	);
};
