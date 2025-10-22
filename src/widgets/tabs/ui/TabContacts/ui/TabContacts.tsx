import { CardSim, ExternalLink, Globe, Mail, Send } from 'lucide-react';

import { Map } from '@/shared/content';
import { Button } from '@/shared/ui';
import { MapButton } from '@/widgets/tabs/model';

import { SectionTitle } from '../..';
import { ContactsBage } from './ContactsBage';

export const TabContacts = () => {
	const COORD = { lat: 56.8389, lon: 60.6057 };

	const mapButtons: MapButton[] = [
		{
			id: 'yandex',
			title: 'Открыть в Яндекс.Картах',
			link: `https://yandex.ru/maps/?pt=${COORD.lon},${COORD.lat}&z=14&l=map`,
		},
		{
			id: 'google',
			title: 'Открыть в Google Maps',
			link: `https://www.google.com/maps?q=${COORD.lat},${COORD.lon}&z=14`,
		},
		{ id: 'gis', title: 'Открыть в 2GIS', link: `https://2gis.ru/?m=${COORD.lon},${COORD.lat},14` },
	];

	const bages = [
		{
			id: 'email',
			title: 'Email',
			content: 'defrazo@yandex.ru',
			href: 'mailto:defrazo@yandex.ru',
			icon: <Mail className="size-5" />,
		},
		{
			id: 'telegram',
			title: 'Telegram',
			content: '@defrazo',
			href: 'https://t.me/defrazo',
			icon: <Send className="size-5" />,
		},
		{
			id: 'site',
			title: 'Сайт',
			content: 'letunoff.ru',
			href: 'https://letunoff.ru/',
			icon: <Globe className="size-5" />,
		},
		{
			id: 'vcard',
			title: 'vCard',
			content: 'vCard',
			href: '#',
			icon: <CardSim className="size-5" />,
		},
	];

	return (
		<>
			<SectionTitle title="Контакты" />
			<div className="flex flex-col gap-4">
				<div className="relative justify-between overflow-hidden rounded-2xl">
					<div className="pointer-events-none absolute top-0 left-0 z-10 flex gap-2 p-3">
						{mapButtons.map(({ id, link, title }) => {
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
					<div className="core-border relative h-96 w-full overflow-hidden rounded-xl">
						<div className="animate-slowping pointer-events-none absolute top-1/2 left-1/2 z-10 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent-default) shadow-lg duration-300" />
						<a
							className="absolute inset-0"
							href="https://maps.app.goo.gl/cggH3W2nvyTNXhqj8"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								alt="Пионерский район"
								className="h-full w-full scale-110 rounded-xl object-cover opacity-70 grayscale filter transition-all duration-500 hover:scale-100 hover:opacity-100 hover:grayscale-0"
								src={Map}
							/>
						</a>
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
					{bages.map(({ id, title, content, href, icon }) => (
						<ContactsBage key={id} content={content} href={href} icon={icon} title={title} />
					))}
				</div>
			</div>
		</>
	);
};
