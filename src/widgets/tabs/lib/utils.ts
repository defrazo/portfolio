import { technologies, type Technology } from '@/entities/tecnology';
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

import type { Skill } from '../model';

export const skills = [
	{ label: 'React', value: 90, icon: IconReact, color: '#61DAFB' },
	{ label: 'TypeScript', value: 65, icon: IconTS, color: '#3178C6' },
	{ label: 'JavaScript', value: 65, icon: IconJS, color: '#F7DF1E' },
	{ label: 'MobX', value: 55, icon: IconMobX, color: '#FF9955' },
	{ label: 'Tailwind CSS', value: 74, icon: IconTW, color: '#38B2AC' },
	{ label: 'Supabase', value: 13, icon: IconSB, color: '#3ECF8E' },
	{ label: 'Vite', value: 18, icon: IconVite, color: '#646CFF' },
	{ label: 'HTML5', value: 85, icon: IconHTML, color: '#E34F26' },
	{ label: 'CSS3', value: 80, icon: IconCSS, color: '#1572B6' },
	{ label: 'SASS', value: 65, icon: IconSASS, color: '#CC6699' },
	{ label: 'PostgreSQL', value: 35, icon: IconPost, color: '#336791' },
	{ label: 'Docker', value: 25, icon: IconDocker, color: '#2496ED' },
	{ label: 'FSD', value: 25, icon: IconFSD, color: '#3193FF' },
	{ label: 'GitHub', value: 45, icon: IconGithub, color: '#FFF' },
	{ label: 'VS Code', value: 70, icon: IconVS, color: '#007ACC' },
	{ label: 'Figma', value: 55, icon: IconFigma, color: '#F24E1E' },
	{ label: 'Photoshop', value: 40, icon: IconPS, color: '#31A8FF' },
	{ label: 'Illustrator', value: 35, icon: IconAI, color: '#FF9A00' },
];

export const getTechs = (names: string[]): Technology[] =>
	names.map((name) => technologies.find((tech) => tech.name === name)).filter(Boolean) as Technology[];

export const getSkills = (labels: string[]): Skill[] =>
	labels.map((label) => skills.find((skill) => skill.label === label)).filter(Boolean) as Skill[];
