import { getTechs } from '@/entities/tecnology';
import { Onemate, Portfolio } from '@/shared/content';

import type { Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'onemate',
		title: 'Onemate',
		date: 'Сентябрь 2025',
		description:
			'Многофункциональное веб-приложение с виджет-хабом (калькулятор, календарь, заметки, конвертер валют, погода, переводчик), канбан-доской и системой задач.',
		img: Onemate,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://letunoff.ru/onemate',
		status: 'В разработке',
		target: 'Создать экспериментальную платформу для апробации современных frontend-решений с фокусом на UX и производительность.',
		solution:
			'Реализовано модульное рабочее пространство с единой дизайн-системой, независимыми виджетами и интеграцией Supabase для хранения данных.',
		gallery: [Onemate, Onemate, Onemate, Onemate, Onemate, Onemate],
	},
	{
		id: 'portfolio',
		title: 'Портфолио',
		date: 'Октябрь 2025',
		description:
			'Современное портфолио с архитектурой Feature-Sliced Design, демонстрирующее навыки фронтенд-разработки через чистый код, адаптивный дизайн и производительность.',
		img: Portfolio,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Vite']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Создать масштабируемое портфолио-приложение для демонстрации компетенций через качество кода и современный UX.',
		solution:
			'Реализовано SPA на React + TypeScript с FSD-архитектурой, адаптивным интерфейсом, системой темизации и оптимальной производительностью.',
		gallery: [Portfolio, Portfolio, Portfolio, Portfolio, Portfolio, Portfolio],
	},
];
