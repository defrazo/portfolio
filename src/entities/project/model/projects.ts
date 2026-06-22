import { getTechs } from '@/entities/tecnology';
import * as KB from '@/shared/content/kanban';
import * as OM from '@/shared/content/onemate';
import * as PF from '@/shared/content/portfolio';
import * as TB from '@/shared/content/toolbox';

import { FEATURES, type Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'toolbox',
		slug: 'toolbox',
		title: 'ToolBox',
		role: 'Fullstack Developer',
		date: 'Июнь 2026',
		description:
			'Коллекция специализированных веб-инструментов с общей авторизацией, пользовательским профилем и масштабируемой модульной архитектурой.',
		img: TB.THomeD,
		/* prettier-ignore */
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Laravel', 'PHP', 'REST API', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Vite']),
		git: 'https://github.com/defrazo/toolbox',
		link: 'https://toolbox.letunoff.ru',
		status: 'В разработке',
		target: 'Создать расширяемую платформу веб-инструментов с общим аккаунтом пользователя, централизованным хранением данных и независимыми функциональными модулями.',
		solution:
			'Разработана платформа специализированных веб-инструментов на React и Laravel. Реализована расширяемая система модулей, авторизация пользователей, REST API и production-инфраструктура на VPS (Docker + Nginx).',
		gallery: [TB.THomeD, TB.TRenamerD, TB.TShortenerD, TB.TLinkD, TB.TSettingsD],
		galleryM: [TB.THomeM, TB.TRenamerM, TB.TShortenerM, TB.TLinkM, TB.TSettingsM],
		features: FEATURES.toolbox,
		previous: 'kanban',
		next: 'onemate',
	},
	{
		id: 'kanban',
		slug: 'kanban',
		title: 'Kanban Board',
		role: 'Frontend Developer',
		date: 'Апрель 2026',
		description:
			'Kanban-модуль на чистом TypeScript: собственный state, кастомный drag-and-drop и управляемый lifecycle компонентов.',
		img: KB.KMainD,
		techs: getTechs(['TypeScript', 'JavaScript', 'FSD', 'Tailwind CSS', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate/tree/main/src/pages/kanban',
		link: 'https://onemate.letunoff.ru/kanban',
		status: 'Завершено',
		target: 'Создать фреймворк-независимый модуль управления задачами с собственным state, drag-and-drop и lifecycle компонентов.',
		solution:
			'Разработан изолированный TS-модуль с локальным state на замыканиях и подписках, кастомным DnD и прозрачным жизненным циклом компонентов. Спроектирован для независимого использования и встроен в OneMate через прокси-страницу.',
		gallery: [KB.KMainD, KB.KTaskD, KB.KViewD, KB.KColumnD, KB.KDeleteD],
		galleryM: [KB.KMainM, KB.KTaskM, KB.KViewM, KB.KColumnM, KB.KDeleteM],
		features: FEATURES.kanban,
		previous: 'portfolio',
		next: 'toolbox',
	},
	{
		id: 'portfolio',
		slug: 'portfolio',
		title: 'Портфолио',
		role: 'Frontend Developer',
		date: 'Октябрь 2025',
		description:
			'Персональное портфолио на React + TypeScript с адаптивным интерфейсом, темизацией и переиспользуемой дизайн-системой.',
		img: PF.PHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'MobX', 'Tailwind CSS', 'Vite', 'Docker', 'Nginx']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Адаптировать архитектуру OneMate под статичный сайт, сохранив качество кода и дизайн-систему.',
		solution:
			'Переиспользована и расширена дизайн-система OneMate, упрощены FSD-слои, добавлены lazy loading и code splitting, выполнен деплой на VPS через Docker + Nginx.',
		gallery: [PF.PHomeD, PF.PAboutD, PF.PSkillsD, PF.PProjectsD, PF.PContactsD, PF.PDetailsD],
		galleryM: [PF.PHomeM, PF.PAboutM, PF.PSkillsM, PF.PProjectsM, PF.PContactsM, PF.PDetailsM, PF.PDrawerM],
		features: FEATURES.portfolio,
		previous: 'onemate',
		next: 'kanban',
	},
	{
		id: 'onemate',
		slug: 'onemate',
		title: 'Onemate',
		role: 'Frontend Developer',
		date: 'Сентябрь 2025',
		description:
			'Модульная веб-платформа с расширяемой архитектурой для организации задач, информации и повседневной работы.',
		img: OM.OHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite', 'Docker', 'Nginx']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://onemate.letunoff.ru',
		status: 'В разработке',
		target: 'Создать масштабируемую платформу для личной продуктивности с фокусом на модульную архитектуру и расширяемость.',
		solution:
			'Реализовано модульное рабочее пространство с единой дизайн-системой, независимыми виджетами и Supabase для хранения и синхронизации пользовательских данных.',
		/* prettier-ignore */
		gallery: [OM.OHomeD, OM.ODashD, OM.OOverviewD, OM.OPersonalD, OM.OAvatarsD, OM.OContactsD, OM.OSecureD, OM.OLoginD, OM.ORegisterD, OM.OAboutD, OM.OTermsD],
		/* prettier-ignore */
		galleryM: [OM.OHomeM, OM.ODash1M, OM.ODash2M, OM.OSheetM, OM.OPersonalM, OM.OAvatarsM, OM.OSecureM, OM.OLoginM, OM.ORegisterM, OM.OAboutM],
		features: FEATURES.onemate,
		previous: 'kanban',
		next: 'portfolio',
	},
];
