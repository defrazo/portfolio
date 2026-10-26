import { getTechs } from '@/entities/tecnology';
import * as KB from '@/shared/content/kanban';
import * as OM from '@/shared/content/onemate';
import * as PF from '@/shared/content/portfolio';
import * as TB from '@/shared/content/toolbox';

import { FEATURES, type Project } from '.';

export const PROJECTS: Project[] = [
	{
		id: 'onemate',
		slug: 'onemate',
		title: 'Onemate',
		role: 'Frontend Developer',
		date: 'Сентябрь 2025',
		description:
			'Модульная платформа для организации личного рабочего пространства с набором сервисов для повседневной работы',
		img: OM.OHomeD,
		/* prettier-ignore */
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Laravel', 'PHP', 'REST API', 'PostgreSQL', 'Docker', 'Nginx', 'Vite']),
		git: 'https://github.com/defrazo/onemate',
		link: 'https://onemate.letunoff.ru',
		status: 'Развивается',
		target: 'Создать единое персональное пространство с независимыми сервисами, настраиваемым интерфейсом и возможностью дальнейшего расширения.',
		solution:
			'Разработана модульная платформа на React и Laravel. Реализованы собственный REST API, авторизация, облачное хранилище, мониторинг сервисов, уведомления и интеграция с ToolBox через OAuth 2.0.',
		/* prettier-ignore */
		gallery: [OM.OHomeD, OM.ODashD, OM.OOverviewD, OM.OPersonalD, OM.OAvatarsD, OM.OContactsD, OM.OSecureD, OM.OLoginD, OM.ORegisterD, OM.OAboutD, OM.OTermsD],
		/* prettier-ignore */
		galleryM: [OM.OHomeM, OM.ODash1M, OM.ODash2M, OM.OSheetM, OM.OPersonalM, OM.OAvatarsM, OM.OSecureM, OM.OLoginM, OM.ORegisterM, OM.OAboutM],
		features: FEATURES.onemate,
		previous: 'portfolio',
		next: 'toolbox',
	},
	{
		id: 'toolbox',
		slug: 'toolbox',
		title: 'ToolBox',
		role: 'Fullstack Developer',
		date: 'Июнь 2026',
		description:
			'Расширяемая платформа веб-инструментов для решения повседневных задач с единой авторизацией и модульной архитектурой',
		img: TB.THomeD,
		/* prettier-ignore */
		techs: getTechs(['React', 'TypeScript', 'FSD', 'Tailwind CSS', 'MobX', 'Laravel', 'PHP', 'REST API', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Vite']),
		git: 'https://github.com/defrazo/toolbox',
		link: 'https://toolbox.letunoff.ru',
		status: 'Развивается',
		target: 'Создать расширяемую платформу независимых веб-инструментов с единым аккаунтом и общей инфраструктурой.',
		solution:
			'Разработана fullstack-платформа на React и Laravel с модульной архитектурой, собственным REST API, авторизацией и интеграцией с OneMate через OAuth 2.0.',
		gallery: [TB.THomeD, TB.TRenamerD, TB.TShortenerD, TB.TLinkD, TB.TSettingsD],
		galleryM: [TB.THomeM, TB.TRenamerM, TB.TShortenerM, TB.TLinkM, TB.TSettingsM],
		features: FEATURES.toolbox,
		previous: 'onemate',
		next: 'kanban',
	},
	{
		id: 'kanban',
		slug: 'kanban',
		title: 'Kanban',
		role: 'Frontend Developer',
		date: 'Апрель 2026',
		description:
			'Модуль управления задачами для OneMate на чистом TypeScript с собственным state, drag-and-drop и lifecycle компонентов',
		img: KB.KMainD,
		techs: getTechs(['TypeScript', 'JavaScript', 'FSD', 'Tailwind CSS', 'Supabase', 'Vite']),
		git: 'https://github.com/defrazo/onemate/tree/main/src/pages/kanban',
		link: 'https://onemate.letunoff.ru/kanban',
		status: 'Завершено',
		target: 'Создать независимый модуль управления задачами с возможностью интеграции в OneMate.',
		solution:
			'Реализован модуль на чистом TypeScript с собственной системой управления состоянием и drag-and-drop. Интегрирован в OneMate через прокси-страницу.',
		gallery: [KB.KMainD, KB.KTaskD, KB.KViewD, KB.KColumnD, KB.KDeleteD],
		galleryM: [KB.KMainM, KB.KTaskM, KB.KViewM, KB.KColumnM, KB.KDeleteM],
		features: FEATURES.kanban,
		previous: 'toolbox',
		next: 'portfolio',
	},
	{
		id: 'portfolio',
		slug: 'portfolio',
		title: 'Портфолио',
		role: 'Frontend Developer',
		date: 'Октябрь 2025',
		description:
			'Персональное портфолио на React и TypeScript с адаптивным интерфейсом, темизацией и собственной дизайн-системой',
		img: PF.PHomeD,
		techs: getTechs(['React', 'TypeScript', 'FSD', 'MobX', 'Tailwind CSS', 'Vite', 'Docker', 'Nginx']),
		git: 'https://github.com/defrazo/portfolio',
		link: 'https://letunoff.ru',
		status: 'Завершено',
		target: 'Создать персональное портфолио для представления опыта, навыков и проектов с использованием существующей архитектуры и дизайн-системы.',
		solution:
			'Адаптирована архитектура OneMate под задачи портфолио, переработана структура приложения и расширена дизайн-система. Реализованы адаптивный интерфейс, темизация и детальные страницы проектов.',
		gallery: [PF.PHomeD, PF.PAboutD, PF.PSkillsD, PF.PProjectsD, PF.PContactsD, PF.PDetailsD],
		galleryM: [PF.PHomeM, PF.PAboutM, PF.PSkillsM, PF.PProjectsM, PF.PContactsM, PF.PDetailsM, PF.PDrawerM],
		features: FEATURES.portfolio,
		previous: 'kanban',
		next: 'onemate',
	},
];
