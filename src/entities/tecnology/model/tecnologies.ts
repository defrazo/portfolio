import * as I from '@/shared/assets/icons';

import type { Technology } from '.';

export const TECHNOLOGIES: Technology[] = [
	{ label: 'React', icon: I.IconReact, description: 'Компонентный UI', skill: 4 },
	{ label: 'TypeScript', icon: I.IconTS, description: 'Строгая типизация', skill: 3 },
	{ label: 'JavaScript', icon: I.IconJS, description: 'Интерактивность', skill: 3 },

	{ label: 'FSD', icon: I.IconFSD, description: 'Архитектура кода', skill: 4 },
	{ label: 'Tailwind CSS', icon: I.IconTW, description: 'Утилитарные стили', skill: 4 },
	{ label: 'MobX', icon: I.IconMobX, description: 'Реактивность', skill: 3 },

	{ label: 'HTML5', icon: I.IconHTML, description: 'Структура страниц', skill: 4 },
	{ label: 'CSS3', icon: I.IconCSS, description: 'Стили и анимации', skill: 4 },
	{ label: 'SASS', icon: I.IconSASS, description: 'Препроцессор CSS', skill: 1 },

	{ label: 'Laravel', icon: I.IconLaravel, description: 'PHP-фреймворк', skill: 2 },
	{ label: 'PHP', icon: I.IconPhp, description: 'Серверная логика', skill: 2 },
	{ label: 'REST API', icon: I.IconRest, description: 'Интеграция сервисов', skill: 3 },
	{ label: 'PostgreSQL', icon: I.IconPost, description: 'Реляционная БД', skill: 2 },
	{ label: 'Redis', icon: I.IconRedis, description: 'Фоновые задачи', skill: 2 },
	{ label: 'Supabase', icon: I.IconSB, description: 'Бэкенд SaaS', skill: 3 },

	{ label: 'Docker', icon: I.IconDocker, description: 'Контейнеризация', skill: 3 },
	{ label: 'Nginx', icon: I.IconNginx, description: 'Веб-сервер и прокси', skill: 2 },
	{ label: 'GitHub', icon: I.IconGithub, description: 'Контроль версий', skill: 3 },
	{ label: 'Vite', icon: I.IconVite, description: 'Сборка проекта', skill: 3 },

	{ label: 'VS Code', icon: I.IconVS, description: 'Редактор кода', skill: 4 },
	{ label: 'Figma', icon: I.IconFigma, description: 'Дизайн интерфейсов', skill: 1 },
	{ label: 'Illustrator', icon: I.IconAI, description: 'Вектор и логотипы', skill: 2 },
	{ label: 'Photoshop', icon: I.IconPS, description: 'Графика и ретушь', skill: 3 },
];

export const TECHS_EXTRA = ['HTML5', 'CSS3', 'SASS', 'VS Code', 'Figma', 'Illustrator', 'Photoshop'];
