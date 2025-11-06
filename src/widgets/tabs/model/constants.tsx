import { BriefcaseBusiness } from 'lucide-react';

import { USER_PROFILE } from '@/entities/user';
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
import type { AboutBadge, ContactsBadge, Skill, SkillGroup, WorkItem } from '.';

const COORD = { lat: 56.8389, lon: 60.6057 };

export const ABOUT_BADGES: AboutBadge[] = [
	{
		id: 'email',
		title: 'Email',
		content: USER_PROFILE.contacts.email.value,
		href: USER_PROFILE.contacts.email.href,
		icon: USER_PROFILE.contacts.email.icon,
	},
	{
		id: 'telegram',
		title: 'Telegram',
		content: USER_PROFILE.contacts.telegram.value,
		href: USER_PROFILE.contacts.telegram.href,
		icon: USER_PROFILE.contacts.telegram.icon,
	},
	{
		id: 'location',
		title: 'Локация',
		content: USER_PROFILE.contacts.location.value,
		icon: USER_PROFILE.contacts.location.icon,
	},
	{
		id: 'status',
		title: 'Статус',
		content: (
			<>
				<span className="flex items-center gap-2 text-(--color-secondary)">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
					</span>
					Открыт к предложениям
				</span>
			</>
		),
		icon: BriefcaseBusiness,
	},
];

export const CONTACTS_BADGES: ContactsBadge[] = [
	{
		id: 'email',
		title: 'Email',
		content: USER_PROFILE.contacts.email.value,
		href: USER_PROFILE.contacts.email.href,
		icon: USER_PROFILE.contacts.email.icon,
	},
	{
		id: 'telegram',
		title: 'Telegram',
		content: USER_PROFILE.contacts.telegram.value,
		href: USER_PROFILE.contacts.telegram.href,
		icon: USER_PROFILE.contacts.telegram.icon,
	},
	{
		id: 'site',
		title: 'Сайт',
		content: USER_PROFILE.contacts.site.value,
		href: USER_PROFILE.contacts.site.href,
		icon: USER_PROFILE.contacts.site.icon,
	},
	{
		id: 'vcard',
		title: 'vCard',
		content: USER_PROFILE.vcard.label,
		href: USER_PROFILE.vcard.href,
		icon: USER_PROFILE.vcard.icon,
	},
];

export const EDUCATION_HISTORY = [
	{
		id: 'phd',
		degree: 'Аспирантура',
		period: '2020 – 2023',
		major: '41.06.01 Политические науки и регионоведение',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Исследовательская методология, визуализация данных, преподавание',
	},
	{
		id: 'master',
		degree: 'Магистратура',
		period: '2018 – 2020',
		major: '40.04.01 Юриспруденция',
		university: 'Гуманитарный университет, Екатеринбург',
		focus: 'Нормативные требования, работа с документами',
	},
	{
		id: 'bachelor',
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
	'MobX',
	'Tailwind CSS',
	'Supabase',
	'Docker',
	'VPS Deployment',
	'GitHub',
	'Vite',
	'Responsive Design',
	'Code-Splitting',
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
	{ label: 'React', value: 90, icon: IconReact, color: '#55C2DF' },
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
	{ label: 'GitHub', value: 45, icon: IconGithub, color: '#0969DA' },
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
		id: 'personal-project',
		role: 'Frontend-разработчик',
		company: 'Личный проект',
		period: 'Январь 2025 – по настоящее время',
		bullets: [
			'Спроектировал и реализовал веб-приложение по Feature-Sliced Design на React + TypeScript с MobX',
			'Интегрировал Supabase (Auth/DB) с E-mail/OAuth авторизацией и личным кабинетом пользователя',
			'Разработал адаптивный UI на Tailwind CSS с поддержкой темизации и микроанимаций',
			'Контейнеризировал приложение в Docker и развернул на VPS с настройкой собственного домена',
			'Реализовал юридический модуль (Demo-режим, Политика конфиденциальности, Пользовательское соглашение)',
		],
	},
	{
		id: 'rosstat',
		role: 'Бригадир-инструктор территориального уровня',
		company: 'Управление Федеральной службы государственной статистики по Свердловской обл. и Курганской обл.',
		period: 'Июль 2020 – Ноябрь 2022',
		bullets: [
			'Координировал работу территориальных органов по проведению Сельскохозяйственной микропереписи-2021',
			'Разработал шаблоны отчётной документации и автоматизировал процессы подготовки документов',
			'Создавал графики и визуализации данных для официальных публикаций (пресс-релизов) регионального уровня',
		],
	},
	{
		id: 'am-global',
		role: 'Менеджер по закупкам и логистике',
		company: 'ООО «АМ ГЛОБАЛ»',
		period: 'Июнь 2018 – Июнь 2019',
		bullets: [
			'Анализировал рынок и отбирал товары с высоким потенциалом для оптовой реализации',
			'Оптимизировал цепочки поставок и логистику, ускоряя доставку товаров клиентам',
			'Координировал взаимодействие с поставщиками и контролировал выполнение заказов',
		],
	},
];
