import { Database, MonitorSmartphone, Server } from 'lucide-react';

import { getTechs } from '@/entities/tecnology';

import type { TechGroup } from '.';

export const TECH_GROUPS: TechGroup[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		skills: getTechs(['React', 'TypeScript', 'JavaScript', 'FSD', 'Tailwind CSS', 'MobX']),
		icon: MonitorSmartphone,
		color: '#3B82F6',
	},
	{
		id: 'backend',
		title: 'Backend',
		skills: getTechs(['Laravel', 'PHP', 'REST API', 'PostgreSQL', 'Redis', 'Supabase']),
		icon: Database,
		color: '#10B981',
	},
	{
		id: 'devops',
		title: 'DevOps & Tools',
		skills: getTechs(['Docker', 'Nginx', 'GitHub', 'Vite']),
		icon: Server,
		color: '#8B5CF6',
	},
];

export const KEY_AREAS = [
	'React',
	'TypeScript',
	'Feature-Sliced Design',
	'MobX',
	'Tailwind CSS',
	'Laravel',
	'PHP',
	'PostgreSQL',
	'Redis',
	'REST API',
	'Supabase',
	'Docker',
	'Nginx',
	'VPS Deployment',
	'Vite',
	'Responsive Design',
];

export const SKILL_LEVELS = {
	advanced: {
		label: 'Продвинутый',
		color: '#3B82F6',
		description: 'Использую ежедневно и свободно ориентируюсь в её экосистеме',
	},
	high: {
		label: 'Высокий',
		color: '#14B8A6',
		description: 'Решаю нестандартные задачи, разбираюсь во внутреннем устройстве',
	},
	confident: {
		label: 'Уверенный',
		color: '#22C55E',
		description: 'Уверенно применяю на проектах, знаю основные практики',
	},
	middle: {
		label: 'Средний',
		color: '#F59E0B',
		description: 'Решаю типовые задачи, иногда обращаюсь к документации',
	},
	base: {
		label: 'Базовый',
		color: '#9CA3AF',
		description: 'Базовые знания, есть опыт применения или сейчас изучаю',
	},
} as const;

export const SKILL_LEVEL_HINTS = [
	SKILL_LEVELS.advanced,
	SKILL_LEVELS.high,
	SKILL_LEVELS.confident,
	SKILL_LEVELS.middle,
	SKILL_LEVELS.base,
];

export const getSkillLevel = (value: number) => {
	if (value === 5) return SKILL_LEVELS.advanced;
	if (value === 4) return SKILL_LEVELS.high;
	if (value === 3) return SKILL_LEVELS.confident;
	if (value === 2) return SKILL_LEVELS.middle;

	return SKILL_LEVELS.base;
};
