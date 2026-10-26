import { Blocks, Code2, LayoutGrid, Move, Palette, PanelsTopLeft, Plug, Server, UserCog } from 'lucide-react';

import type { Feature, ProjectId } from '.';

export const FEATURES = {
	onemate: [
		{
			title: 'Инструменты',
			icon: LayoutGrid,
			color: 'text-[#3B82F6]',
			lead: 'Сервисы для повседневной работы',
			bullets: [
				'Настраиваемый рабочий стол и виджеты',
				'Заметки и управление задачами',
				'Облачное хранилище файлов',
				'Мониторинг доступности сервисов',
			],
		},
		{
			title: 'Архитектура',
			icon: Blocks,
			color: 'text-[#10B981]',
			lead: 'Модульная архитектура приложения',
			bullets: [
				'Независимые функциональные модули',
				'Feature-Sliced Design',
				'Переиспользуемые UI-компоненты',
				'Laravel REST API и PostgreSQL',
			],
		},
		{
			title: 'Платформа и доступ',
			icon: PanelsTopLeft,
			color: 'text-[#8B5CF6]',
			lead: 'Единый интерфейс и управление доступом',
			bullets: [
				'Email-авторизация через Laravel Sanctum',
				'OAuth 2.0 и интеграция с ToolBox',
				'Dark / Light режимы',
				'Адаптив под desktop и mobile',
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
			lead: 'Единый интерфейс и управление доступом',
			bullets: [
				'Email-авторизация и верификация',
				'Вход через OneMate по OAuth 2.0',
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
			lead: 'Без UI-фреймворков',
			bullets: [
				'Императивный DOM-рендеринг',
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
				'Pointer Events',
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
			lead: 'Адаптация и переиспользование компонентов',
			bullets: [
				'Основано на архитектуре OneMate',
				'Адаптированные FSD-слои',
				'Переиспользуемые UI-компоненты',
				'Структурированные данные проектов',
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
			title: 'Реализация',
			icon: Code2,
			color: 'text-[#F59E0B]',
			lead: 'Компонентная структура приложения',
			bullets: [
				'Маршрутизация между разделами',
				'Динамические страницы проектов',
				'Типизированные данные на TypeScript',
				'Переиспользуемые шаблоны страниц',
			],
		},
	],
} satisfies Record<ProjectId, Feature[]>;
