import {
	Blocks,
	Code2,
	Database,
	Gauge,
	LayoutGrid,
	Move,
	Palette,
	PanelsTopLeft,
	Plug,
	Server,
	ShieldCheck,
	UserCog,
} from 'lucide-react';

import { getTechs } from '@/entities/tecnology';
import * as KB from '@/shared/content/kanban';
import * as OM from '@/shared/content/onemate';
import * as PF from '@/shared/content/portfolio';

import type { Feature, Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'onemate',
		title: 'Onemate',
		date: 'Сентябрь 2025',
		description:
			'Модульная веб-платформа для личной продуктивности с расширяемой архитектурой и набором инструментов (заметки, календарь, погода, переводчик и др.), поддерживающая подключение независимых функциональных модулей.',
		img: OM.OHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://letunoff.ru/onemate',
		status: 'В разработке',
		target: 'Создать масштабируемую платформу для личной продуктивности с фокусом на модульную архитектуру и расширяемость.',
		solution:
			'Реализовано модульное рабочее пространство с единой дизайн-системой, независимыми виджетами и Supabase для хранения и синхронизации пользовательских данных.',
		/* prettier-ignore */
		gallery: [OM.OHomeD, OM.ODashD, OM.OOverviewD, OM.OPersonalD, OM.OAvatarsD, OM.OContactsD, OM.OSecureD, OM.OLoginD, OM.ORegisterD, OM.OAboutD, OM.OTermsD],
		/* prettier-ignore */
		galleryM: [OM.OHomeM, OM.ODash1M, OM.ODash2M, OM.OSheetM, OM.OPersonalM, OM.OAvatarsM, OM.OSecureM, OM.OLoginM, OM.ORegisterM, OM.OAboutM],
	},
	{
		id: 'portfolio',
		title: 'Портфолио',
		date: 'Октябрь 2025',
		description:
			'Персональное портфолио на React + TypeScript с адаптивным интерфейсом, темизацией и переиспользуемой дизайн-системой, созданное на базе архитектурных решений OneMate.',
		img: PF.PHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Vite']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Адаптировать архитектуру OneMate под статичный сайт, сохранив качество кода и дизайн-систему.',
		solution:
			'Переиспользована и расширена дизайн-система OneMate, упрощены FSD-слои, добавлены lazy loading и code splitting, выполнен деплой на VPS через Docker + Nginx.',
		gallery: [PF.PHomeD, PF.PAboutD, PF.PSkillsD, PF.PProjectsD, PF.PContactsD, PF.PDetailsD],
		galleryM: [PF.PHomeM, PF.PAboutM, PF.PSkillsM, PF.PProjectsM, PF.PContactsM, PF.PDetailsM, PF.PDrawerM],
	},
	{
		id: 'kanban',
		title: 'Kanban Board',
		date: 'Апрель 2026',
		description:
			'Kanban-модуль на чистом TypeScript: собственный state, кастомный drag-and-drop и управляемый lifecycle компонентов. Спроектирован как изолированный модуль и интегрирован в OneMate.',
		img: KB.KMainD,
		techs: getTechs(['TypeScript', 'FSD', 'Tailwind CSS', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate/tree/main/src/pages/kanban',
		link: 'https://letunoff.ru/onemate/kanban',
		status: 'Завершено',
		target: 'Создать фреймворк-независимый модуль управления задачами с собственным state, drag-and-drop и lifecycle компонентов.',
		solution:
			'Разработан изолированный TS-модуль с локальным state на замыканиях и подписках, кастомным DnD и прозрачным жизненным циклом компонентов. Спроектирован для независимого использования и встроен в OneMate через прокси-страницу.',
		gallery: [KB.KMainD, KB.KTaskD, KB.KViewD, KB.KColumnD, KB.KDeleteD],
		galleryM: [KB.KMainM, KB.KTaskM, KB.KViewM, KB.KColumnM, KB.KDeleteM],
	},
];

export const FEATURES_ONEMATE: Feature[] = [
	{
		title: '6 виджетов',
		icon: LayoutGrid,
		color: 'text-[#3B82F6]',
		lead: 'Ежедневные операции в одном месте',
		bullets: [
			'Калькулятор с историей',
			'Календарь с экспортом периодов',
			'Заметки с Drag & Drop',
			'Конвертер валют',
			'Погода с прогнозом',
			'Переводчик',
		],
	},
	{
		// title: 'Унифицированный UI',
		title: 'Платформа и доступ',
		icon: PanelsTopLeft,
		color: 'text-[#8B5CF6]',
		lead: 'Один визуальный язык для всех модулей',
		bullets: [
			'OAuth 2.0 + Email авторизация',
			'Адаптив под мобайл/таб/десктоп',
			'Кроссбраузерная совместимость',
			'Dark / Light режимы',
		],
	},
	{
		title: 'Личный кабинет',
		icon: UserCog,
		color: 'text-[#10B981]',
		lead: 'Настройка аккаунта и безопасность',
		bullets: [
			'16 готовых аватарок',
			'Редактирование личных данных',
			'История входов и сессий',
			'Смена пароля и удаление профиля',
		],
	},
	{
		title: 'Demo-режим',
		icon: ShieldCheck,
		color: 'text-[#3B82F6]',
		lead: 'Доступ без регистрации',
		bullets: [
			'Демонстрация функционала без аккаунта',
			'GDPR-friendly подход',
			'Политика конфиденциальности',
			'Пользовательское соглашение',
		],
	},
];

export const FEATURES_PORTFOLIO: Feature[] = [
	{
		title: 'Архитектура',
		icon: Blocks,
		color: 'text-[#3B82F6]',
		lead: 'Переиспользование и масштабируемость',
		bullets: [
			'Основано на архитектуре OneMate',
			'Упрощённые FSD-слои',
			'Переиспользуемые UI-компоненты',
			'Чистая структура проекта',
		],
	},
	{
		title: 'Производительность',
		icon: Gauge,
		color: 'text-[#10B981]',
		lead: 'Оптимизированная загрузка',
		bullets: ['Lazy loading страниц', 'Code splitting', 'Минимизация бандла', 'Быстрая initial загрузка'],
	},
	{
		title: 'UX и дизайн',
		icon: Palette,
		color: 'text-[#8B5CF6]',
		lead: 'Чистый и адаптивный интерфейс',
		bullets: [
			'Адаптив под все устройства',
			'Темизация (dark / light)',
			'Единая дизайн-система',
			'Читаемая типографика',
		],
	},
	{
		title: 'Инфраструктура',
		icon: Server,
		color: 'text-[#F59E0B]',
		lead: 'Production-ready окружение',
		bullets: ['Docker + Nginx', 'Деплой на VPS', 'Собственный домен', 'CI-подход к сборке'],
	},
];

export const FEATURES_KANBAN: Feature[] = [
	{
		title: 'Чистый TypeScript',
		icon: Code2,
		color: 'text-[#3B82F6]',
		lead: 'Без фреймворков',
		bullets: [
			'Imperative DOM-рендеринг',
			'Изолированные компоненты',
			'Независимость от React',
			'Контроль над жизненным циклом',
		],
	},
	{
		title: 'State-менеджмент',
		icon: Database,
		color: 'text-[#10B981]',
		lead: 'Собственная реализация',
		bullets: ['State на замыканиях', 'Система подписок', 'Реакция на изменения данных', 'Без сторонних библиотек'],
	},
	{
		title: 'Drag & Drop',
		icon: Move,
		color: 'text-[#8B5CF6]',
		lead: 'Кастомная реализация',
		bullets: [
			'Перемещение задач и колонок',
			'Работа с pointer events',
			'Поддержка разных устройств',
			'Точная работа с DOM',
		],
	},
	{
		title: 'Интеграция',
		icon: Plug,
		color: 'text-[#F59E0B]',
		lead: 'Встраивание в платформу',
		bullets: ['Изолированный модуль', 'Интеграция в OneMate', 'Прокси-страница', 'Unit-тесты на Vitest'],
	},
];
