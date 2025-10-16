import {
	IconAI,
	IconCSS,
	IconDocker,
	IconFigma,
	IconFSD,
	IconGithub,
	IconHTML,
	IconJS,
	IconMobX,
	IconPost,
	IconPS,
	IconReact,
	IconSASS,
	IconSB,
	IconTS,
	IconTW,
	IconVite,
	IconVS,
} from '@/shared/assets/icons';

export const skills = [
	{
		label: 'React',
		value: 90,
		icon: IconReact,
		color: '#61DAFB',
	},
	{
		label: 'TypeScript',
		value: 65,
		icon: IconTS,
		color: '#3178C6',
	},
	{
		label: 'JavaScript',
		value: 65,
		icon: IconJS,
		color: '#F7DF1E',
	},
	{
		label: 'MobX',
		value: 55,
		icon: IconMobX,
		color: '#FF9955',
	},
	{
		label: 'Tailwind CSS',
		value: 74,
		icon: IconTW,
		color: '#38B2AC',
	},
	{
		label: 'Supabase',
		value: 13,
		icon: IconSB,
		color: '#3ECF8E',
	},
	{
		label: 'Vite',
		value: 18,
		icon: IconVite,
		color: '#646CFF',
	},
	{
		label: 'HTML5',
		value: 85,
		icon: IconHTML,
		color: '#E34F26',
	},
	{
		label: 'CSS3',
		value: 80,
		icon: IconCSS,
		color: '#1572B6',
	},
	{
		label: 'SASS',
		value: 65,
		icon: IconSASS,
		color: '#CC6699',
	},
	{
		label: 'PostgreSQL',
		value: 35,
		icon: IconPost,
		color: '#336791',
	},
	{
		label: 'Docker',
		value: 25,
		icon: IconDocker,
		color: '#2496ED',
	},
	{
		label: 'FSD',
		value: 25,
		icon: IconFSD,
		color: '#3193FF',
	},
	{
		label: 'GitHub',
		value: 45,
		icon: IconGithub,
		color: '#FFF',
	},
	{
		label: 'VS Code',
		value: 70,
		icon: IconVS,
		color: '#007ACC',
	},
	{
		label: 'Figma',
		value: 55,
		icon: IconFigma,
		color: '#F24E1E',
	},
	{
		label: 'Photoshop',
		value: 40,
		icon: IconPS,
		color: '#31A8FF',
	},
	{
		label: 'Illustrator',
		value: 35,
		icon: IconAI,
		color: '#FF9A00',
	},
];

export const workplaces = [
	{
		workplace: 'Личный проект',
		post: 'Frontend-разработчик',
		start: 'Январь 2025',
		end: 'по настоящее время',
		desc: 'Разработка личного портфолио-проекта с использованием React, TypeScript, Vite и Tailwind. Фокус на архитектуре Feature-Sliced Design, управлении состоянием через MobX и интеграции с Supabase. Создание адаптивного UI и оптимизация UX под различные устройства.',
	},
	{
		workplace:
			'Управление Федеральной службы государственной статистики по Свердловской области и Курганской области',
		post: 'Бригадир-инструктор территориального уровня',
		start: 'Июль 2020',
		end: 'Ноябрь 2022',
		desc: 'Участие в организации работ по подготовке и проведению Сельскохозяйственной микропереписи 2021 года (СХМП-2021): — был ответственен за координацию и контроль работ по СХМП на уровне территориальных органов государственной статистики (в субъектах Свердловской области); — занимался подготовкой материалов для пресс-релизов в рамках популяризации СХМП на уровне Свердловской области; — осуществлял работы по подготовке таблиц, графиков (диаграмм) для формирования презентационных материалов и официальных публикаций по СХМП на уровне Свердловской области.',
	},
	{
		workplace: 'ООО "АМ ГЛОБАЛ"',
		post: 'Менеджер по закупкам и логистике',
		start: 'Июнь 2018',
		end: 'Июнь 2019',
		desc: 'Активный поиск и отбор товаров с потенциалом для оптовой реализации с прибылью. Моя деятельность включала анализ предложений, взаимодействие с поставщиками, составление и оптимизацию ассортимента, а также организацию эффективной логистики для оперативной доставки клиентам.',
	},
];

export const education = [
	{
		univer: 'Гуманитарный университет, Екатеринбург',
		post: 'Политические науки и регионоведение',
		code: '41.06.01',
		class: 'Аспирантура',
		grade: 'Исследователь. Преподаватель-исследователь',
		end: '2020 – 2023',
	},
	{
		univer: 'Гуманитарный университет, Екатеринбург',
		post: 'Юриспруденция',
		code: '40.04.01',
		class: 'Магистратура',
		grade: 'Магистр',
		end: '2018 – 2020',
	},
	{
		univer: 'Гуманитарный университет, Екатеринбург',
		post: 'Прикладная информатика в экономике',
		code: '09.03.03',
		class: 'Бакалавриат',
		grade: 'Бакалавр',
		end: '2014 – 2018',
	},
];
