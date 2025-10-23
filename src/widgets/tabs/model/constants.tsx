import { BriefcaseBusiness, Globe, IdCard, Mail, MapPin, Send } from 'lucide-react';

import {
	IconAI,
	IconCSS,
	IconDocker,
	IconEmail,
	IconFigma,
	IconFSD,
	IconGit,
	IconGithub,
	IconHTML,
	IconJS,
	IconMobX,
	IconPost,
	IconPS,
	IconReact,
	IconSASS,
	IconSB,
	IconTG,
	IconTS,
	IconTW,
	IconVite,
	IconVK,
	IconVS,
} from '@/shared/assets/icons';

import { getSkills } from '../lib';
import type { AboutBage, ContactsBage, Skill, SkillGroup, WorkItem } from '.';

const COORD = { lat: 56.8389, lon: 60.6057 };

export const ABOUT_BAGES: AboutBage[] = [
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
		id: 'location',
		title: 'Локация',
		content: 'Екатеринбург, Россия',
		icon: <MapPin className="size-5" />,
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
		icon: <BriefcaseBusiness className="size-5" />,
	},
];

export const CONTACTS_BAGES: ContactsBage[] = [
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
		icon: <IdCard className="size-5" />,
	},
];

export const EDUCATION_HISTORY = [
	{
		degree: 'Аспирантура',
		period: '2020 – 2023',
		major: '41.06.01 Политические науки и регионоведение',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Исследовательская методология, визуализация данных, преподавание',
	},
	{
		degree: 'Магистратура',
		period: '2018 – 2020',
		major: '40.04.01 Юриспруденция',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Нормативные требования, работа с документами',
	},
	{
		degree: 'Бакалавриат',
		period: '2014 – 2018',
		major: '09.03.03 Прикладная информатика в экономике',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Основы программирования, базы данных, анализ данных',
	},
];

export const KEY_AREAS = [
	'React',
	'TypeScript',
	'Feature-Sliced Design',
	'Tailwind CSS',
	'State Management (MobX)',
	'Web Performance',
	'Clean Code',
	'Responsive Design',
	'Full-Cycle Frontend',
];

export const MAP_LINKS = [
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

export const SKILLS: Skill[] = [
	{ label: 'React', value: 90, icon: IconReact, color: '#61DAFB' },
	{ label: 'TypeScript', value: 65, icon: IconTS, color: '#3178C6' },
	{ label: 'JavaScript', value: 65, icon: IconJS, color: '#F7DF1E' },
	{ label: 'MobX', value: 55, icon: IconMobX, color: '#FF9955' },
	{ label: 'Tailwind CSS', value: 74, icon: IconTW, color: '#38B2AC' },
	{ label: 'Supabase', value: 13, icon: IconSB, color: '#3ECF8E' },
	{ label: 'Vite', value: 18, icon: IconVite, color: '#646CFF' },
	{ label: 'HTML5', value: 85, icon: IconHTML, color: '#E34F26' },
	{ label: 'CSS3', value: 80, icon: IconCSS, color: '#1572B6' },
	{ label: 'SASS', value: 65, icon: IconSASS, color: '#CC6699' },
	{ label: 'PostgreSQL', value: 35, icon: IconPost, color: '#336791' },
	{ label: 'Docker', value: 25, icon: IconDocker, color: '#2496ED' },
	{ label: 'FSD', value: 25, icon: IconFSD, color: '#3193FF' },
	{ label: 'GitHub', value: 45, icon: IconGithub, color: '#FFF' },
	{ label: 'VS Code', value: 70, icon: IconVS, color: '#007ACC' },
	{ label: 'Figma', value: 55, icon: IconFigma, color: '#F24E1E' },
	{ label: 'Photoshop', value: 40, icon: IconPS, color: '#31A8FF' },
	{ label: 'Illustrator', value: 35, icon: IconAI, color: '#FF9A00' },
];

export const SKILL_GROUP: SkillGroup[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		/*prettier-ignore*/
		skills: getSkills(['React', 'TypeScript', 'JavaScript', 'MobX', 'FSD', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS']),
	},
	{
		id: 'workflow',
		title: 'Workflow',
		skills: getSkills(['Supabase', 'PostgreSQL', 'Vite', 'GitHub', 'Docker', 'VS Code']),
	},
	{ id: 'design', title: 'Design', skills: getSkills(['Figma', 'Photoshop', 'Illustrator']) },
];

export const SOCIAL_BUTTONS = [
	{ id: 'home', icon: IconVK },
	{ id: 'about', icon: IconTG },
	{ id: 'projects', icon: IconEmail },
	{ id: 'contacts', icon: IconGit },
];

export const WORK_HISTORY: WorkItem[] = [
	{
		role: 'Frontend-разработчик',
		company: 'Личный проект',
		period: 'Январь 2025 – по настоящее время',
		bullets: [
			'Спроектировал приложение по Feature-Sliced Design, вынес состояние в MobX',
			'Интегрировал Supabase (Auth/DB), сделал адаптив и микровзаимодействия',
			'Разбивка по чанкам + lazy routes → TTI –35%',
		],
	},
	{
		role: 'Бригадир-инструктор территориального уровня',
		company: 'Управление Федеральной службы государственной статистики по Свердловской обл. и Курганской обл.',
		period: 'Июль 2020 – Ноябрь 2022',
		bullets: [
			'Координировал сбор и валидацию данных сельскохозяйственной микропереписи',
			'Создал шаблоны отчётности и автоматизированные таблицы → время подготовки –40%',
			'Готовил графики и визуализации для публичных отчётов',
		],
	},
	{
		role: 'Менеджер по закупкам и логистике',
		company: 'ООО «АМ ГЛОБАЛ»',
		period: 'Июнь 2018 – Июнь 2019',
		bullets: [
			'Оптимизировал цепочку поставок → срок поставки –2–3 дня',
			'Перевёл операционку в табличные модели и дашборды для контроля KPI',
		],
	},
];
