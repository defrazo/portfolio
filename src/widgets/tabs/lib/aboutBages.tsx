import { AboutBageItem } from '../model';

export const aboutBages: AboutBageItem[] = [
	{
		id: 'email',
		title: 'Email',
		content: <>defrazo@yandex.ru</>,
		href: 'mailto:defrazo@yandex.ru',
		icon: (
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		id: 'telegram',
		title: 'Telegram',
		content: <>@defrazo</>,
		href: 'https://t.me/defrazo',
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
			</svg>
		),
	},
	{
		id: 'location',
		title: 'Локация',
		content: <>Екатеринбург, Россия</>,
		icon: (
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		id: 'status',
		title: 'Статус',
		content: (
			<>
				<span className="flex items-center gap-2 text-gray-300">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
					</span>
					Открыт к предложениям
				</span>
			</>
		),
		icon: (
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
];
