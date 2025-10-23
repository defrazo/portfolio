import { ExternalLink } from 'lucide-react';

import { Map } from '@/shared/content';
import { Button } from '@/shared/ui';

import { CONTACTS_BAGES, MAP_LINKS } from '../../model';
import { SectionTitle } from '..';
import { ContactsBage } from '.';

export const TabContacts = () => {
	return (
		<>
			<SectionTitle title="Контакты" />
			<div className="flex flex-col gap-4">
				<div className="relative justify-between overflow-hidden rounded-2xl">
					<div className="pointer-events-none absolute top-0 left-0 z-10 flex gap-2 p-3">
						{MAP_LINKS.map(({ id, link, title }) => {
							return (
								<Button
									key={id}
									className="pointer-events-auto inline-flex items-center rounded-xl bg-[#191820b3]"
									rightIcon={<ExternalLink className="size-4" />}
									size="sm"
								>
									<a href={link} rel="noreferrer" target="_blank">
										{title}
									</a>
								</Button>
							);
						})}
					</div>
					<div className="relative h-96 w-full overflow-hidden rounded-2xl">
						<a href={MAP_LINKS[1].link} rel="noopener noreferrer" target="_blank">
							<img
								alt="Пионерский район"
								className="scale-110 rounded-2xl object-cover opacity-70 transition-all duration-500 hover:scale-100 hover:opacity-100"
								src={Map}
							/>
						</a>
						<div className="pointer-events-none absolute top-1/2 left-1/2 flex size-5">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-(--accent-primary) opacity-75" />
							<span className="relative inline-flex size-5 rounded-full bg-(--accent-primary)" />
						</div>
					</div>
					<div className="flex items-center justify-between gap-2 py-4">
						<div>
							<div className="font-medium">Екатеринбург</div>
							<div className="text-(--color-secondary)">Россия, Свердловская область</div>
						</div>
						<div className="flex gap-2">
							<Button className="rounded-xl px-3 py-1.5 text-sm" size="custom" variant="accent">
								<a href="https://t.me/defrazo">Связаться в Telegram</a>
							</Button>
							<Button className="rounded-xl px-3 py-1.5 text-sm" size="custom" variant="outline">
								<a href="mailto:defrazo@yandex.ru">Написать на e-mail</a>
							</Button>
						</div>
					</div>
				</div>
				<div className="grid w-full grid-cols-2 gap-4">
					{CONTACTS_BAGES.map(({ id, title, content, href, icon }) => (
						<ContactsBage key={id} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
			</div>
		</>
	);
};
