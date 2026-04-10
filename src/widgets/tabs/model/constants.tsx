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
		id: 'max',
		title: 'MAX',
		content: USER_PROFILE.contacts.max.value,
		href: USER_PROFILE.contacts.max.href,
		icon: USER_PROFILE.contacts.max.icon,
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
	{ label: 'React', value: 51, icon: IconReact, color: '#55C2DF' },
	{ label: 'TypeScript', value: 66, icon: IconTS, color: '#3178C6' },
	{ label: 'JavaScript', value: 63, icon: IconJS, color: '#F7DF1E' },
	{ label: 'MobX', value: 43, icon: IconMobX, color: '#FF9955' },
	{ label: 'Tailwind CSS', value: 90, icon: IconTW, color: '#38B2AC' },
	{ label: 'Supabase', value: 51, icon: IconSB, color: '#3ECF8E' },
	{ label: 'Vite', value: 50, icon: IconVite, color: '#646CFF' },
	{ label: 'HTML5', value: 66, icon: IconHTML, color: '#E34F26' },
	{ label: 'CSS3', value: 72, icon: IconCSS, color: '#1572B6' },
	{ label: 'SASS', value: 34, icon: IconSASS, color: '#CC6699' },
	{ label: 'PostgreSQL', value: 21, icon: IconPost, color: '#336791' },
	{ label: 'Docker', value: 66, icon: IconDocker, color: '#2496ED' },
	{ label: 'FSD', value: 85, icon: IconFSD, color: '#3193FF' },
	{ label: 'GitHub', value: 54, icon: IconGithub, color: '#0969DA' },
	{ label: 'VS Code', value: 64, icon: IconVS, color: '#007ACC' },
	{ label: 'Figma', value: 15, icon: IconFigma, color: '#F24E1E' },
	{ label: 'Illustrator', value: 28, icon: IconAI, color: '#FF9A00' },
	{ label: 'Photoshop', value: 49, icon: IconPS, color: '#31A8FF' },
];

export const SKILL_GROUP: SkillGroup[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		/*prettier-ignore*/
		skills: getSkills(['React', 'TypeScript', 'JavaScript', 'FSD', 'Tailwind CSS', 'MobX', 'HTML5', 'CSS3', 'SASS']),
	},
	{
		id: 'workflow',
		title: 'Workflow',
		skills: getSkills(['Supabase', 'Docker', 'VS Code', 'PostgreSQL', 'Vite', 'GitHub']),
	},
	{ id: 'design', title: 'Design', skills: getSkills(['Figma', 'Illustrator', 'Photoshop']) },
];

export const SOCIAL_BUTTONS = [
	{ id: 'vk', href: USER_PROFILE.contacts.vk.href, icon: IconVK },
	{ id: 'tg', href: USER_PROFILE.contacts.telegram.href, icon: IconTG },
	{ id: 'email', href: USER_PROFILE.contacts.email.href, icon: IconEmail },
	{ id: 'git', href: USER_PROFILE.contacts.git.href, icon: IconGit },
];

export const WORK_HISTORY: WorkItem[] = [
	{
		id: 'kanban',
		role: 'Frontend-разработчик',
		company: 'Kanban Board',
		period: 'Январь 2026 – Апрель 2026',
		summary:
			'Разработал Kanban-модуль на чистом TypeScript. Реализовал локальный state, самописный drag-and-drop и lifecycle компонентов. Интегрировал в платформу OneMate без изменения её архитектуры.',
		highlights: [
			{ title: 'Построил независимый TS-модуль', desc: 'чистая архитектура без фреймворков' },
			{ title: 'Разработал кастомный state', desc: 'на замыканиях и подписках, без сторонних библиотек' },
			{ title: 'Реализовал drag-and-drop', desc: 'перемещение и сортировка колонок и задач' },
			{ title: 'Спроектировал lifecycle', desc: '(init / destroy) с управлением подписками и очисткой ресурсов' },
			{ title: 'Обеспечил тестируемость', desc: 'unit-тесты на Vitest для основной бизнес-логики' },
			{ title: 'Интегрировал в React', desc: 'через прокси-страницу без изменения внешней архитектуры' },
		],
	},
	{
		id: 'portfolio',
		role: 'Frontend-разработчик',
		company: 'Портфолио',
		period: 'Сентябрь 2025 – Октябрь 2025',
		summary:
			'Адаптировал архитектуру OneMate под статичный сайт, упростив FSD и state-менеджмент. Расширил дизайн-систему, оптимизировал производительность и развернул проект на VPS (Docker + Nginx).',
		highlights: [
			{ title: 'Адаптировал архитектуру', desc: 'упростил FSD-слои и state-менеджмент под статичный сайт' },
			{ title: 'Расширил дизайн-систему', desc: 'переиспользовал и доработал UI компоненты OneMate' },
			{ title: 'Оптимизировал производительность', desc: 'lazy loading, code splitting, минимизация бандла' },
			{ title: 'Развернул на VPS', desc: 'Docker + Nginx + собственный домен' },
		],
	},
	{
		id: 'onemate',
		role: 'Frontend-разработчик',
		company: 'OneMate',
		period: 'Январь 2025 – Сентябрь 2025',
		summary:
			'Спроектировал и реализовал масштабируемую веб-платформу на React + TypeScript. Разработал dashboard, интегрировал Supabase (Auth/DB) и внедрил дизайн-систему. Развернул на VPS.',
		highlights: [
			{ title: 'Спроектировал архитектуру', desc: 'React + TypeScript + MobX + FSD для модульной расширяемости' },
			{
				title: 'Разработал dashboard',
				desc: 'калькулятор, календарь, заметки, погода, конвертер валют, переводчик',
			},
			{
				title: 'Интегрировал backend через Supabase',
				desc: 'Auth (OAuth/E-mail) + база данных + личный кабинет',
			},
			{ title: 'Создал дизайн-систему', desc: 'Tailwind CSS, адаптивность, темизация, микроанимации' },
			{ title: 'Настроил production-инфраструктуру', desc: 'Docker + Nginx + деплой на VPS с доменом' },
		],
	},
	{
		id: 'rosstat',
		role: 'Бригадир-инструктор территориального уровня',
		company: 'Свердловскстат',
		period: 'Июль 2020 – Ноябрь 2022',
		summary:
			'Координировал работу территориальных подразделений в рамках СХМП-2021. Автоматизировал отчётную документацию и создавал аналитические материалы для региональных публикаций.',
		highlights: [
			{ title: 'Координировал региональные команды ', desc: 'организация работы и контроль сроков выполнения' },
			{ title: 'Автоматизировал отчётность', desc: 'сокращение ручной подготовки отчётных документов' },
			{ title: 'Разрабатывал аналитические материалы', desc: 'графики и отчёты для официальных пресс-релизов' },
		],
	},
	{
		id: 'am-global',
		role: 'Менеджер по закупкам и логистике',
		company: 'ООО «АМ ГЛОБАЛ»',
		period: 'Июнь 2018 – Июнь 2019',
		summary:
			'Обеспечивал закупку товаров по минимальной цене: анализировал рынок, подбирал поставщиков и оптимизировал логистику. Контролировал выполнение заказов и сроки поставки.',
		highlights: [
			{ title: 'Анализировал рынок', desc: 'отбор поставщиков с выгодными условиями закупки' },
			{ title: 'Оптимизировал логистику', desc: 'контроль сроков и процесса доставки' },
			{ title: 'Работал с поставщиками', desc: 'согласование и контроль выполнения заказов' },
		],
	},
];
