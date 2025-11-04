import { makeAutoObservable, reaction } from 'mobx';

import type { Theme } from '.';

export class ThemeStore {
	theme: Theme = 'dark';

	get currentTheme(): 'Светлая' | 'Темная' {
		return this.theme === 'light' ? 'Светлая' : 'Темная';
	}

	setTheme(theme: Theme): void {
		this.theme = theme;
		this.applyTheme(theme);
	}

	toggleTheme(): void {
		this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
	}

	private applyTheme(theme: Theme): void {
		if (typeof document === 'undefined') return;

		document.documentElement.classList.remove('light-theme', 'dark-theme');
		document.documentElement.classList.add(`${theme}-theme`);
		document.documentElement.style.colorScheme = theme;
	}

	constructor() {
		makeAutoObservable(this);

		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) {
			this.theme = savedTheme;
			this.applyTheme(savedTheme);
		}

		reaction(
			() => this.theme,
			(theme) => localStorage.setItem('theme', theme)
		);
	}
}
