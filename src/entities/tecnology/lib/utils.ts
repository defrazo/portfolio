import { technologies, type Technology } from '../model';

export const getTechs = (names: string[]): Technology[] =>
	names.map((name) => technologies.find((tech) => tech.name === name)).filter(Boolean) as Technology[];
