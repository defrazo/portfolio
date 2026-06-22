import { TECHNOLOGIES, type Technology } from '../model';

export const getTechs = (labels: string[]): Technology[] =>
	labels.map((label) => TECHNOLOGIES.find((tech) => tech.label === label)).filter(Boolean) as Technology[];
