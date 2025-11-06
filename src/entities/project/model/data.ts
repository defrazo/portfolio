import { getTechs } from '@/entities/tecnology';
import {
	OAboutD,
	OAboutM,
	OAvatarsD,
	OAvatarsM,
	OContactsD,
	ODash1M,
	ODash2M,
	ODashD,
	OHomeD,
	OHomeM,
	OLoginD,
	OLoginM,
	OOverviewD,
	OPersonalD,
	OPersonalM,
	ORegisterD,
	ORegisterM,
	OSecureD,
	OSecureM,
	OSheetM,
	OTermsD,
} from '@/shared/content/onemate';
import { PAboutD, PContactsD, PDetailsD, PHomeD, PProjectsD, PSkillsD } from '@/shared/content/portfolio';

import type { Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'onemate',
		title: 'Onemate',
		date: 'Сентябрь 2025',
		description:
			'Многофункциональное веб-приложение с виджет-хабом (калькулятор, календарь, заметки, конвертер валют, погода, переводчик), канбан-доской и системой задач.',
		img: OHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://letunoff.ru/onemate',
		status: 'В разработке',
		target: 'Создать экспериментальную платформу для апробации современных frontend-решений с фокусом на UX и производительность.',
		solution:
			'Реализовано модульное рабочее пространство с единой дизайн-системой, независимыми виджетами и интеграцией Supabase для хранения данных.',
		/* prettier-ignore */
		gallery: [OHomeD, ODashD, OOverviewD, OPersonalD, OAvatarsD, OContactsD, OSecureD, OLoginD, ORegisterD, OAboutD, OTermsD],
		galleryM: [OHomeM, ODash1M, ODash2M, OSheetM, OPersonalM, OAvatarsM, OSecureM, OLoginM, ORegisterM, OAboutM],
	},
	{
		id: 'portfolio',
		title: 'Портфолио',
		date: 'Октябрь 2025',
		description:
			'Современное портфолио с архитектурой Feature-Sliced Design, демонстрирующее навыки фронтенд-разработки через чистый код, адаптивный дизайн и производительность.',
		img: PHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Vite']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Создать масштабируемое портфолио-приложение для демонстрации компетенций через качество кода и современный UX.',
		solution:
			'Реализовано SPA на React + TypeScript с FSD-архитектурой, адаптивным интерфейсом, системой темизации и оптимальной производительностью.',
		gallery: [PHomeD, PAboutD, PSkillsD, PProjectsD, PContactsD, PDetailsD],
	},
];
