import { type Skill, SKILLS } from '../model';

export const getSkills = (labels: string[]): Skill[] =>
	labels.map((label) => SKILLS.find((skill) => skill.label === label)).filter(Boolean) as Skill[];
