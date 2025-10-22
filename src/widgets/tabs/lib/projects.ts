import { Onemate, Portfolio } from '@/shared/content';

import type { Projects } from '../model';
import { getTechs } from './utils';

export const projects: Projects[] = [
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
	},
];
