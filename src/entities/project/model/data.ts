import { getTechs } from '@/entities/tecnology';
import { Onemate, Portfolio } from '@/shared/content';

import type { Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'onemate',
		title: 'Onemate',
		date: 'Сентябрь 2025',
		description:
			'OneMate – это современное веб-приложение, которое включает в себя многофункциональный виджет-хаб (калькулятор, календарь, заметки, конвертер валют, погода, переводчик), канбан-доску и удобный ToDo.',
		img: Onemate,
		techs: getTechs(['React', 'TypeScript', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://letunoff.ru/onemate',
		status: 'В разработке',
		target: 'Создать экспериментальную платформу для апробации инструментов и архитектурных подходов во фронтенде с фокусом на UX.',
		solution:
			'Персональное настраиваемое рабочее пространство: унифицированный UI, набор виджетов и полная система управления аккаунтом.',
		gallery: [Onemate, Onemate, Onemate, Onemate, Onemate, Onemate],
	},
	{
		id: 'portfolio',
		title: 'Портфолио',
		date: 'Октябрь 2025',
		description:
			'Проект создан как демонстрация моих навыков фронтенд-разработки и любви к чистому коду. В основе лежит архитектура Feature-Sliced Design, обеспечивающая масштабируемость и читаемость. Портфолио адаптивно, оптимизировано по скорости и оформлено в минималистичном стиле.',
		img: Portfolio,
		techs: getTechs(['React', 'TypeScript', 'Tailwind CSS', 'MobX', 'Vite']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Создать современное и технологичное портфолио, отражающее навыки фронтенд-разработчика и демонстрирующее реальные примеры кода, архитектуры и визуального стиля. Важно было объединить проекты, виджеты и личный кабинет в единой экосистеме с акцентом на адаптивность, производительность и модульность кода.',
		solution:
			'Разработано динамическое веб-приложение на стеке React + TypeScript + MobX, с архитектурой Feature-Sliced Design и адаптивным интерфейсом на Tailwind CSS. Реализованы интерактивные виджеты, тёмная тема, система авторизации и юридические разделы. Проект полностью автономен, легко масштабируется и демонстрирует лучшие практики современного фронтенда.',
		gallery: [Portfolio, Portfolio, Portfolio, Portfolio, Portfolio, Portfolio],
	},
];
