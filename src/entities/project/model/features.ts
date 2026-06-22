import { Blocks, Code2, Gauge, LayoutGrid, Move, Palette, PanelsTopLeft, Plug, Server, UserCog } from 'lucide-react';

import type { Feature, ProjectId } from '.';

export const FEATURES = {
	toolbox: [
		{
			title: 'Инструменты',
			icon: LayoutGrid,
			color: 'text-[#3B82F6]',
			lead: 'Сервисы для прикладных задач',
			bullets: [
				'Пакетное переименование файлов',
				'Предпросмотр и скачивание результата',
				'Сокращение ссылок с историей и управлением',
				'QR-коды и быстрые действия',
			],
		},
		{
			title: 'Архитектура',
			icon: Blocks,
			color: 'text-[#10B981]',
			lead: 'Модульная основа для новых сервисов',
			bullets: [
				'Независимые функциональные модули',
				'Feature-Sliced Design',
				'Переиспользуемые UI-компоненты',
				'Масштабируемая структура проекта',
			],
		},
		{
			title: 'Платформа и доступ',
			icon: PanelsTopLeft,
			color: 'text-[#8B5CF6]',
			lead: 'Общий аккаунт и единый пользовательский опыт',
			bullets: [
				'Email-авторизация и верификация',
				'Персональный профиль пользователя',
				'Интернационализация интерфейса',
				'Dark / Light режимы',
			],
		},
		{
			title: 'Backend',
			icon: Server,
			color: 'text-[#F59E0B]',
			lead: 'Серверная логика и production-окружение',
			bullets: [
				'Laravel REST API и бизнес-логика',
				'PostgreSQL + Redis',
				'Очереди и email-уведомления',
				'Docker + Nginx на VPS',
			],
		},
	],
	kanban: [
		{
			title: 'Функциональность',
			icon: LayoutGrid,
			color: 'text-[#3B82F6]',
			lead: 'Управление задачами и колонками',
			bullets: [
				'Создание и редактирование задач',
				'Перемещение задач и колонок',
				'Просмотр деталей задачи',
				'Удаление с подтверждением',
			],
		},
		{
			title: 'Чистый TypeScript',
			icon: Code2,
			color: 'text-[#10B981]',
			lead: 'Без фреймворков',
			bullets: [
				'Imperative DOM-рендеринг',
				'State на замыканиях',
				'Система подписок',
				'Контроль над жизненным циклом',
			],
		},
		{
			title: 'Drag & Drop',
			icon: Move,
			color: 'text-[#8B5CF6]',
			lead: 'Кастомное взаимодействие с DOM',
			bullets: [
				'Pointer events',
				'Поддержка разных устройств',
				'Точная работа с координатами',
				'Реакция на изменения данных',
			],
		},
		{
			title: 'Интеграция',
			icon: Plug,
			color: 'text-[#F59E0B]',
			lead: 'Встраивание в платформу',
			bullets: ['Изолированный TS-модуль', 'Интеграция в OneMate', 'Прокси-страница', 'Unit-тесты на Vitest'],
		},
	],
	portfolio: [
		{
			title: 'Контент',
			icon: LayoutGrid,
			color: 'text-[#3B82F6]',
			lead: 'Структурированная презентация опыта',
			bullets: [
				'Главный экран и описание профиля',
				'Раздел навыков и технологий',
				'Каталог проектов',
				'Детальные страницы кейсов',
			],
		},
		{
			title: 'Архитектура',
			icon: Blocks,
			color: 'text-[#10B981]',
			lead: 'Переиспользование и масштабируемость',
			bullets: [
				'Основано на архитектуре OneMate',
				'Упрощённые FSD-слои',
				'Переиспользуемые UI-компоненты',
				'Чистая структура проекта',
			],
		},
		{
			title: 'UX/UI',
			icon: Palette,
			color: 'text-[#8B5CF6]',
			lead: 'Адаптивная и читаемая подача',
			bullets: [
				'Dark / Light режимы',
				'Адаптив под desktop и mobile',
				'Единая дизайн-система',
				'Читаемая типографика',
			],
		},
		{
			title: 'Производительность',
			icon: Gauge,
			color: 'text-[#F59E0B]',
			lead: 'Оптимизированная загрузка',
			bullets: ['Lazy loading страниц', 'Code splitting', 'Оптимизация бандла', 'Быстрая initial загрузка'],
		},
	],
	onemate: [
		{
			title: 'Инструменты',
			icon: LayoutGrid,
			color: 'text-[#3B82F6]',
			lead: 'Ежедневные операции в одном месте',
			bullets: [
				'Калькулятор с историей',
				'Календарь с экспортом периодов',
				'Заметки с Drag & Drop',
				'Погода, переводчик и валюты',
			],
		},
		{
			title: 'Архитектура',
			icon: Blocks,
			color: 'text-[#10B981]',
			lead: 'Модульная основа для виджетов',
			bullets: [
				'Независимые функциональные модули',
				'Feature-Sliced Design',
				'Переиспользуемые UI-компоненты',
				'Синхронизация данных через Supabase',
			],
		},
		{
			title: 'Платформа и доступ',
			icon: PanelsTopLeft,
			color: 'text-[#8B5CF6]',
			lead: 'Единый опыт на разных устройствах',
			bullets: [
				'OAuth 2.0 + Email авторизация',
				'Dark / Light режимы',
				'Адаптив под desktop и mobile',
				'Кроссбраузерная совместимость',
			],
		},
		{
			title: 'Аккаунт',
			icon: UserCog,
			color: 'text-[#F59E0B]',
			lead: 'Профиль, безопасность и demo-доступ',
			bullets: [
				'Редактирование личных данных',
				'История входов и сессий',
				'Смена пароля и удаление профиля',
				'Demo-режим без регистрации',
			],
		},
	],
} satisfies Record<ProjectId, Feature[]>;
